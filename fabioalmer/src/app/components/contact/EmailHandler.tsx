import { ValidationSchema } from "./FormInput";

export function emailHandler(data:ValidationSchema) {
    const newData = JSON.stringify(data)
    console.log(newData)
    alert(newData)
}
