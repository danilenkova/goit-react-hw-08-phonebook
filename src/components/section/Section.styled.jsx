import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 40px;
  @media screen and (min-width: 420px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  width: 100%;
`;
