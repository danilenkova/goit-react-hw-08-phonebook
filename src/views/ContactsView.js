import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import Container from "../components/Container";
import { Section } from "../components/Section";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const ContactsView = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <ContactForm />
        {contacts.length ? <ContactList /> : <p>No contacts in PhoneBook</p>}
      </Section>
    </Container>
  );
};

export default ContactsView;
