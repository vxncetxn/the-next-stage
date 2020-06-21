import React from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import Accordion from "../components/Accordion";

const Faqs = styled.section`
  position: relative;
  display: flex;
`;

const FaqsContent = styled.div`
  padding: 270px 100px 20px 100px;
`;

const faqItems = [
  {
    triggerText: "Who is eligible to participate?",
    panelContents:
      "You need to be at least 13 years of age at the time of the event to be eligible to participate. If you are over 13 but under 18 years of age, you will be eligible to participate only if you have parental consent (Please print out the consent and indemnity form for your parent’s signature and bring it on the day of the hackathon). If you are 18 and older, you would need to present a printed and signed indemnity form upon registration. The respective forms will be emailed to you upon confirmation of your registration.",
    maxHeight: "250px",
  },
  {
    triggerText: "Is this hackathon free?",
    panelContents:
      "Yes, this hackathon is completely free. Come down and have fun, you never know what your ideas might turn into!",
  },
  {
    triggerText: "Can I participate as an individual?",
    panelContents:
      "Sure! You can sign up and particpate solely as an individual, or if you would like to, you could sign up as an individual and request for a group during registration and we will help you find a group.",
    maxHeight: "150px",
  },
  {
    triggerText: "Are the themes open to interpretation?",
    panelContents:
      "Yes, you can decide how you want to define your problem statement. If you are unsure of any ideas, you may approach the organizers for clarification at the hackathon!",
  },
  {
    triggerText: "Can I start ideating before the competition?",
    panelContents:
      "Yes, you can begin conceptualizing your ideas or planning your approach to the themes before the competition. However only work done on the prototype during the competition itself will be judged.",
    maxHeight: "150px",
  },
  {
    triggerText: "What should I bring to the event?",
    panelContents:
      "Please bring your computers. A limited quantity of consumable materials such as cardboard, wood and acrylic will be provided, and standard workshop tools will be available. Prototyping materials such as Arduino Unos, some sensors etc will also be available for loan.",
    maxHeight: "180px",
  },
  {
    triggerText: "When is the registration deadline?",
    panelContents:
      "We will close registration when we hit the maximum capacity allowable for the hackathon or by 4th February 2359, depending on whichever one is earlier.",
  },
  {
    triggerText: "How would I know if my registration is confirmed?",
    panelContents:
      "You would receive an email stating that your registration is confirmed along with a copy of the indemnity form for your completion.",
  },
  {
    triggerText: "I have a question that is not answered here.",
    panelContents: (
      <Text>
        If you have any further questions, feel free to email us at{" "}
        <Anchor href="mailto:esplanade@fakemail.com">
          esplanade@fakemail.com
        </Anchor>{" "}
        and we will get back to you as soon as possible!
      </Text>
    ),
  },
];

const FaqsComp = () => {
  return (
    <Faqs>
      <FaqsContent>
        <Accordion items={faqItems} />
      </FaqsContent>
      <SectionTitleBar position="right" paddingTop="265px">
        faqs
      </SectionTitleBar>
    </Faqs>
  );
};

export default FaqsComp;
