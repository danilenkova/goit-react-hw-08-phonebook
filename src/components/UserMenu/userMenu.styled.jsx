import styled from "styled-components";

export const UserBar = styled.div`
  display: flex;
  @media screen and (min-width: 420px) and (max-width: 768px) {
    align-self: center;
  }
`;

export const Greetings = styled.p`
  margin-right: 10px;
`;

export const Name = styled.span`
  color: red;
`;

export const LogOutButton = styled.button`
  width: 80px;
  height: 25px;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5);
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    color: #e0c3fc;
    text-shadow: -1px -2px 1px #000;
  }
`;
