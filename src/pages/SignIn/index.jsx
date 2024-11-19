import { useState } from 'react';

import { FiMail, FiLock} from 'react-icons/fi';

import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

//Importa o hook de autenticação criado
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
    
    //Recupera os dados compartilhados pelo AuthProvider;
    const { signIn, user } = useAuth();

    //Cria estados para armazenar as credenciais do usuário;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(){
        if(!email)return alert("Preencha o campo de e-mail!")

        //Chama a função de SignIn do hook de autenticação
        //signIn(credencias) - espera receber um objeto com as credenciais do usuário 
        signIn( {email, password})
    }

    

    return(
        <>
        
            <Container>
                <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Faça seu login</h2>

                    <Input placeholder="E-mail" icon={FiMail} onChange={event => setEmail(event.target.value)} />
                    <Input placeholder="Senha" type="password" icon={FiLock}  onChange={event => setPassword(event.target.value)}/>

                    <Button title="Entrar" onClick={handleSignIn} />

                    <Link to="/register">Criar Conta</Link>
                    
                </Form>

                <Background />
            </Container>

        </>
    )
}