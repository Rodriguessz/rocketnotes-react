import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'


export const NoteItem = ({isNew , value, onclick, ...rest}) => {
    return(
        <>
        
        <Container $isnew={isNew}>
            <input  
              type="text" 
              value={value}
              readOnly={!isNew}
              {...rest}
              />

              <button
                type="button"
                onClick={onclick}
              >
                {isNew ? <FiPlus /> : <FiX />}
              </button>
        </Container>

        </>
    )
}