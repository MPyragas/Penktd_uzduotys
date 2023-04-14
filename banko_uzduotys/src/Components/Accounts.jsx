import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SingleAccount from "./SingleAccount";
import format from "../functions/format";
import AddAccount from "./AddAccount";



export default function AccountList({addMsg}) {

    const [accounts, setAccounts] = useState([]);
    

    function addAccount(name, surname) {
        setAccounts((accounts)=> {
           return [...accounts, {id: uuidv4(), name, surname, money:0}]
        })
    };

    function delAccount(id) {  
        setAccounts(accounts => [...accounts].filter(account=>account.id !==id));
    };


    return (
        <>
        <p>Sąskaitų skaičius: {accounts.lenght}</p>
        <p> Bendra suma: { format (accounts.reduce((acc, curr)=> acc+curr.money,0))} </p>
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
                <SingleAccount key={account.id} account={account} delAccount={delAccount} setAccounts={setAccounts} addMsg={addMsg} /> 
                ))}
            </tbody>
            
        </table>
        <AddAccount addAccount={addAccount} addMsg={addMsg} />
        </>
    );
}