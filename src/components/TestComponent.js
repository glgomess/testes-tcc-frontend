import React, { useState } from "react";
import { Button, ButtonSkeleton } from "carbon-components-react";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export default function TestComponent() {
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  async function testBackendConnection() {
    const backUrl = process.env.REACT_APP_BACKEND_URL;
    try {
      setError(false);
      setIsFetching(true);
      const response = await axios.get(backUrl);
      setServerMessage(response.data);
      setIsFetching(false);
    } catch (e) {
      console.log(e);
      setIsFetching(false);
      setError(true);
    }
  }
  return (
    <div>
      {isFetching ? (
        <ButtonSkeleton />
      ) : (
        <Button onClick={testBackendConnection}>Test Heroku Connection</Button>
      )}

      {error ? (
        <span>An error occurred while connecting with the server.</span>
      ) : (
        serverMessage
      )}
    </div>
  );
}
