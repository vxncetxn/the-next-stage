import styled from "styled-components";

import Shim from "./Shim";

const CustomShim = styled(Shim)`
  border-radius: 4px;
  background-image: linear-gradient(
    to right,
    #202446 4%,
    #303669 25%,
    #202446 36%
  );
`;

const GalleryModalShim = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 0 60px;
  margin: 50px 0;
  border-left: 0.5px solid var(--color-text);

  @media (max-width: 1200px) {
    padding: 0 45px;
  }

  @media (max-width: 896px) {
    width: 100%;
    height: 60%;
    flex: none;
    margin: 0;
    padding: 0 40px 30px 40px;
    border-left: none;
  }

  @media (max-width: 600px) {
    padding: 0 30px 30px 30px;
  }
`;

const TitleShim = styled(CustomShim)`
  width: 60%;
  height: 34px;
  margin-top: 10px;

  @media (max-width: 1200px) {
    height: 32px;
  }

  @media (max-width: 896px) {
    height: 30px;
  }

  @media (max-width: 600px) {
    height: 28px;
  }
`;

const SmallTextShim = styled(CustomShim)`
  width: 15%;
  height: 14px;

  @media (max-width: 896px) {
    height: 12px;
  }

  @media (max-width: 600px) {
    height: 10px;
  }
`;

const TextShim = styled(CustomShim)`
  width: 100%;
  height: 20px;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    height: 18px;
  }

  @media (max-width: 896px) {
    height: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    height: 14px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  & > div + div {
    margin-top: 8px;
  }
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  & > div {
    display: flex;
    margin-top: 15px;
  }

  & > div > div + div {
    margin-left: 20px;
  }
`;

const IconShim = styled(CustomShim)`
  width: 40px;
  height: 40px;
  border-radius: 40px;

  @media (max-width: 896px) {
    width: 30px;
    height: 30px;
  }
`;

const GalleryModalShimComp = () => {
  return (
    <GalleryModalShim>
      <TitleShim />
      <InfoRow>
        <SmallTextShim />
        <SmallTextShim />
      </InfoRow>
      <TextRow>
        <TextShim />
        <TextShim />
        <TextShim />
      </TextRow>
      <IconsRow>
        <SmallTextShim />
        <div>
          <IconShim />
          <IconShim />
        </div>
      </IconsRow>
    </GalleryModalShim>
  );
};

export default GalleryModalShimComp;
