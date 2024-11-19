//Importando hooks do react
import { useState } from 'react'

import { api } from '../../services/api';

//importando o hook useAuth.
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'


export const Profile = () => {
    
    //Recupera as informações do usuário compartilhadas via AuthProvider;
    const { user, updateProfile } = useAuth();
    
    //Cria o estado referente aos campos dos inputs
    const [name, setName] = useState(user.name); //Atribui como valor inicial o nome do usuário recuperado através da sessão.
    const [email, setEmail] = useState(user.email); //Atribui como valor inicial o email do usuário recuperado através da sessão.
    const [currentPsw, setCurrentPsw] = useState("");
    const [newPsw, setNewPsw] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    //Cria o estado que irá armazenar o caminho para imagem de preview do usuário
    const [avatarPreview, setAvatarPreview] = useState(avatarUrl);
    //Cria o estado que irá armazenar o arquivo carregado pelo usuário e que posteriormente será enviado para nossa API.
    const [avatarFile, setAvatarFile] = useState(null);

    //Atualiza o perfil do usuário com as informações enviadas;
    async function handleUpdateProfile(){

        //Monta um objeto com as informações atualizadas do usuário;
        const updatedInfos = {
            name,
            email,
            oldPassword: currentPsw,
            password: newPsw,
        }

        //Object.assign() - Mescla dois objetos em um só. Propriedades iguais serão sobreescritas pelo útlimo objeto passado para a mesclagem;
        const updatedUser = Object.assign(user, updatedInfos)
        
        //Chama a função para atualizar o usuário disponibilizada pelo authProvider, passando como argumento principal o objeto de usuário com as informações atualizadas.
        await updateProfile({user: updatedUser, avatarFile});

    }

    //Altera a imagem de pré-visualização do input de avatar
    function handleAvatarChange(event){

        //Recupera o arquivo carregado pelo usuário;
        const file = event.target.files[0]
        
        //Armazena o arquivo carregado pelo usuário no estado criado;
        setAvatarFile(file);

        //Cria uma url temporária para exibição do arquivo sem precisar fazer upload da imagem em um servidor.
        //createObjectURL(objeto<File> || objeto<Blob>) - Retorna uma url temporária capaz de exibir o conteúdo do arquivo sem ser necessário fazer o upload do mesmo no servidor;
        const imagePreview = URL.createObjectURL(file);

        //Atribui a url temporaria gerada ao estado criado para armazenar a pré-visualização do avatar do usuário;
        setAvatarPreview(imagePreview)
        

    }

    return(
        <Container>
            <header>
                <Link to={-1}>
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src={avatarPreview} alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                    </label>

                    <input type="file" id="avatar" onChange={handleAvatarChange}/>
                </Avatar>
                
                    <Input placeholder="Nome" icon={FiUser} value={name} onChange={ event => setName(event.target.value)}/>
                    <Input placeholder="E-mail" icon={FiMail} value={email} onChange={ event => setEmail(event.target.value)}/>
                
                    <Input placeholder="Senha Atual" type="password" icon={FiLock} onChange={ event => setCurrentPsw(event.target.value)}/>
                    <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={ event => setNewPsw(event.target.value)} />
               

                <Button title="Salvar" onClick={handleUpdateProfile} disabled={!currentPsw && newPsw}/>
            </Form>
            
        </Container>
    )
}