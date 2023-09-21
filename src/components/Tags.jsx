
import { Badge } from 'react-bootstrap'

const Tags = ({bg, texto}) => {
  return (
    <div>
        <Badge bg={bg}> {texto}</Badge>
    </div>
  )
}

export default Tags