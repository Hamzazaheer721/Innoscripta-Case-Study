import { Heading } from "styles";
import { Navbar, NavItem, Section } from "./index.styled";
import { memo } from "react";

const Header = memo(() => {
  return (
    <Section>
      <Heading>Innoscripta</Heading>
      <Navbar>
        <NavItem>Home</NavItem>
      </Navbar>
    </Section>
  );
});

export default Header;
