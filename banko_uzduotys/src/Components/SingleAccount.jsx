import CurrencyInput from "react-currency-input-field";
import { useState } from "react";
import format from "../functions/format";


export default function SingleAccount ({account, setAccounts, setErrMsg}) {
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
            setNewAmmount("");
        }
    }

    const subMoney = () => {
        if(newAmount !== "") {
            if(account.money - newAmount < 0) {
                setErrMsg("Sąskaitoje negali likti mažiau nei 0 pinigo");
                return;
            }
        setAccounts((accounts) => {
            return accounts.map((item) => item.id === account.id ? {...item, money: item.money - newAmount} : item)
            });
            setNewAmmount("");
        }
    }
    return (
        <tr>
                    <td>{account.name}</td>
                    <td>{account.surname}</td>
                    <td>{format(account.money)}</td>
                    <td>
                        <CurrencyInput id="amount" placeholder="Įveskite sumą"  suffix=" &euro;" value={newAmount} onValueChange={(value) => changeAmmount(Number(value))} /><button onClick={addMoney}>Pridėti</button><button onClick={subMoney}>Atimti</button>
                    </td>
                    <td>
                        <button>Ištrinti</button>
                    </td>
                </tr>
    )
}