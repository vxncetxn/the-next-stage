import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import ky from "ky";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
// import Anchor from "../components/Anchor";

const Magic = styled.section`
  position: relative;
  display: flex;
`;

const MagicTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const MagicContent = styled.div`
  padding: 150px 100px 50px 100px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 150px 75px 50px 75px;
  }

  @media (max-width: 896px) {
    padding: 150px 50px 50px 50px;
  }

  @media (max-width: 600px) {
    padding: 150px 20px 50px 20px;
  }
`;

const Welcome = styled.p`
  font-family: var(--font-primary);
  font-size: 48px;
  color: var(--color-text);
`;

const MagicComp = () => {
  const pathname = useLocation().pathname;
  const key = pathname.slice(12);
  const history = useHistory();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchDonor = async () => {
      try {
        const fetchedDonor = await ky
          .get(`https://the-next-stage.herokuapp.com/api/magic/${key}`)
          .json();
        setDonor(fetchedDonor.donor);
      } catch (err) {
        history.push("/404");
      }
    };

    fetchDonor();
  }, []);

  return (
    <Magic>
      <MagicContent>
        {/* {donor ? <Welcome>Welcome {donor.name},</Welcome> : null} */}
      </MagicContent>
      <MagicTitleBar position="right">your artefact</MagicTitleBar>
    </Magic>
  );
};

export default MagicComp;
