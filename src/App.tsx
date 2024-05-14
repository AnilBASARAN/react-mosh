import Alert from "./assets/Alert";
import { useState } from "react";
import Button from "./Button";
function App() {
  function handleClick() {
    if (show === "") setShow("show");
    if (show === "show") setShow("");
  }
  const [show, setShow] = useState("");
  return (
    <div>
      <Alert
        clas={`alert alert-warning alert-dismissible fade ${show}`}
        children="My Alert"
        onClick={handleClick}
      />
      ;
      <Button onClick={handleClick} text="hey" />
    </div>
  );
}

export default App;
