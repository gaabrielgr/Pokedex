import gifLoading from "../images/pokebola.gif";
import { ContainerLoading } from "./Loading.styles";

const Loading = () => {
  return (
    <ContainerLoading>
      <img src={gifLoading}></img>
    </ContainerLoading>
  );
};

export default Loading;
