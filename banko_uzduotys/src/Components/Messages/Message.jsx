export default function Message({msg, deleteMsg}) {
    return (
        <div className= {`msg ${msg.type}`}>
            <p>{msg.text}</p>
            <button onClick={()=>deleteMsg(msg.id)}>Uždaryti</button>
        </div>
    );
}