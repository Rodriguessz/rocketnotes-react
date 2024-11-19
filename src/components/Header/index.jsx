//Importando o hook useAuth
import { useAuth } from '../../hooks/auth'

//Importando o hook useNavigate
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'



export const Header = ( {} ) => {
    
    //Recuperando informações compartilhadas pelo authProvider;
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    //Função para deslogar o usuário da aplicação.
    function handleSignOut(){
        //Redireciona o usuário para a página principal, evitando conflitos de url inexistentes após deslogar o usuário;
        navigate("/")

        //Desloga o usuário da aplicação.
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    

    return(
        <>
            <Container>
                <Profile to="/profile">
                    <img src={avatarUrl} alt="Imagem do usuário" />

                    <div>
                        <span>Bem vindo,</span>
                        <strong>{user.name}</strong>
                    </div>
                </Profile>

                <Logout onClick={handleSignOut}>
                    <RiShutDownLine />
                </Logout>
            </Container>
        </>
    )

}