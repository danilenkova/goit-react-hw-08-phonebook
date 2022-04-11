import {
  ContactsView,
  Title,
  Contacts,
  ContactsItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import Filter from "../Filter";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <ContactsView>
      <Title>Contacts</Title>
      <Filter />
      {contacts.length ? (
        <Contacts>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <ContactInfo>
                <ContactName>{name}</ContactName>
                {number}
              </ContactInfo>
              <DeleteButton
                type="submit"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          ))}
        </Contacts>
      ) : (
        <p>No contacts by name {filter.toUpperCase()} in PhoneBook</p>
      )}
    </ContactsView>
  );
}

export default ContactList;
