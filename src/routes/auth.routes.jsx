import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'



export const AuthRoutes = () => {

    //Recupera informações do usuário do localStorage
    const user = localStorage.getItem("@rocketnotes:user");

    return(
        <>
        
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />

                {/* Pattern "*" - Representa uma rota coringa, acionada quando a rota passada não corresponde a nenhuma das rotas definidas */}
                {/* Navigate - Componente do react-router-dom que nos permite redirecionar o usuário a outra */}
                {/* Caso o usuário tente acessar uma rota inexistente e não esteja logado, rediciona o mesmo para página de home */}
                { !user && <Route path="*" element={<Navigate to="/" />} />  }
            </Routes>
        
        </>
    )
}