import { Card, Col, Row } from "react-bootstrap";

const CardClima = () => {
  return (
    <Card.Body>
      <Card>
        <Card.Header>Nombre de la ciudad y pais</Card.Header>
        <Card.Body>
          <Row className="align-items-center">
            <Col sm={12} md={4} className="text-center">
              <Card.Img
                src="http://openweathermap.org/img/wn/10n.png"
                className="w-25"
              />
            </Col>
            <Col sm={12} md={8}>
              <Card.Title className="display-6">Temperatura°</Card.Title>
              <Card.Title>estado del clima</Card.Title>
              <Card.Text>descripcion</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Card.Body>
  );
};

export default CardClima;
