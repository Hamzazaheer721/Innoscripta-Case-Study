import { Heading } from "styles";
import { Navbar, NavItem, Section } from "./index.styled";
import { memo } from "react";
import useScrollToTop from "hooks/useScrollToTop";

const Header = memo(() => {
  const scrollToTop = useScrollToTop();
  return (
    <Section>
      <Heading>Innoscripta</Heading>
      <Navbar>
        <NavItem onClick={scrollToTop}>Home</NavItem>
      </Navbar>
    </Section>
  );
});

export default Header;
