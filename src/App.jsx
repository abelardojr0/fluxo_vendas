import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos/Dash";
import { Clientes } from "./pages/Clientes";
import { Vendas } from "./pages/Vendas";
import { Page404 } from "./pages/Page404";
import { CadastrarProduto } from "./pages/Produtos/Cadastrar";
import { EditarProduto } from "./pages/Produtos/Editar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos/cadastrar" element={<CadastrarProduto />} />
          <Route path="produtos/editar/:id" element={<EditarProduto />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="vendas" element={<Vendas />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
