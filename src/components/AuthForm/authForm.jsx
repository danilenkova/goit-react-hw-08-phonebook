import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import {
  SingUp,
  Title,
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
  FormButton,
} from "./authForm.styled";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <SingUp>
      <Title>Sing Up</Title>
      <StyledForm onSubmit={handelSubmit}>
        <FormLabel>
          <FormField>Name</FormField>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Email</FormField>
          <FormInput
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            placeholder="example@example.com"
            autoComplete="off"
            onChange={handleInputChange}
            value={email}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Number</FormField>
          <FormInput
            type="password"
            name="password"
            minLength={3}
            placeholder="Enter your password"
            autoComplete="off"
            onChange={handleInputChange}
            value={password}
            required
          />
        </FormLabel>
        <FormButton type="submit">Create an Account</FormButton>
      </StyledForm>
    </SingUp>
  );
};

export default AuthForm;
