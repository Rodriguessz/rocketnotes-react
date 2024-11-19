import { useState } from 'react'

//Importando hook para redirecionamento entre rotas da aplicação.
import { useNavigate } from 'react-router-dom'

//Importa a api ( axios ) configurada no arquivo api.js; 
import { api } from '../../services/api'

import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'



export const SignUp = () => {

    //Criando estados para manipulação dos valores de cada input
    //const [estado, setEstado ] = useState(valorInical) - Hook utilizado para definir um estado;
    //estado - Armazena o valor atual do estado;
    //setEstado - Atualiza o valor do estado;
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    //Inicializando a função do Usenavigate
    const navigate = useNavigate();

    //Lida com os valores recuperados e envia-os para a API;
    function handleSubmit(){
        if(!name || !email || !password) return alert("Preencha todos os campos!");
        
        //Envia os dados recuperados para API e faz a tratativa dos erros caso exista;

        api.post("/users/create", { name, email , password})
        .then(() => {
            alert("Conta criada com sucesso!")

            //Utilizaa funcção navigate para redirecionar o usuário para tela de login após o cadastro.
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
            //Se houver algum erro enviado diretamente do banco de dados, exiba a mensagem retornada da API, se não, exiba uma mensagem geral de erro
            if(error.response){
                //Recupera a mensagem de erro retornado do back-end;
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel criar uma conta!")
            }
        })
    }

    return(
        <>
        
            <Container>
                <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Crie sua conta</h2>

                    {/* OnChange - A cada alteração que o input tiver, atualiza o estado com o valor digitado pelo usuário */}
                    <Input placeholder="Nome" icon={FiUser} onChange={ event => setName(event.target.value)} />
                    <Input placeholder="E-mail" icon={FiMail} onChange={event => setEmail(event.target.value)}/>
                    <Input placeholder="Senha" type="password" icon={FiLock} onChange={event => setPassword(event.target.value)}/>
                    

                    <Button title="Cadastrar" onClick={handleSubmit} />

                    <Link to="/">Voltar para o login</Link>
                    
                </Form>

                <Background />
            </Container>
        </>
    )
}