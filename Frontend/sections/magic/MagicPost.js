import { useState } from "react";
import styled from "styled-components";

import Text from "../../components/Text";
import Anchor from "../../components/Anchor";
import Artefact from "../../components/Artefact";
import GalleryModal from "../../components/GalleryModal";

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

const MagicPostSection = ({ donor }) => {
  const [content, setContent] = useState(null);

  const closeModal = () => {
    setContent(null);
  };

  return (
    <>
      <Text>
        As part of our campaign, you have also created a unique virtual memento
        that commemorates these contributions that you have made - we hope you
        like it! You can now either view your virtual memento on this page below
        or in the online <Anchor to="/gallery">public gallery</Anchor>.
      </Text>
      <Viewer
        onClick={() =>
          setContent({
            donor: { amount: donor.amount },
            ...donor.artefact,
          })
        }
      >
        <Artefact form={donor.artefact.form} interactive={false} />
      </Viewer>
      {content ? (
        <GalleryModal content={content} closeHandler={closeModal} />
      ) : null}
    </>
  );
};

export default MagicPostSection;
