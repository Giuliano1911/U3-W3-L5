import { Card, Col } from 'react-bootstrap'

interface NuovaStazioneProps {
  img: string
  text: string
}

const NuovaStazione = (props: NuovaStazioneProps) => {
  return (
    <Col xs={6} className="d-flex p-2">
      <Card className="border-0">
        <Card.Body className="p-0 mb-2">
          <Card.Text className=" text-uppercase mb-0 opacity-50 small-text p-0">
            Nuova stazione radio
          </Card.Text>
          <Card.Text className="p-0">{props.text}</Card.Text>
        </Card.Body>
        <Card.Img className=" rounded-2" src={props.img} />
      </Card>
    </Col>
  )
}
export default NuovaStazione