import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

export const New = () => {

    //Inicializa a função useNavigate para redirecionamento de usuários.
    const navigate = useNavigate();

    //Estados para inputs de titulo e descrição;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    //Estados para manipulação dos links
    const [links, setLinks] = useState([]); //Estado para armazenar os links adicionados pelo usuário; 
    const [newLink, setNewLink] = useState(""); //Novo link;

    //Estados para manipulação das tags
    const [tags, setTags] = useState([]); //Estado para armazenar os links adicionados pelo usuário; 
    const [newTag, setNewTag] = useState(""); //Novo link;

    //Adiciona um link relacionado a nota no estado de links;
    function handleAddLink() {

        //Verifcia se o usuário digitou um link
        if(!newLink) return alert("Preencha o campo!")

        //Adiciona o novo link adicionado pelo usuário no estado dos links já existentes;
        setLinks(prevState => [...prevState, newLink]);

        //Limpa o estado de newLink;
        setNewLink("")
    }

    //Remove o link especifico clicado pelo usuário
    function handleRemoveLink(deletedIndex) {
        //Utiliza o filter para retornar todos os links que forem diferentes ao que o usuário quer remover
        setLinks(prevState => prevState.filter((link, index) => index != deletedIndex))
    }

    //Adicona uma tag a nota que está sendo cadastrada;
    function handleAddTag() {

        //Verifcia se o usuário digitou uma tag
        if(!newTag) return alert("Preencha o campo!")

        //Adiciona a nova tag adicionada pelo usuário no estado de tags já existentes;
        setTags(prevState => [...prevState, newTag]);
        //Limpa o valor da tag para refletir na limpeza do input posteriormente;
        setNewTag("");
    }

    //Remove a tag especifica selecionada pelo usuário;
    function handleRemoveTag(deletedIndex) {
        //Utiliza o filter para retornar todos os links que forem diferentes ao que o usuário quer remover
        setTags(prevState => prevState.filter((tag, index) => index != deletedIndex))
    }

    //Envia os dados inseridos pelo usuário para o recurso de criar notas na API.
    async function handleNewNote(){
        try{  
            
            //Verifica se os campos de titulo e descrição foram preenchidos corretamente;
            if(!title ||!description) return alert("Por favor, preencha os campos corretamente!")

            if(newLink || newTag) return alert("Uma tag ou link não foi adicionado corretamente, confirme para adicionar ou deixe em branco para continuar!")
            
            await api.post("/notes/create", {
                title,
                description,
                links,
                tags
            })

            alert("Nota cadastrada com sucesso!");

            //Redireciona o usuário para página anterior (home);
            navigate(-1)

        }catch(error){  
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel cadastrar a nota!");
            }
        }
    }

    return (
        <Container>

            <Header />

            <main>
                <Form>

                    <header>
                        <h1>Criar nota</h1>
                        <Link to={-1}>Voltar</Link>
                    </header>

                    <Input placeholder="Título" onChange={event => setTitle(event.target.value)} />

                    <Textarea placeholder="Observações" onChange={event => setDescription(event.target.value)} />

                    <Section title="Links úteis" >

                        {/* Mapeia os links adicionados pelo usuário, renderizando o componente noteItem para cada um deles */}
                        {
                            links.map((link, index) => {
                                return (
                                    <NoteItem
                                        key={String(index)}
                                        value={link}
                                        onclick={() => { handleRemoveLink(index) }}
                                    />
                                )
                            })
                        }


                        <NoteItem
                            placeholder="Novo link"
                            value={newLink} /* Define o valor padrão do input sendo o valor do estado newLink */
                            isNew
                            onChange={event => setNewLink(event.target.value)} /* Adiciona o valor digitado pelo usuário ao estado newLink */
                            onclick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores" >
                        <div className="tags">

                        {/* Mapeia as tags adicionados pelo usuário, renderizando o componente noteItem para cada uma delas */}
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onclick={() => { handleRemoveTag(index)}}
                                        />
                                    )
                                })
                            }
                            <NoteItem
                                placeholder="Nova tag"
                                isNew
                                onChange={event => setNewTag(event.target.value)}
                                value={newTag}
                                onclick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>

        </Container>
    )
}