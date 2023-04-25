import Message from "./Message";

export default function Popup({messages, deleteMsg}) {
    return (
    <div className="messages">
        {messages.map((msg)=> (
        <Message key={msg.id} msg={msg} deleteMsg={deleteMsg} />
        ))}
    </div>
    );
    
}