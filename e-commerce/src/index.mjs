// src/index.mjs
import express from "express";
import cors from "cors";
import { post, get } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";

Amplify.configure(amplifyconfig);

const existingConfig = Amplify.getConfig(); // <=== the initialized config should now be returned to existingConfig

Amplify.configure({
  ...existingConfig, // <=== existingConfig instead of awsconfig
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      testAPI: {
        endpoint:
          "https://rcouhutzuj.execute-api.us-east-2.amazonaws.com/restapi",
        region: "us-east-2",
      },
    },
  },
});

const app = express();
const port = 3001;

app.use(cors());

async function postTodo() {
  try {
    const restOperation = post({
      apiName: "testAPI",
      path: "/test",
      options: {
        body: {
          message: "Mow the lawn",
        },
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log("POST call succeeded");
    console.log(response);
  } catch (e) {
    console.log("POST call failed: ", e);
    throw e; // Rethrow the error so it can be caught outside of this function
  }
}

postTodo()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error while posting todo:", error);
  });
