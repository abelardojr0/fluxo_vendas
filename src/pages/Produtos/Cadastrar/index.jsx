import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CadastrarProduto = () => {
  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://banco-usuario-aula.onrender.com/produtos",
        {
          nome,
          preco,
        }
      );
      alert(data.mensagem);
      navigate("/produtos");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            id="preco"
            name="preco"
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <button>Cadastrar</button>
      </form>
    </>
  );
};
