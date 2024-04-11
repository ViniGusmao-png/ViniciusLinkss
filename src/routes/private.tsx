import { ReactNode, useEffect, useState } from 'react'
import {auth} from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

interface PrivetePros{
    children:ReactNode
}

export function Private({children}: PrivetePros): any{
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        //passei a minha conexão no onAuthStateChanged e com isso ele irá monitorar a pagina para saber se o estado muda de logado pra deslogado, aonde tem a verificação do usuário para saber se é verdade ou não
        const unsub = onAuthStateChanged(auth, (user) =>{
            if(user){
              const userData = {
                uid: user?.uid,
                email: user?.email
              }
              localStorage.setItem("@reactlinks",JSON.stringify(userData))
              setLoading(false)
              setSigned(true)
            }else{
                setLoading(false)
                setSigned(false)
            }
        })
    })
    
    //se ele tentar acessar a o link sem estar logado vai cair nesse if de loagin e vai para o carregamento da pagina

    if(loading){
        return <div></div>
    }
    // e ai ele vai verificar se estiver logado, caso não esteja será jogado pra pagina de login
    if(!signed){
        return <Navigate to='/login'/>
    }
    
    
    return children
}