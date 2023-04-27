import { useState } from "react";
import { v4 } from "uuid";
import "./App.scss";
import AccountList from "./Components/Accounts";
import Popup from "./Components/Messages/Popup";

function App() {
  const [messages, setMessages] = useState([]);
  const addMsg = ({type, text}) => {
    const id = v4();
    setMessages((messages)=> [...messages, {id, type, text}]);
    setTimeout(() => {
      setMessages(m => m.filter(m => m.id !== id));
    }, 5000);
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
