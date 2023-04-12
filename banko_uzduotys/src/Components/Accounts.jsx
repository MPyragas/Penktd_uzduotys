import { useState } from "react";
import AddAccount from "./AddAccount";
import { v4 as uuidv4 } from 'uuid';
import SingleAccount from "./SingleAccount";
import format from "../functions/format";



export default function AccountList() {

    const [accounts, setAccounts] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    

    function addAccount(e, name, surname) {
        e.preventDefault();
        setAccounts((accounts)=> {
           return [...accounts, {id: uuidv4(), name, surname, money:0}]
        })
    };


    return (
        <>
        <p>Sąskaitų skaičius: {accounts.lenght}</p>
        <p> Bendra suma: { format (accounts.reduce((acc, curr)=> acc+curr.money,0))} </p>
        <p className="error">{errMsg}</p>
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
                <SingleAccount key={account.id} account={account} setAccounts={setAccounts} setErrMsg={setErrMsg} /> 
                ))}
            </tbody>
            
        </table>
        <AddAccount handleSubmit={addAccount} />
        </>
    );
}