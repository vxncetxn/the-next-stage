import React from "react";
import styled from "styled-components";

import { TwitterTweetEmbed } from "react-twitter-embed";

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

  & > * {
    width: 47.5%;
  }

  @media (max-width: 896px) {
    display: none;
  }
`;

const SocialsColComp = ({ tweetIdsArr, ...others }) => {
  return (
    <>
      <SingleCol {...others}>
        {tweetIdsArr.map((tweetId) => (
          <TwitterTweetEmbed tweetId={tweetId} />
        ))}
      </SingleCol>
      <DuoCol {...others}>
        <div>
          {tweetIdsArr.flatMap((tweetId, idx) => {
            if (idx % 2 === 0) {
              return <TwitterTweetEmbed tweetId={tweetId} />;
            }
          })}
        </div>
        <div>
          {tweetIdsArr.flatMap((tweetId, idx) => {
            if (idx % 2 === 1) {
              return <TwitterTweetEmbed tweetId={tweetId} />;
            }
          })}
        </div>
      </DuoCol>
    </>
  );
};

export default SocialsColComp;
