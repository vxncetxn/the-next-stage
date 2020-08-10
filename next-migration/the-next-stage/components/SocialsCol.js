import styled from "styled-components";
import InstagramEmbed from "react-instagram-embed";

const SingleCol = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;

  @media (max-width: 896px) {
    display: flex;
  }
`;

const DuoCol = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 47.5%;
  }

  @media (max-width: 896px) {
    display: none;
  }
`;

const SocialsColComp = ({ embedUrlsArr, ...others }) => {
  return (
    <>
      <SingleCol {...others}>
        {embedUrlsArr.map((url) => (
          <InstagramEmbed url={url} />
        ))}
      </SingleCol>
      <DuoCol {...others}>
        <div>
          {embedUrlsArr.flatMap((url, idx) => {
            if (idx % 2 === 0) {
              return <InstagramEmbed url={url} />;
            }
          })}
        </div>
        <div>
          {embedUrlsArr.flatMap((url, idx) => {
            if (idx % 2 === 1) {
              return <InstagramEmbed url={url} />;
            }
          })}
        </div>
      </DuoCol>
    </>
  );
};

export default SocialsColComp;
