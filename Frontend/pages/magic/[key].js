import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { range } from "../../utils";
import { fetchDonor } from "../../utils/fetch";

import MagicPre from "../../sections/magic/MagicPre";
import MagicPost from "../../sections/magic/MagicPost";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import Shim from "../../components/Shim";

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

const MagicLinkPage = () => {
  console.log(useRouter());
  const key = useRouter().query.key;

  const { status: donorStatus, data: donor } = useQuery(
    key ? "donor" : false,
    () => fetchDonor(key)
  );

  return (
    <Magic>
      <MagicContent>
        {donor ? (
          <>
            <Hello>hello {donor.firstName},</Hello>
            <Text>
              Thank you so much for your generous donation to{" "}
              <i>The Next Stage</i>. Your contributions will no doubt allow
              Esplanade to use the upcoming SingTel Waterfront Theatre as a
              platform to empower the local arts scene and also to continue in
              their tireless mission to bring about transformative arts
              experiences to our communities.
            </Text>
            <br />
            <br />
            {donor.artefact ? <MagicPost donor={donor} /> : <MagicPre />}
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
      <MagicTitleBar position="right">thank you</MagicTitleBar>
    </Magic>
  );
};

export default MagicLinkPage;
