import React from "react";

function Card() {
  return (
    <div
      style={{
        border: "solid black 2px",
        padding: "10px",
        margin: "10px",
        borderRadius: "20px",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Dp"
        style={{ borderRadius: "50%" }}
      />
      <h1
        style={{
          color: "red",
          fontSize: "30px",
          marginTop: "0px",
          marginBottom: "0px",
        }}
      >
        @Bharat
      </h1>
      <p style={{ marginTop: "0px" }}>My Life , My Rules</p>
      <div
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "12px",
          borderRadius: "10px",
          width: "50px",
        }}
      >
        Follow
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
