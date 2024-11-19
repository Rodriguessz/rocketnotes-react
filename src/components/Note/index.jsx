import { Container } from "./styles";
import { Tag } from "../../components/Tag"


export const Note = ({ data, ...rest }) => {
    return(
        <>
            <Container {...rest}>
                <h1>{data.title}</h1>

                <footer>
                    {data.noteTags && data.noteTags.map(tag => <Tag  key={tag.id} title={tag.name}/>)}
                </footer>
                
            </Container> 
        </>
    )
}