import { Container } from "./styles";


export const ButtonText = ({ title, isActive = false , ...rest }) => {
    return(
        <>
            <Container  type="button" $isactive={isActive.toString()} {...rest}>
                {title}
            </Container>
        </>
    );
}