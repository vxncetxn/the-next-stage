import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Text from "../../components/Text";
import Anchor from "../../components/Anchor";
import Artefact from "../../components/artefact/Artefact";
import GalleryModal from "../../components/GalleryModal";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Viewer = styled.div`
  margin-top: 50px;
  height: 500px;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.3s ease-out;

  &:hover {
    border: 2px solid var(--color-text);
  }
`;

const Title = styled.div`
  position: absolute;
  left: 25px;
  bottom: 16px;
  font-family: var(--font-primary);
  font-size: 24px;
  color: var(--color-text);

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
    left: 18px;
    bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }

  & > span {
    font-weight: 700;

    ${(props) => `background: linear-gradient(
        150deg,
        ${props.colorPoles[0]} 20%,
        ${props.colorPoles[1]} 40%,
        ${props.colorPoles[1]} 60%,
        ${props.colorPoles[0]} 80%
      );
      background-size: 200% auto;`}

    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${Flow} linear infinite;
    animation-duration: 2s;
  }
`;

const MagicPost = ({ donor, ...others }) => {
  const [content, setContent] = useState(null);

  const closeModal = () => {
    setContent(null);
  };

  return (
    <>
      <Text>
        As part of our campaign, you have also created a unique digital memento
        that signifies these contributions that you have made - we hope you like
        it! You can now either view your digital memento on this page below or
        in the online <Anchor>public gallery</Anchor>.
      </Text>
      <Viewer
        onClick={() =>
          setContent({
            donor: { nickname: donor.nickname, amount: donor.amount },
            ...donor.artefact,
          })
        }
      >
        <Artefact form={donor.artefact.form} />
      </Viewer>
      {content ? (
        <GalleryModal content={content} closeHandler={closeModal} />
      ) : null}
    </>
  );
};

export default MagicPost;
