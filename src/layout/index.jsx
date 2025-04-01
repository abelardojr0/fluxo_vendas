import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/produtos"}>Produtos</Link>
            </li>
            <li>
              <Link to={"/clientes"}>Clientes</Link>
            </li>
            <li>
              <Link to={"/vendas"}>Vendas</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
