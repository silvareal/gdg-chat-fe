import "./App.css";

function App() {
  const message = "";
  return (
    <>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <h1>
          Hi👋, I'm Eyo, <br /> Your financial adviser
        </h1>
        <div style={{ display: "flex", gap: 10 }}>
          <input type="text" style={{ width: "80%" }} placeholder="Message" />
          <div
            style={{
              width: "20%",
              display: "inline-flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div></div>
            <button>Enter</button>
          </div>
        </div>

        <div
          style={{
            background: "rgba(0,0,0,0.2)",
            padding: "10px 30px",
            borderRadius: 20,
            marginTop: 50,
            height: 450,
            overflow: "hidden",
          }}
        >
          {!message ? "No Message" : message}
        </div>
      </div>
    </>
  );
}

export default App;
