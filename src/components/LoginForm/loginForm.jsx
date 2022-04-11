import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import {
  Login,
  Title,
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
  FormButton,
} from "./loginForm.styled";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Login>
      <Title>Sing In</Title>
      <StyledForm onSubmit={handelSubmit}>
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
        <FormButton type="submit">Log In</FormButton>
      </StyledForm>
    </Login>
  );
};

export default AuthForm;
