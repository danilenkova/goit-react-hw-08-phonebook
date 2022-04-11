import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 15px 0;
  @media screen and (min-width: 420px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default StyledHeader;
