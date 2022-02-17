import React from "react";
import PropTypes from "prop-types";
import {
  StyledSection,
  StyledHeaderSection,
  SectionTitle,
  HeaderTitle,
} from "./Section.styled";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/contacts";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

const HeaderSection = ({ children }) => {
  const loader = useSelector(contactsSelectors.getLoading);
  return (
    <StyledHeaderSection>
      <HeaderTitle>
        <span>Phone</span>Book
      </HeaderTitle>
      {loader && <Loader />}
      <>{children}</>
    </StyledHeaderSection>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

HeaderSection.propTypes = {
  children: PropTypes.node,
};

export { Section, HeaderSection };
