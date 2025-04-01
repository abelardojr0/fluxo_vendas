import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import { ContainerProdutos } from "./styles";
import { CardBotao } from "../../../components/Card/style";
import { useNavigate } from "react-router-dom";

export const Produtos = () => {
  const [produtos, setProdutos] = useState();

  async function buscarProdutos() {
    try {
      const { data } = await axios.get(
        "https://banco-usuario-aula.onrender.com/produtos"
      );
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <h1>Produtos</h1>
      <CardBotao onClick={() => navigate("/produtos/cadastrar")}>
        Adicionar
      </CardBotao>
      <br />
      <br />
      <ContainerProdutos>
        {produtos && produtos.map((element) => <Card element={element} />)}
      </ContainerProdutos>
    </>
  );
};
