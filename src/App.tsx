import React from "react";
import "./App.scss";
import QRCodeCard from "./components/QRCodeCard/QRCodeCard";

function App() {
  // Text for the title and description of the QR code card
  const title = "Improve your front-end skills by building projects";
  const description =
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

  return (
    <div className="App">
      <QRCodeCard title={title} description={description} />
    </div>
  );
}

export default App;
