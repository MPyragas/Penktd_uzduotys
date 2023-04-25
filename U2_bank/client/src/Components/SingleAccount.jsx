import CurrencyInput from "react-currency-input-field";
import { useState } from "react";
import format from "../functions/format";


export default function SingleAccount ({account, setAccounts, delAccount, addMsg}) {
    const [newAmount, setNewAmmount] = useState("");
    

    const changeAmmount = (value) => {
        if(value) {
            setNewAmmount(value);
            return;
        }
        setNewAmmount("");
    };

    const addMoney = () => {
        if(newAmount !== "") {
        setAccounts((accounts) => {
            return accounts.map((item) => item.id === account.id ? {...item, money: item.money + newAmount} : item)
            });
            addMsg({type:'success', text:'Lėšų pervedimas atliktas sėkmingai'});
            setNewAmmount("");
        }
    }

    const subMoney = () => {
        if(newAmount !== "") {
            if(account.money - newAmount < 0) {
                addMsg({type:'error', text:"Sąskaitoje negali likti mažiau nei 0 pinigo"});
                return;
            }
        setAccounts((accounts) => {
            return accounts.map((item) => item.id === account.id ? {...item, money: item.money - newAmount} : item)
            });
            addMsg({type:'success', text:'Lėšos nuskaičiuotos sėkmingai'});
            setNewAmmount("");
        }
    };

    const handleDel=() => {
        if(account.money > 0) {
            addMsg({type:'error', text:"Sąskaitos su lėšomis trinti negalima"});
            return;
        }
        delAccount(account.id);
        addMsg({type: "success", text: "Sąskaita sėmingai panaikinta"});
    }
    return (
        <tr>
                    <td>{account.surname}</td>
                    <td>{account.name}</td>
                    <td>{format(account.money)}</td>
                    <td>
                        <CurrencyInput id="amount" placeholder="Įveskite sumą"  suffix=" &euro;" value={newAmount} onValueChange={(value) => changeAmmount(Number(value))} /><button onClick={addMoney}>Pridėti</button><button onClick={subMoney}>Atimti</button>
                    </td>
                    <td>
                        <button className={`${account.money > 0 ? "disabled" : null}`} onClick={handleDel}>Ištrinti</button>
                    </td>
                </tr>
    )
}