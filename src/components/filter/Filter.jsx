import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import {
  StyledFilter,
  FilterLabel,
  FilterField,
  FilterInput,
} from "./Filter.styled";
import Reset from "../resetbutton";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <StyledFilter>
      <FilterLabel>
        <FilterField>Find contacts by name</FilterField>
        <FilterInput
          type="text"
          name="filter"
          onChange={(e) =>
            dispatch(contactsActions.changeFilter(e.target.value))
          }
          value={filter}
          placeholder="Enter name"
          autoComplete="off"
        />
      </FilterLabel>
      {filter && (
        <Reset onClick={() => dispatch(contactsActions.changeFilter(""))} />
      )}
    </StyledFilter>
  );
};

export default Filter;
