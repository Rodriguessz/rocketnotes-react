//createContext - Cria um contexto;
//useContext - Hook para comsumir informações de um contexto especifico
import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { api } from '../services/api';

import { useNavigate } from 'react-router-dom';


//Cria o contexto de autenticação.
const AuthContext = createContext({})

//Função responsável por fornecer o contexto de autenticação aos componentes filhos.
// Todos os componentes englobados pelo AuthProvider terão acesso às informações
function AuthProvider({ children }) {

    const [data, setData] = useState({})

    //Faz a autenticação do usuário no sistema
    async function signIn({ email, password }) {
        
        try {

            console.log("Passei aqui")

            //Cria um sessão para o usuário 
            const response = await api.post("/sessions", { email, password })
            //Desestrutura a response, recuperando o token gerado e o usuário enviado da API;
            const { token , user } = response.data; 

            //Armazena as informações do usuário no localStorage;
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            // Define o token de autenticação no cabeçalho padrão de todas as requisições;
            // Dessa forma, todas as requisições feitas pela api (axios) irão incluir automaticamente o token gerado durante o processo de login, utilizando o formato "Bearer <token>" no cabeçalho de autorização.
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            //Atribui ao estado as informações do usuário recuperadas da API;
            setData({ token , user });

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível efetuar o login!")
            }
        }


    }

    //Encerra a sessão do usuário na aplicação
    function signOut(){   
        //Remove as informações do usuário do localStorage;
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        //Remove as informações armazenadas no estado de usuário;
        setData({});
    }

    //Atualiza os dados base do usuário
    async function updateProfile({ user, avatarFile }){
        try {
            
            //Caso o avatarFile tenha sido carregado pelo usuário, crie um multi-form/data para o envio do arquivo ao servidor
            if(avatarFile){            
                //Cria um formulário multi-form-data para que seja possivel fazer o envio de arquivos para o back-end;
                const avatarUploadForm = new FormData(); 
                
                //Adiciona o arquivo no campo avatar do formulário criado;
                //append("campo", arquivo) - Adiciona um novo campo ao multi-form/data
                avatarUploadForm.append("avatar", avatarFile);

                //Envia o formulário com o arquivo carregado pelo usuário para nossa rota de atualização de avatar
                const response = await api.patch("users/avatar", avatarUploadForm)

                //Atualiza o avatar o do usuário
                user.avatar = response.data.user.avatar
            }

            //Envia os dados do usuário para nossa API
            await api.put("/users", user);

            //Em caso de sucesso na atualização, insere o novo objeto de usuário no localStorage.
            //Utiliza o stringfy pois localStorage aceita apenas string.
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            //Atualiza o estado de usuário com as novas informações para que as mudanças sejam exibidas em tela assim que o usuário atualizar;
            setData({ user, token: data.token})

            alert("Dados atualizados com sucesso!")
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível efetuar o login!")
            }
        }
    }

    //Dispara uma ação após a renderização do componente
    //Utilizamos para recuperar informações do usuário no localStorage e armazena-las no estado de usuário caso existam;
    useEffect(() => {

        //Recupera as informações do usuário armazenadas no localStorage caso o login tenha sido efetuado;
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        //Verifica se as informações recuperadas existem
        if(user && token){
    
            // Define o token de autenticação no cabeçalho padrão de todas as requisições;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            //Adiciona ao estado de usuário as informações recuperadas do localStorage
            setData({ token , user: JSON.parse(user)});
        }

    } , [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, updateProfile ,user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

//Retorna as informações presentes no contexto de autenticação.
function useAuth() {
    //Consome as informações compartilhadas pelo contexto de autenticação.
    const context = useContext(AuthContext);

    //Retorna as informações recuperadas;
    return context;
}


export { AuthProvider, useAuth }