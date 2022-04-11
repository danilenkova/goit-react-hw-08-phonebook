import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { toast } from "react-toastify";
import {
  NewContact,
  Title,
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
  FormButton,
} from "./ContactForm.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newName = name.toLowerCase();
    if (contacts.some((contact) => contact.name.toLowerCase() === newName)) {
      toast.error(`${name} is already in contacts`, {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        theme: "colored",
      });
      setName("");
      setNumber("");
      return;
    }
    const newContact = { name, number };
    dispatch(contactsOperations.addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <NewContact>
      <Title>Add new contact</Title>
      <StyledForm onSubmit={handelSubmit}>
        <FormLabel>
          <FormField>Name</FormField>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Number</FormField>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            autoComplete="off"
            onChange={handleInputChange}
            value={number}
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </NewContact>
  );
};

export default ContactForm;
