import React from "react";
import styled from "styled-components";

const PageIndicator = styled.div`
  z-index: 999;
  position: fixed;
  top: calc(50% - 75px);
  right: 40px;
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-primary);
  font-size: 12px;
  color: white;

  & > .bar {
    background-color: white;
    height: 80px;
    width: 1px;
  }
`;

const Navbar = styled.ul`
  z-index: 999;
  position: fixed;
  top: 40px;
  right: 100px;
  display: flex;
  //   border: 1px solid red;

  & > li {
    font-family: var(--font-primary);
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  & > li + li {
    margin-left: 40px;
  }
`;

const FixedOverlay = ({ setPage }) => {
  return (
    // <PageIndicator>
    //   <div>main</div>
    //   <div class="bar"></div>
    //   <div>01 / 05</div>
    // </PageIndicator>
    <Navbar>
      <li onClick={() => setPage("main")}>main</li>
      <li onClick={() => setPage("about")}>about</li>
      <li>faqs</li>
    </Navbar>
  );
};

export default FixedOverlay;
