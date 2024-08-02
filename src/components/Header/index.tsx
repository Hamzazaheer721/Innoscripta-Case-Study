import { Heading } from "styles";
import { Navbar, NavItem, Section } from "./index.styled";

const Header = () => {
  return (
    <Section>
      <Heading>Innooscripta</Heading>
      <Navbar>
        <NavItem>Home</NavItem>
      </Navbar>
    </Section>
  );
};

export default Header;
