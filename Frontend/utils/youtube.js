import React, { useState, useRef, useEffect } from "react";

const LiteYouTubeEmbed = ({
  adNetwork,
  id,
  playlist,
  poster,
  title,
  noCookie,
  activatedClass,
  iframeClass,
  playerClass,
  wrapperClass,
}) => {
  const [preconnected, setPreconnected] = useState(false);
  const [iframe, setIframe] = useState(false);
  const videoId = encodeURIComponent(id);
  const videoTitle = title;
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  const ytUrl = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com";
  const iframeSrc = !playlist
    ? `${ytUrl}/embed/${videoId}?autoplay=1`
    : `${ytUrl}/embed/videoseries?list=${videoId}`;
  const videoRef = useRef();

  const warmConnections = () => {
    if (preconnected) return;
    setPreconnected(true);
  };
  const addIframe = () => {
    if (iframe) return;
    setIframe(true);
    videoRef.current.tabIndex = "0";
    videoRef.current.focus();
  };

  useEffect(() => {
    const { current } = videoRef;
    current.style.backgroundImage = `url('${posterUrl}')`;
    current.addEventListener("pointerover", warmConnections, true);
    current.addEventListener("click", addIframe, true);

    return () => {
      current.removeEventListener("pointerover", warmConnections);
      current.removeEventListener("click", addIframe);
    };
  });

  return (
    <>
      <link rel="preload" href={posterUrl} as="image" />
      <>
        {preconnected && (
          <>
            <link rel="preconnect" href={ytUrl} />
            <link rel="preconnect" href="https://www.google.com" />
            {adNetwork && (
              <>
                <link rel="preconnect" href="https://static.doubleclick.net" />
                <link
                  rel="preconnect"
                  href="https://googleads.g.doubleclick.net"
                />
              </>
            )}
          </>
        )}
      </>
      <div
        className={`${wrapperClass} ${iframe && activatedClass}`}
        data-title={videoTitle}
        ref={videoRef}
      >
        {iframe ? null : <button className={playerClass}></button>}
        {iframe && (
          <iframe
            className={iframeClass}
            title={videoTitle}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            src={iframeSrc}
          ></iframe>
        )}
      </div>
    </>
  );
};

LiteYouTubeEmbed.defaultProps = {
  adNetwork: true,
  id: "",
  playlist: false,
  poster: "hqdefault",
  title: "YouTube Embed",
  noCookie: false,
  activatedClass: "lyt-activated",
  iframeClass: "",
  playerClass: "lty-playbtn",
  wrapperClass: "yt-lite",
};

export default LiteYouTubeEmbed;
