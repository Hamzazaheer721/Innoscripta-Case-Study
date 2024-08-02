import styled from "styled-components";
import { device } from "styles";

export const Navbar = styled.nav`
  margin-left: auto;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.6;
    transition: all 0.2s ease-in;
  }
`;

export const Section = styled.section`
  position: sticky;
  display: flex;
  font-size: 2rem;
  padding: 2rem 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 10px 25px rgba(111, 93, 115, 0.102);
  box-sizing: border-box;

  @media ${device.mobileAndBelow} {
    flex-direction: column;
    font-size: 1.5rem;
    padding-inline: unset;
    place-items: center;
    gap: 2rem;
    & > ${Navbar} {
      margin: auto;
    }
  }
`;

export const NavItem = styled.a``;
