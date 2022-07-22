import About from "./Componentes/About";
import Content from "./Componentes/Content";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Portfolio from "./Componentes/Portfolio";
import Title from "./Componentes/Title";

function App() {
  return (
    <>
      <div className="container_main">
        <Header>Meu portfólio da Reprograma</Header>
        <About
          image="https://avatars.githubusercontent.com/u/69588653?s=400&u=1459d4fc2353c494b655466782a3a3c925ac39bc&v=4"
          description="Foto da aluna Izadora"
        ></About>
        <Portfolio />
        <div className="container_learning">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
