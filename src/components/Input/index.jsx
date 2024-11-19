import { Container } from "./styles"


// icon: Icon - Way to receive the props in lowercase and convert to upperCase
export const Input = ({ icon: Icon, ...rest}) => {
    return(
        <>
            <Container>
                {/* && Operator -  If the props contains value, show de icon */}
                {Icon && <Icon size={20} />}
                <input {...rest} />
            </Container>
        </>
    )
}