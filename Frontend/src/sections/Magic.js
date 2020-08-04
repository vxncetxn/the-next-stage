import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import ky from "ky";

import range from "../helpers/range";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import Shim from "../components/Shim";

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

const Hello = styled.p`
  font-family: var(--font-primary);
  font-size: 48px;
  line-height: 1;
  color: var(--color-text);
  margin-bottom: 50px;
`;

const HelloShim = styled(Shim)`
  border-radius: 4px;
  width: 40%;
  height: 45px;
  margin-bottom: 60px;
`;

const TextShim = styled(Shim)`
  border-radius: 4px;
  width: 100%;
  height: 20px;
  margin-bottom: 15px;
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
        setDonor(fetchedDonor.data);
      } catch (err) {
        history.push("/404");
      }
    };

    fetchDonor();
  }, []);

  return (
    <Magic>
      <MagicContent>
        {donor ? (
          <>
            <Hello>hello {donor.nickname},</Hello>
            <Text>
              Thank you so much for your generous donation to{" "}
              <i>The Next Stage</i>. Your contributions will no doubt allow
              Esplanade to use the upcoming SingTel Waterfront Theatre as a
              platform to empower our local arts scene and also to continue in
              our tireless mission to bring about transformative arts
              experiences to our communities.
            </Text>
            <br />
            <br />
            <Text>
              As part of our campaign, we invite you to create a unique digital
              artefact which will be featured in the online{" "}
              <Anchor>public gallery</Anchor> and also the eventual AR
              exhibition. The digital artefact will be uniquely generated from
              your responses below, have fun! 🥳
            </Text>
          </>
        ) : (
          <>
            <HelloShim />
            {range(4).map(() => {
              return (
                <>
                  <TextShim />
                  <TextShim />
                  <TextShim />
                  <TextShim />
                  <br />
                  <br />
                </>
              );
            })}
          </>
        )}
      </MagicContent>
      <MagicTitleBar position="right">artefact</MagicTitleBar>
    </Magic>
  );
};

export default MagicComp;
