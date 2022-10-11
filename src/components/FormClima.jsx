import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardClima from "./CardClima";

const FormClima = () => {
  return (
    <Card>
      <Card.Header>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCiudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ej: San Miguel de Tucuman" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPais">
            <Form.Label>Pais</Form.Label>
            <Form.Control type="text" placeholder="Ej: Argentna" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Card.Header>
      <CardClima></CardClima>
    </Card>
  );
};

export default FormClima;
