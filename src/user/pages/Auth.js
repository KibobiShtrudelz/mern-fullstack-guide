import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: ""
      }
    },
    false
  );

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inpits,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }

    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            element="input"
            label="Your Name"
            onInput={inputHandler}
            errorText="Please enter a name"
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}

        <Input
          id="email"
          type="email"
          label="E-Mail"
          element="input"
          onInput={inputHandler}
          errorText="Please enter a valid email address."
          validators={[VALIDATOR_EMAIL(), VALIDATOR_MINLENGTH]}
        />

        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH]}
          errorText="Please enter a password at least 5 characters."
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>

      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {`${!isLoginMode ? "LOGIN" : "SIGNUP"}`}
      </Button>
    </Card>
  );
};

export default Auth;
