import { Container } from "./styles"


export const Button = ({ title, loading = false, ...rest}) => {
    
    //Component props - props is an object where each property represents a dynamic value passed to the button component.
    // Rest - Rest represents the rest of propertys that was passed to the component, usually used when we dont want to pass every props manually to the component.
    return(
        <>
        
        <Container type="button" disabled={loading} {...rest} >
            {loading ?  "Carregando..." : title}
        </Container>

        </>
    )
}