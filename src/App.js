import { HeaderSimple } from "./components/Header";
import { Home } from "./components/pages/Home";
import { Beznal } from "./components/pages/Beznal";
import { Bonus } from "./components/pages/Bonus";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";

function App() {
  const links = [
    {
      link: "/",
      label: "Главная",
    },
    {
      link: "/beznal",
      label: "Безнал",
    },
    {
      link: "/bonus",
      label: "Бонусы",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderSimple links={links} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beznal" element={<Beznal />} />
            <Route path="/bonus" element={<Bonus />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
