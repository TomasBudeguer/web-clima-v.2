import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardClima from "./CardClima";

const FormClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(ciudad.trim() === '' || pais.trim() === ''){
        alert("Complete los dos campos por favor");
    }else {
        setCiudad('')
        setPais('')
      }
  }
  return (
    <Card>
      <Card.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicCiudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: San Miguel de Tucuman"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPais">
            <Form.Label>Pais</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Argentna"
              onChange={(e) => setPais(e.target.value)}
              value={pais}
              required
            />
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
