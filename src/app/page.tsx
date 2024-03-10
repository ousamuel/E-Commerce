import Image from "next/image";
import Header from "./components/Header";
import { Amplify } from "aws-amplify";
import { post, get } from "aws-amplify/api";
import amplifyconfig from "../../e-commerce/aws-exports";

Amplify.configure(amplifyconfig);

export default function Home() {
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
  return (
    <div>
      <Header />
      {/* <button onClick={() => postTodo()}>click</button> */}
    </div>
  );
}
