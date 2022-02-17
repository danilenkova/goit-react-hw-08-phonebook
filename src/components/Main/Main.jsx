import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import Container from "../container";
import { Section } from "../section";
import ContactForm from "../form";
import Filter from "../filter";
import ContactList from "../contactList";

const Main = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <Section title="Add new contact">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>No contacts in PhoneBook</p>
          )}
        </Section>
      </Container>
    </section>
  );
};

export default Main;
