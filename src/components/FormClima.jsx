import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardClima from "./CardClima";

const FormClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState([]);
  const [temperatura, setTemperatura] = useState({});
  const [ciudadAPI, setCiudadAPI] = useState("");
  const [sys, setSys] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      alert("Complete los dos campos por favor");
    } else {
      consultarAPI();
      setCiudad("");
      setPais("");
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=2379bde6c1cae4cffefafe1d29717de2&units=metric`
      );
      const dato = await respuesta.json();
      console.log(dato);
      setCiudadAPI(dato.name);
      setSys(dato.sys);
      setClima(dato.weather);
      setTemperatura(dato.main);
    } catch (error) {
      alert("ubicacion no encotrada");
    }
  };

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
      <CardClima
        ciudadAPI={ciudadAPI}
        clima={clima}
        temperatura={temperatura}
        sys={sys}
      ></CardClima>
    </Card>
  );
};

export default FormClima;
