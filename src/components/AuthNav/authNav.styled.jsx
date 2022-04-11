import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  display: block;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
