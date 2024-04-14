import { useState } from "react";
import "./App.css";
import axios from "axios";
import Markdown from "react-markdown";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const sendMessage = () => {
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:8000/gemini", {
        prompt: input,
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setInput("");
        setMessage(response?.data?.response);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <h1>
          Hi👋, I'm Eyo, <br /> Your financial adviser
        </h1>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            disabled={isLoading}
            onChange={handleChange}
            type="text"
            style={{ width: "80%" }}
            placeholder="Message"
          />
          <div
            style={{
              width: "20%",
              display: "inline-flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div></div>
            <button disabled={isLoading} onClick={sendMessage}>
              {isLoading ? "Loading" : "Enter"}
            </button>
          </div>
        </div>

        <div
          style={{
            background: "rgba(0,0,0,0.2)",
            padding: "10px 30px",
            borderRadius: 20,
            marginTop: 50,
            height: 450,
            textAlign: "left",
            overflow: "scroll",
          }}
        >
          {!message ? "No Message" : <Markdown>{message}</Markdown>}
        </div>
      </div>
    </>
  );
}

export default App;
