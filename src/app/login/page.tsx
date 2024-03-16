"use client";
import Image from "next/image";
import "./custom-styles.css";
import { signIn, type SignInInput } from "aws-amplify/auth";

import {
  Authenticator,
  Flex,
  Grid,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import SignInHeader from "./authComponents/signInHeader";
import { Footer } from "./authComponents/footer";
import { signUp } from "aws-amplify/auth";
import { LoginHeader } from "./authComponents/loginHeader";
const components = {
  Header: LoginHeader,
  SignIn: {
    Header: SignInHeader,
    // Footer: Footer,
  },
  // Footer,
};

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};
async function handleSignUp({
  username,
  password,
  email,
  phone_number,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number, // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId);
  } catch (error) {
    console.log("error signing up:", error);
  }
}
async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
  } catch (error) {
    console.log("error signing in", error);
  }
}

export default function Login() {
  const { tokens } = useTheme();

  return (
    <div>
      <Flex
        // backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <Authenticator components={components}>
          {({ signOut, user }: any) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </Flex>
    </div>
  );
}
