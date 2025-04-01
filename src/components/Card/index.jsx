import axios from "axios";
import { CardBotao, CardInfos, CardStyled } from "./style";
import { useNavigate } from "react-router-dom";

export const Card = ({ element }) => {
  const navigate = useNavigate();
  async function deletar() {
    try {
      await axios.delete(
        `https://banco-usuario-aula.onrender.com/produtos/${element.id}`
      );
      alert("Produto excluído com sucesso");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CardStyled key={element.id}>
      <CardInfos>
        <h2>{element.nome}</h2>
        <p>R$ {element.preco}</p>
      </CardInfos>
      <CardInfos>
        <CardBotao onClick={() => navigate(`/produtos/editar/${element.id}`)}>
          Editar
        </CardBotao>
        <CardBotao onClick={deletar}>Excluir</CardBotao>
      </CardInfos>
    </CardStyled>
  );
};
