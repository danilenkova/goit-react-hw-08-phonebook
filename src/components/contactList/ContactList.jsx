import {
  Contacts,
  ContactsItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <>
      {contacts.length ? (
        <Contacts>
          {contacts.map(({ id, name, phone }) => (
            <ContactsItem key={id}>
              <ContactInfo>
                <ContactName>{name}</ContactName>
                {phone}
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
    </>
  );
}

export default ContactList;
