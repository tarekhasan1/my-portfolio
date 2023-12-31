import React from "react";
import App from "./App";
import { styled } from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  background: url("https://static.vecteezy.com/system/resources/previews/004/257/968/original/abstract-purple-fluid-wave-background-free-vector.jpg");
  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
margin-top: 70px;
`

const Layout = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Content>
      <App></App>
      </Content>
    </Container>
  );
};

export default Layout;
