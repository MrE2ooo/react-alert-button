/// Functin Based Components


import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const AlertMessage = "A simple  primary alert—check it out! ";
  const[AlertVisible,setAlertVisibility] = useState(false)

  return (
    <div>
      {AlertVisible && <Alert  onClose={ ()=>setAlertVisibility(false) }>{AlertMessage}</Alert> }
      <Button   onClick={()=> setAlertVisibility(true) }  >Alert</Button>
    </div>
  );
}

export default App;
