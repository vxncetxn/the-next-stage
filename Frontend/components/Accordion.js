import { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import Stack from "../components/Stack";
import Text from "../components/Text";

const Accordion = styled(Stack)`
  width: 100%;
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
  transform: rotate(${(props) => (props.expanded ? "45" : "0")}deg);
  transition: transform 0.5s ease-out;

  @media (max-width: 1200px) {
    left: -8px;
    width: 18px;
    height: 18px;
  }

  @media (max-width: 896px) {
    left: -6px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`;

const AccordionTrigger = styled.button`
  text-align: left;
`;

const AccordionTitle = styled.span`
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text);
  border-bottom: 1px solid white;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const AccordionPanel = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
`;

const AccordionComp = ({ id, items, ...others }) => {
  const triggerRefs = useRef([]);
  const [expandedNum, setExpandedNum] = useState(-1);

  return (
    <Accordion ratio={2} id={id} {...others}>
      {items.map((item, idx) => {
        const maxHeight = item.maxHeight ? item.maxHeight : "100px";
        const expanded = idx === expandedNum;

        const transitionStyles = {
          entering: { maxHeight: 0 },
          entered: { maxHeight },
          exiting: { maxHeight: 0 },
          exited: { maxHeight: 0 },
        };

        return (
          <AccordionItem key={idx}>
            <AccordionBullet expanded={expanded} />
            <h2>
              <AccordionTrigger
                ref={(ref) => (triggerRefs.current[idx] = ref)}
                id={`${id}-trigger-${idx}`}
                aria-expanded={expanded}
                aria-controls={`${id}-panel-${idx}`}
                onClick={() => {
                  if (expanded) {
                    setExpandedNum(-1);
                  } else {
                    setExpandedNum(idx);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    triggerRefs.current[(idx + 1) % items.length].focus();
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    triggerRefs.current[
                      idx - 1 < 0 ? items.length - 1 : idx - 1
                    ].focus();
                  } else if (e.key === "Home") {
                    triggerRefs.current[0].focus();
                  } else if (e.key === "End") {
                    triggerRefs.current[items.length - 1].focus();
                  }
                }}
              >
                <AccordionTitle>{item.triggerText}</AccordionTitle>
              </AccordionTrigger>
            </h2>
            <Transition
              in={expanded}
              timeout={{ enter: 0, exit: 500 }}
              mountOnEnter={true}
              unmountOnExit={true}
            >
              {(state) => (
                <AccordionPanel
                  style={{
                    ...transitionStyles[state],
                  }}
                  id={`${id}-panel-${idx}`}
                  role="region"
                  aria-labelledby={`${id}-trigger-${idx}`}
                  expanded={expanded}
                  maxHeight={maxHeight}
                >
                  <Text style={{ marginTop: 30 }}>{item.panelContents}</Text>
                </AccordionPanel>
              )}
            </Transition>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

AccordionComp.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default AccordionComp;
