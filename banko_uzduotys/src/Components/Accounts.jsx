import { useState } from "react";
import AddAccount from "./AddAccount";
import { v4 as uuidv4 } from 'uuid';

export default function AccountList() {

    const [accounts, setAccounts] = useState([]);

    function addAccount(e, name, surname) {
        e.preventDefault();
        setAccounts((accounts)=> {
           return [...accounts, {id: uuidv4(), name, surname, money:0}]
        })
    }
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>Vardas</th>
                    <th>Pavarde</th>
                    <th>Sąskaitos suma</th>
                    <th>Pavedimas</th>
                    <th>Pašalinti sąskaitą</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account)=> (
                <tr key={account.id}>
                    <td>{account.name}</td>
                    <td>{account.surname}</td>
                    <td>{account.money}</td>
                    <td>
                        <input type="number" /><button>Pridėti</button><button>Atimti</button>
                    </td>
                    <td>
                        <button>Ištrinti</button>
                    </td>
                </tr>
                ))}
            </tbody>
            
        </table>
        <AddAccount handleSubmit={addAccount} />
        </>
    );
}