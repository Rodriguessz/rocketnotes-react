import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";


import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section"

import { FiPlus, FiSearch } from "react-icons/fi"




export const Home = ({ }) => {

    //Estado para o conteúdo do input de pesquisa;
    const [search, setSearch] = useState("");

    //Estado para armazenar as tags do usuário
    const [tags, setTags] = useState([])

    //Estado para armazenar as tags que já foram selecionadas pelo usuário.
    const [selectedTags, setSelectedTags] = useState([]);

    //Estado para armazenar as notas do usuário
    const [notes, setNotes] = useState([]);

    //Inicia a função navigate para o redirecionamento de rotas;
    const navigate = useNavigate()

    function handleTagSelection(tagName) {

        if (tagName == "all") return setSelectedTags([]);

        //Verifica se a tag está presente no array.
        //Includes(valorProcurado) - Verifica se existe uma ocorrencia do valor procurado no array.
        const alreadySelected = selectedTags.includes(tagName)

        if (alreadySelected) {
            //Retorna um array filtrado sem a tag clicada pelo usuário.
            const filteredTags = selectedTags.filter(tag => tagName != tag)

            //Adiciona o array resultante no estado de tags selecionadas;
            setSelectedTags(filteredTags)
        } else {
            // Adiciona a nova tag ao estado, preservando as tags já selecionadas
            setSelectedTags(prevState => [...prevState, tagName])
        }
    }

    //Redireciona o usuário para a página de detalhes
    function handleNoteDetails(id){
        //Passa o id da nota como route param;
        navigate(`details/${id}`)
    }


    //#region UseEffects
        //Busca as tags do usuário na API e adiciona ao estado de tags;
        useEffect(() => {
            async function fetchTags() {
                //Busca as tags do usuário;
                const { data } = await api.get("/tags");

                //Insere as tags recueperadas no estado criado previamente;
                setTags(data)
            }

            fetchTags();

        }, [])

        //Busca as notas do usuário de acordo com o filtro passado e adiciona ao estado de notas;
        useEffect(() => {

            async function fetchNotes() {

                //Busca as notas do usuário na API, enviando os filtros setados pelo usuário através dos query parameters;
                const { data } = await api.get(`/notes?title=${search}&tags=${selectedTags}`);

                //Adiciona as notas recuperadas no estado de notas;
                setNotes(data);
            }

            fetchNotes()
        }, [selectedTags, search])
    //#endregion
    
    return (

        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        $isactive={selectedTags.length === 0}
                        onClick={() => handleTagSelection("all")}
                    />
                </li>

                {tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText
                            title={tag.name}
                            onClick={() => handleTagSelection(tag.name)}
                            $isactive={selectedTags.includes(tag.name)}
                        />
                    </li>
                ))}

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} onChange={event => setSearch(event.target.value)} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {notes && notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => {handleNoteDetails(note.id)}}
                        />

                    ))}
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                <span>Criar nota</span>
            </NewNote>



        </Container>

    )
}