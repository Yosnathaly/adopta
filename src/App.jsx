import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header titulo={"Adopta un Perrito"} />
      <h1>esto es una prueba Armando</h1>
      <br />
      <div className="container">
        <Card
          nombre={"Nala"}
          imagen={"https://placedog.net/240"}
          descripcion={"Soy una perrita muy amorosa y juguetona"}
          bg="primary"
          texto="BTN"
        />
        <Card
          nombre={"Max"}
          imagen={"https://placedog.net/200"}
          descripcion={"Soy un perrito muy tranquilo y cariñoso"}
          bg="secondary"
          texto="BTN"
        />
        <Card
          nombre={"Sofia"}
          imagen={"https://placedog.net/214"}
          descripcion={"Soy una perrita muy traquila y amorosa"}
          bg="success"
          texto="BTN"
        />
        <Card
          nombre={"Paco"}
          imagen={"https://placedog.net/223"}
          descripcion={"Soy un perrito muy amoroso y jugueton"}
          bg="warning"
          texto="BTN"
        />
      </div>
      <br />
      <div className="footer">
        <Footer
          detalle={
            "Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de una hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre"
          }
        />
      </div>
    </div>
  );
};

export default App;
