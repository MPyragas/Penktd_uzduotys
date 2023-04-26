import { useState } from "react";
import axios from "axios";
import SingleAccount from "./SingleAccount";
import format from "../functions/format";
import AddAccount from "./AddAccount";
import { useEffect } from "react";

const accountsUrl = "http://localhost:5000/accounts";

export default function AccountList({addMsg}) {

    const [accounts, setAccounts] = useState(null);
    const [editAccounts, setEditAccounts] = useState(null);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);
    const [radioFilter, setRadioFilter] = useState(null);
    const handleFilterClick = (filter)=> {
        if(radioFilter === filter) {
            setRadioFilter(null);
            return;
        }
        setRadioFilter(filter);
    };
    
    useEffect(()=> {
        axios.get(accountsUrl).then(res=> {
            setAccounts(res.data.accounts);
        })   
    }, [lastUpdateTime]);

    useEffect(()=> {
        if(editAccounts === null) {
            return;
        }
        axios.put(accountsUrl, {account: editAccounts}).then((res) => {
            setLastUpdateTime(Date.now());
        })
    }, [editAccounts]);

    function addAccount(name, surname) {
        axios.post(accountsUrl, {account: {name, surname, money:0}}).then((res) => {
            setLastUpdateTime(Date.now());
        });
        // setAccounts((accounts)=> {
        //    return [...accounts, {id: uuidv4(), name, surname, money:0}]
        // })
    };

    function delAccount(id) {  
        axios.delete(accountsUrl + '/' + id).then((res) => {
            setLastUpdateTime(Date.now());
        });
    };

    if(accounts === null) {
        return null;
    };

    return (
        <>
        <div className="container">
        <p>Sąskaitų skaičius: {accounts.length}</p>
        <p> Bendra suma: { format (accounts.reduce((acc, curr)=> acc+curr.money,0))} </p>
        <div>
            <span className={'checkbox ' + (radioFilter === 'hasMoney' ? ' checked' : '')} onClick={() => handleFilterClick('hasMoney')}>Rodyti sąskaitas su pinigais</span>
            <span className={'checkbox ' + (radioFilter === 'noMoney' ? ' checked' : '')} onClick={() => handleFilterClick('noMoney')}>Rodyti tuščias sąskaitas</span>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Pavardė</th>
                    <th>Vardas</th>
                    <th>Sąskaitos suma</th>
                    <th>Pavedimas</th>
                    <th>Pašalinti sąskaitą</th>
                </tr>
            </thead>
            <tbody>
                {radioFilter === 'hasMoney' && [...accounts]
                .sort((a,b)=> a.surname.localeCompare(b.surname, 'lt', {sensitivity:'base'}))
                .map((account)=> (
                account.money > 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} /> 
                ))}
                {radioFilter === 'noMoney' && [...accounts]
                .sort((a,b)=> a.surname.localeCompare(b.surname, 'lt', {sensitivity:'base'}))
                .map((account)=> (
                account.money === 0 && <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} /> 
                ))}
                {radioFilter === null && [...accounts]
                .sort((a,b)=> a.surname.localeCompare(b.surname, 'lt', {sensitivity:'base'}))
                .map((account)=> (
                <SingleAccount key={account.id} account={account} delAccount={delAccount} setEditAccounts={setEditAccounts} addMsg={addMsg} /> 
                ))}
            </tbody>  
        </table>
        </div>
        <AddAccount addAccount={addAccount} addMsg={addMsg} />
        </>
    );
}