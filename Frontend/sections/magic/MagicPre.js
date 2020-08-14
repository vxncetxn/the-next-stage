import { useState, useRef } from "react";
import styled from "styled-components";
import { useMutation, queryCache } from "react-query";

import { postArtefact } from "../../utils/fetch";

import Stack from "../../components/Stack";
import Text from "../../components/Text";
import Anchor from "../../components/Anchor";
import CTAButton from "../../components/CTAButton";
import Block from "../../components/Block";
import Input from "../../components/Input";
import DuoInput from "../../components/DuoInput";
import Textarea from "../../components/Textarea";

const Form = styled(Stack)`
  margin-top: calc(var(--rhythm) * 2.5);
`;

const SubmitButton = styled(CTAButton)`
  min-width: 140px;
  min-height: 50px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorSummary = styled.div`
  // margin-top: 100px;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 30px 35px;
  border-radius: 8px;
`;

const ErrorLink = styled.a`
  font-family: var(--font-secondary);
  font-size: 18px;
  color: red;
  text-decoration: underline dotted;
  line-height: 2;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 896px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const MagicPreSection = () => {
  const errorSummaryRef = useRef();

  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [artist, setArtist] = useState("");
  const [artistLink, setArtistLink] = useState("");
  const [artistError, setArtistError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorsArr, setErrorsArr] = useState([]);

  const [submit, { status: submitStatus }] = useMutation(
    () =>
      postArtefact({
        donorId: donor.id,
        colorPoles: ["#c2e59c", "#64b3f4"],
        nickname,
        // shoutout: { artist, artistLink },
        message,
      }),
    {
      onSuccess: () => {
        queryCache.invalidateQueries("donor");
        window.scrollTo(0, 0);
      },
    }
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    let errorNums = [];
    if (!nickname) {
      setNicknameError("A nickname is required.*");
      errorNums.push(1);
    }
    if (!message) {
      setMessageError("A message is required.*");
      errorNums.push(2);
    }
    if (artistLink && !artist) {
      setArtistError(
        "An artist name is required if you have filled in an artist link.*"
      );
      errorNums.push(3);
    }

    if (errorNums.length) {
      // setSubmitError("*Some of the fields have errors.");
      setErrorsArr(errorNums);
      // console.log(errorSummaryRef);
      setTimeout(() => {
        errorSummaryRef.current.focus();
        window.scrollBy(0, -200);
      }, 100);
    } else {
      submit();
    }
  };

  return (
    <>
      <Text>
        As part of our campaign, we invite you to create a unique digital
        artefact which will be featured in the online{" "}
        <Anchor to="/gallery">public gallery</Anchor>. The digital artefact will
        be uniquely generated from your responses below, have fun! 🥳
      </Text>
      {errorsArr.length ? (
        <ErrorSummary role="alert">
          <Text
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--color-text)",
            }}
          >
            There are {errorsArr.length} errors with your submission:
          </Text>
          <br />
          <br />
          {nicknameError ? (
            <>
              <ErrorLink ref={errorSummaryRef} href="#nickname">
                1. {nicknameError}
              </ErrorLink>
              <br />
            </>
          ) : null}
          {artistError ? (
            <>
              <ErrorLink href="#artist">2. {artistError}</ErrorLink>
              <br />
            </>
          ) : null}
          {messageError ? (
            <>
              <ErrorLink href="#message">3. {messageError}</ErrorLink>
              <br />
            </>
          ) : null}
        </ErrorSummary>
      ) : null}
      <Form forwardedAs="form" ratio={2.5}>
        <Block
          id="nickname"
          subId="nickname-desc"
          errId="nickname-err"
          error={nicknameError}
          labelText="choose a nickname*"
          sublabelText="Do note that this will be the name publicly featured in the
    gallery entry, so if you are shy, remember to use an anonymous
    name!"
          step={1}
        >
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="nickname"
            aria-required="true"
          />
        </Block>
        <Block
          error={artistError}
          labelText="give a shoutout"
          sublabelText="The new Singtel Waterfront Theatre aims to enable our local arts 
        community, so take this chance to shout out and dedicate your donation to a 
        talented local act that we should definitely not miss out!"
          step={2}
        >
          <DuoInput
            valueTop={artist}
            onChangeTop={(e) => setArtist(e.target.value)}
            placeholderTop="artist name"
            valueBottom={artistLink}
            onChangeBottom={(e) => setArtistLink(e.target.value)}
            placeholderBottom="artist link"
          />
        </Block>
        <Block
          id="message"
          subId="message-desc"
          errId="message-err"
          error={messageError}
          labelText="write a message*"
          sublabelText="Write some words of encouragement and support for our local arts 
        community - we are sure that they would love to hear from your heart!"
          step={3}
        >
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            aria-required="true"
          />
        </Block>
        <SubmitButton onClick={(e) => submitHandler(e)}>
          {submitStatus === "loading" ? (
            <div class="loader">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              <div class="dot dot4"></div>
            </div>
          ) : (
            "Submit"
          )}
        </SubmitButton>
      </Form>
    </>
  );
};

export default MagicPreSection;
