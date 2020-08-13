import React from "react";

import {
  Container,
  Content,
  Header,
  HeaderWrapper,
  DropboxLogo,
} from "./styles";
import useSideMenu from "../../contexts/sidemenu";

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ title, description, variant }) => {
  const { setActive } = useSideMenu();

  return (
    <Container className={variant}>
    <HeaderWrapper>
      <Header>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button onClick={() => setActive(true)} >
          Interagir
        </button>
      </Header>
    </HeaderWrapper>

    <Content>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  </Container>
  );
};

export default Section;
