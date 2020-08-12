import { useState } from "react";
import styled from "styled-components";
import { useMutation, queryCache } from "react-query";

import { postArtefact } from "../../utils/fetch";

import Text from "../../components/Text";
import Anchor from "../../components/Anchor";
import CTAButton from "../../components/CTAButton";
import Block from "../../components/Block";
import Input from "../../components/Input";
import DuoInput from "../../components/DuoInput";
import Textarea from "../../components/Textarea";

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
  min-width: 140px;
  min-height: 50px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
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

const MagicPreSection = () => {
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [artist, setArtist] = useState("");
  const [artistLink, setArtistLink] = useState("");
  const [artistError, setArtistError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitError, setSubmitError] = useState("");

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

    let hasError = false;
    if (!nickname) {
      setNicknameError("*A nickname is required.");
      hasError = true;
    }
    if (!message) {
      setMessageError("*A message is required.");
      hasError = true;
    }
    if (artistLink && !artist) {
      setArtistError(
        "*An artist name is required if you have filled in an artist link."
      );
      hasError = true;
    }

    if (hasError) {
      setSubmitError("*Some of the fields have errors.");
    } else {
      // console.log(nickname, message);
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
      <Form>
        <Block
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
        <SubmitError>{submitError}</SubmitError>
      </Form>
    </>
  );
};

export default MagicPreSection;
