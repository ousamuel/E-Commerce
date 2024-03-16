// src/index.mjs
import express from "express";
import cors from "cors";
import { post, get } from "aws-amplify/api";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports"; // The path to the aws-exports file may vary
Amplify.configure(aws_exports);
import { Auth } from 'aws-amplify';

async function signUp(username, password, email) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email, // optional
                // other custom attributes
            }
        });
        console.log(user);
        alert("Registration successful! Check your email for a verification link.");
    } catch (error) {
        console.error('Error signing up:', error);
        alert("An error occurred during registration.");
    }
}

// Example usage
const username = "user@example.com";
const password = "YourP@ssw0rd!";
const email = "user@example.com";
signUp(username, password, email);

const app = express();
const port = 3001;

app.use(cors());
