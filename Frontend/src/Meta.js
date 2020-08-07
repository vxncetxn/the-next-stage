import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Meta = () => {
  const pathname = useLocation().pathname.split("/")[1];
  var location;
  switch (pathname) {
    case "":
      break;
    case "faqs":
      location = "FAQs";
      break;
    case "press-room":
      location = "Press Room";
      break;
    case "terms-and-conditions":
      location = "Terms & Conditions";
      break;
    case "privacy-policy":
      location = "Privacy Policy";
      break;
    case "gallery":
      location = "Gallery";
      break;
    case "✨THANKYOU✨":
      location = "✨THANKYOU✨";
      break;
    default:
      location = "Page Not Found";
  }

  const title = location
    ? `${location} | The Next Stage — In Collaboration with Esplanade`
    : `The Next Stage — In Collaboration with Esplanade`;
  const description =
    "The Next Stage is a fundraising initiative organised by students from SUTD for Esplanade's upcoming Singtel Waterfront Theatre.";
  const url =
    location === "Page Not Found"
      ? "https://thenextstage.sg/"
      : `https://thenextstage.sg${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />

      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
    </Helmet>
  );
};

export default Meta;
