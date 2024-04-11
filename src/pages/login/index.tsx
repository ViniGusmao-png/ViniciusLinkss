import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import Input from "../../components/input";
import {auth} from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(email === '' || password === ''){

        }
        
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/admin", {replace:true})
            console.log('logado')
        })
        .catch((error) => {
            console.log('errado')
        })
        
    }

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to='/'>
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Vinicius
                    <span className="text-black">Gusmão</span>
                </h1>
            </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-5">
                 <Input
                    placeholder="Digite o seu email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="***********"
                    type="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
                <button
                    type="submit"
                    className="h-9 bg-orange-600 rounde border-1 text-lg">
                    Acessar
                </button>
            </form>
        </div>
    )
}
export default Login