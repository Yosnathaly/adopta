
import {Card as CardB} from "react-bootstrap";
import Tags from "./tags";

const Card = ({nombre, imagen, descripcion}) => {
  return (
    <CardB>
        <h3>{nombre}</h3>
        <img src={imagen} alt="" />
        <p>{descripcion}</p>
        <Tags/>
    </CardB>
  
  
  )
}

export default Card