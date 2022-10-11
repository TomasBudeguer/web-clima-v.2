import { Card, Col, Row } from "react-bootstrap";

const CardClima = ({ ciudadAPI, clima, temperatura, sys }) => {
  return (
    <div>
      {clima.map((clima) => (
        <Card.Body key={sys.id}>
          <Card>
            <Card.Header>
              {ciudadAPI}, {sys.country}
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={12} md={4} className="text-center">
                  <Card.Img
                    src={
                      "http://openweathermap.org/img/wn/" + clima.icon + ".png"
                    }
                    className="w-25"
                  />
                </Col>
                <Col sm={12} md={8}>
                  <div className="d-flex justify-content-between">
                    <Card.Title className="display-6">
                      {temperatura.temp}°
                    </Card.Title>
                    <Card.Subtitle>
                      Min: {temperatura.temp_min} - Max: {temperatura.temp_max}
                    </Card.Subtitle>
                  </div>
                  <Card.Subtitle>{clima.main}</Card.Subtitle>
                  <Card.Text>Descripcion: {clima.description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      ))}
    </div>
  );
};

export default CardClima;
