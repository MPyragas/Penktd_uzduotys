import { useState } from "react";
import { v4 } from "uuid";
import "./App.scss";
import AccountList from "./Components/Accounts";
import Popup from "./Components/Messages/Popup";

function App() {
  const [messages, setMessages] = useState([]);
  const addMsg = ({type, text}) => {
    setMessages((messages)=> [...messages, {id:v4(), type, text}])
  }
  const deleteMsg = (id)=> {
    setMessages(messages => [...messages].filter(msg=>msg.id !==id));
  }
  return (
    <div className="App">
      <AccountList addMsg={addMsg} />
      <Popup messages={messages} deleteMsg={deleteMsg} />
    </div>
  );
}

export default App;
