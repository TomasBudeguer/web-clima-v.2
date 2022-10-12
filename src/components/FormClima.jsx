import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardClima from "./CardClima";
import Spinner from "./Spinner";

const FormClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState([]);
  const [temperatura, setTemperatura] = useState({});
  const [ciudadAPI, setCiudadAPI] = useState("");
  const [sys, setSys] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

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
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=2379bde6c1cae4cffefafe1d29717de2&units=metric`
      );
      const dato = await respuesta.json();
      console.log(dato.weather);
      setCiudadAPI(dato.name);
      setSys(dato.sys);
      setClima(dato.weather);
      setTemperatura(dato.main);
      setMostrarSpinner(false);
    } catch (error) {
      setMostrarSpinner(false);
      console.log("ubicacion no encontrada");
    }
  };

  const mostrarComponente =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <CardClima
        ciudadAPI={ciudadAPI}
        clima={clima}
        temperatura={temperatura}
        sys={sys}
      ></CardClima>
    );

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
      {mostrarComponente}
    </Card>
  );
};

export default FormClima;
