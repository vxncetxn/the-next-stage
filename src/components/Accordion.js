import React from "react";
import styled from "styled-components";

import Text from "../components/Text";

const Accordion = styled.div`
  width: 100%;

  & > div + div {
    margin-top: 70px;
  }
`;

const AccordionItem = styled.div`
  position: relative;
`;

const AccordionBullet = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  z-index: -1;
  width: 20px;
  height: 20px;
  opacity: 0.8;
  background: linear-gradient(
    90deg,
    var(--color-gradient-one) 0%,
    var(--color-gradient-two) 100%
  );
  transform: rotate(0deg);
  transition: transform 0.5s ease-out;
`;

const AccordionTrigger = styled.span`
  font-family: var(--font-primary);
  font-size: 24px;
  color: var(--color-text);
  border-bottom: 1px solid white;
  cursor: pointer;
`;

const AccordionPanel = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
`;

const AccordionComp = ({ items, ...others }) => {
  return (
    <Accordion {...others}>
      {items.map((item) => {
        const maxHeight = item.maxHeight ? item.maxHeight : "100px";

        return (
          <AccordionItem>
            <AccordionBullet />
            <AccordionTrigger
              onClick={(e) => {
                const panel = e.target.nextSibling;
                const bullet = e.target.previousSibling;

                if (panel.style.maxHeight === maxHeight) {
                  panel.style.maxHeight = "0";
                } else {
                  panel.style.maxHeight = maxHeight;
                }

                if (bullet.style.transform === "rotate(45deg)") {
                  bullet.style.transform = "rotate(0deg)";
                } else {
                  bullet.style.transform = "rotate(45deg)";
                }
              }}
            >
              {item.triggerText}
            </AccordionTrigger>
            <AccordionPanel>
              <Text style={{ marginTop: 30 }}>{item.panelContents}</Text>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionComp;
