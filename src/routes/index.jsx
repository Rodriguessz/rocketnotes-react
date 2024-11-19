import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

//Importando hook useAuth para obter informações compartilhadas pelo authProvider
import { useAuth } from '../hooks/auth'


export const Routes = () => {  
    const { user } = useAuth();
    return(
        <>
            <BrowserRouter>
                {/*
                 Verrifica se existe informações no objeto de usuário 
                 Caso exista, renderiza as rotas de aplicação
                 Caso contrário, renderiza as rotas de autenticação
                */}
                {!user ? (<AuthRoutes />) : <AppRoutes />}
            </BrowserRouter>
        </>
    )
}