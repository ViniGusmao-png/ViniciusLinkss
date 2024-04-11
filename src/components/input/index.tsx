import { InputHTMLAttributes } from "react"
//extends serve para adicionar alguma propriedade outra interface já existente 
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps){
    return(
        <input className="border-0 h-9 rounded-md outline-none px-2 mb-3"
         {...props}
         />
    )
}
export default Input