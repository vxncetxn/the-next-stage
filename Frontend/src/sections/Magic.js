import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import ky from "ky";

import fetchDonor from "../fetch/fetchDonor";

import range from "../helpers/range";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import Shim from "../components/Shim";
import Block from "../components/form/Block";
import CTAButton from "../components/CTAButton";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  & > div + div,
  & > div + button {
    margin-top: 100px;
  }
`;

const SubmitButton = styled(CTAButton)`
  align-self: flex-end;
`;

const SubmitError = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
  color: red;
  text-align: right;
  height: 50px;
`;

const MagicComp = () => {
  const pathname = useLocation().pathname;
  const key = pathname.slice(12);
  const history = useHistory();

  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const { status: donorStatus, data: donor } = useQuery("donor", () =>
    fetchDonor(key)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let hasError = false;
    if (!nickname) {
      setNicknameError("*A nickname is required.");
      hasError = true;
    }
    if (!message) {
      setMessageError("*A message is required.");
      hasError = true;
    }

    if (hasError) {
      setSubmitError("*Some of the required fields have not been filled.");
    } else {
      console.log(nickname, message);
      // ky.post("https://example.com", { json: { foo: true } }).json();
    }
  };

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
            <Form>
              <Block
                type="input"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                error={nicknameError}
                labelText="choose a nickname*"
                sublabelText="Do note that this will be the name publicly featured in the
              gallery entry, so if you are shy, remember to use an anonymous
              name!"
                step={1}
                placeholder="nickname"
              />
              <Block
                type="input"
                pos="right"
                labelText="give a shoutout"
                sublabelText="Do note that this will be the name publicly featured in the
              gallery entry, so if you are shy, remember to use an anonymous
              name!"
                step={2}
                placeholder="artist name"
              />
              <Block
                type="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                labelText="write a message*"
                sublabelText="Do note that this will be the name publicly featured in the
              gallery entry, so if you are shy, remember to use an anonymous
              name!"
                step={3}
                placeholder="message"
              />
              <SubmitButton onClick={(e) => submitHandler(e)}>
                Submit
              </SubmitButton>
              <SubmitError>{submitError}</SubmitError>
            </Form>
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

export default MagicComp;
