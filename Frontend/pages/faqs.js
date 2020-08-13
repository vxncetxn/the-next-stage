import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import Accordion from "../components/Accordion";

const Faqs = styled.section`
  position: relative;
  display: flex;
`;

const FaqsTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const FaqsContent = styled.div`
  padding: 150px 100px 50px 100px;

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

const faqItems = [
  {
    triggerText: "Who organised this fundraiser?",
    panelContents: (
      <Text>
        This fundraiser is organised by students from the{" "}
        <Anchor href="https://www.sutd.edu.sg/">
          Singapore University of Technology and Design
        </Anchor>{" "}
        as part of their final-year Capstone Project in support of their project
        industry partner{" "}
        <Anchor href="https://www.sutd.edu.sg/">
          Esplanade — Theatres on the Bay
        </Anchor>{" "}
        for the upcoming 550-seat Singtel Waterfront Theatre.
      </Text>
    ),
    maxHeight: "170px",
  },
  {
    triggerText: "Who can donate to this fundraiser?",
    panelContents:
      "As we make use of Giving.sg as our donation platform, the terms for donation to our fundraiser is set by them - if you are below the age of 13, you are not allowed to donate on Giving.sg, if you are between the ages of 13 and 17, you must obtain parental consent before you are allowed to donate, if you are are of age 18 and above, you are free to donate without any restrictions.",
    maxHeight: "200px",
  },
  {
    triggerText: "What is Giving.sg?",
    panelContents: (
      <Text>
        Giving.sg is a donation platform hosted and maintained by the{" "}
        <Anchor href="https://cityofgood.sg/">
          National Volunteer & Philanthropy Centre
        </Anchor>
        , an Institution of a Public Character. We have chosen Giving.sg as the
        donation platform for our fundraiser due to the assurances of safety and
        security afforded by it which will be hard to achieve by the small team
        behind our fundraiser. For more information about Giving.sg, please
        refer to their <Anchor href="https://www.giving.sg/">website</Anchor> or
        their <Anchor href="https://www.giving.sg/faq">FAQs page</Anchor>.
      </Text>
    ),
    maxHeight: "300px",
  },
  {
    triggerText: "How will the money donated to this fundraiser be used?",
    panelContents:
      "Yes, you can decide how you want to define your problem statement. If you are unsure of any ideas, you may approach the organizers for clarification at the hackathon!",
  },
  {
    triggerText: "Are donations to this fundraiser tax-deductible?",
    panelContents: (
      <Text>
        Yes, TDRs (tax deduction receipts) will be issued for donations that are
        $50 and above. Please refer to{" "}
        <Anchor href="https://www.giving.sg/">this link</Anchor> for more
        information on how to claim your tax deductions after making your
        donation on Giving.sg.
      </Text>
    ),
    maxHeight: "140px",
  },
  {
    triggerText:
      "I have just donated, how can I create my own virtual memento?",
    panelContents:
      "After your donation has been confirmed, we will send you an email (to the email address you used to register with Giving.sg) containing a unique magic link. Over in the magic link, we will ask you to write some messages to our local arts community and your responses will be used as seeds to generate a unique memento.",
    maxHeight: "170px",
  },
  {
    triggerText:
      "I have lost access to my magic link/my magic link has been compromised.",
    panelContents:
      "Just send us a request for a new magic link over here, and we will send you an email (to the email address you used to register with Giving.sg) for confirmation. After confirmation, we will send you an updated magic link, and any previous links will no longer be valid.",
    maxHeight: "140px",
  },
  {
    triggerText:
      "I cannot see any content in the Socials section of your homepage.",
    panelContents:
      "The content for the Socials section are loaded from Instagram, therefore, your browser or some extension you have installed might have identified it as a social media tracker and blocked it - for example, the latest versions of Firefox automatically blocks such content under their Enhanced Tracking Protection feature. If you would still like to see the content, you might want to disable these blocking features for our website.",
    maxHeight: "210px",
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
      <FaqsTitleBar level={1} position="left">
        faqs
      </FaqsTitleBar>
      <FaqsContent>
        <Accordion id="faqs-accordion" items={faqItems} />
      </FaqsContent>
    </Faqs>
  );
};

export default FaqsComp;
