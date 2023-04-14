import { useState } from "react";
export default function AddAccount ({addAccount, addMsg}) {
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');

    function handleNameChange(e) {
        let name = e.target.value.trim();
        setName(name);
    }
    function handleSurnameChange(e) {
        let surname = e.target.value.trim();
        setSurname(surname);
    }
    function handleSubmit(e) {
        e.preventDefault();
        addAccount(name, surname);
        setName("");
        setSurname("");
        addMsg({type:'success', text:'Sąskaita sukurta sėkmingai'});
    }

    return (
        <form onSubmit={handleSubmit} className="newAcc">
            <div>
                <label htmlFor="name">Vardas</label>
                <input required id="name" onChange={handleNameChange} name="name" value={name} type="text" />
            </div>
            <div>
                <label htmlFor="name">Pavardė</label>
                <input required id="surname" onChange={handleSurnameChange} name="surname" value={surname} type="text" />
            </div>
            <button>Sukurti naują sąskaitą</button>
        </form>
    )
}