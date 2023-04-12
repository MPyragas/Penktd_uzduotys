import { formatValue } from "react-currency-input-field";

export default function format(number) {
    return formatValue({value: number.toString(), intlConfig: {currency: "EUR", locale: "lt"}})
}
