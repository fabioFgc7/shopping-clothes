import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import { MenDetails } from "./components/MenDetails";
import { WomenDetails } from "./components/WomenDetails";
import Cart from "./components/Cart";
import { ClothesContext } from "./context/ClothesContext";

function App() {
  return (
    <>
      <main>
        <ClothesContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/men'
                element={<Men />}
              />
              <Route
                path='/men/:id'
                element={<MenDetails />}
              />

              <Route
                path='/women'
                element={<Women />}
              />
              <Route
                path='/women/:id'
                element={<WomenDetails />}
              />
              <Route
                path='/cart'
                element={<Cart />}
              />
            </Routes>
          </BrowserRouter>
        </ClothesContext>
      </main>
    </>
  );
}

export default App;
