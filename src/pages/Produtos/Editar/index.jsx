import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditarProduto = () => {
  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  async function buscarProduto() {
    const { data } = await axios.get(
      `https://banco-usuario-aula.onrender.com/produtos/${id}`
    );
    setNome(data.nome);
    setPreco(data.preco);
  }

  useEffect(() => {
    buscarProduto();
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://banco-usuario-aula.onrender.com/produtos/${id}`,
        {
          nome,
          preco,
        }
      );
      alert("Produto editado com sucesso");
      navigate("/produtos");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Editar Produto</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            value={nome}
            type="text"
            id="nome"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="preco">Preço</label>
          <input
            value={preco}
            type="number"
            id="preco"
            name="preco"
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <button>Salvar</button>
      </form>
    </>
  );
};
