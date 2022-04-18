import styled from "styled-components";
export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 40px;
  height: 100vh;
  background-color: ${(props: any) => {
    switch (props.color) {
      case "steel":
        return "#f4f4f4";
      case "fire":
        return "#f8bcbc";
      case "grass":
        return "#9cf3a2";
      case "electric":
        return "#e6d99d";
      case "water":
        return "#81d1f7";
      case "ice":
        return "#def3fd";
      case "ground":
        return "#f7dabb";
      case "rock":
        return "#d5d5d4";
      case "fairy":
        return "#f1c0fa ";
      case "poison":
        return "#98ce9f";
      case "dragon":
        return "#97b3e6";
      case "psychic":
        return "#dee08e";
      case "normal":
        return "#a8a77ab5";
      case "bug":
        return "#a6b91a83";
      case "ghost":
        return "#735797";
      case "fighting":
        return "#c22d28c0";
      default:
        return "white";
    }
  }};
`;

export const ImgDiv = styled.div`
  position: absolute;
  top: 1px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 15px;
`;
export const NamePokemon = styled.span`
  font-size: 24px;
  color: ${(props) => props.color};
  padding: 0px 15px;
  color: #fff;
`;

export const ArrowName = styled.div`
  display: flex;
  padding-left: 15px;
`;
export const ArrowImg = styled.img`
  src: ${(props) => props.src};
  cursor: pointer;
`;
export const ReturnDetails = styled.a`
  cursor: pointer;
`;

export const PokemonStand = styled.div`
  width: 1150px;
  background-color: #fff;
  margin: 5px auto;
  border-radius: 8px;
  position: relative;
`;
export const PokeCard = styled.img<{
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
}>`
  width: 150px;
  position: absolute;
  opacity: 0.1;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;
export const PokemonImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgStand = styled.img`
  margin-top: -125px;
  src: ${(props) => props.src};
`;

export const PokemonTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Types = styled.div`
  width: 90px;
  height: 20px;
  margin: 30px 15px 0;
  border-radius: 10px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => {
    switch (props.color) {
      case "steel":
        return "#B7B7CE";
      case "fire":
        return "#EE8130";
      case "grass":
        return "#7AC74C";
      case "electric":
        return "#F7D02C";
      case "water":
        return "#6390F0";
      case "ice":
        return "#96D9D6";
      case "ground":
        return "#E2BF65";
      case "rock":
        return "#B6A136";
      case "fairy":
        return "#D685AD ";
      case "poison":
        return "#A33EA1";
      case "dragon":
        return "#6F35FC";
      case "psychic":
        return "#F95587";
      case "normal":
        return "#A8A77A";
      case "bug":
        return "#A6B91A";
      case "ghost":
        return "#735797";
      case "fighting":
        return "#C22E28";
      case "flying":
        return "#A98FF3";
      default:
        return "white";
    }
  }};
`;

export const PokemonInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TitleInfo = styled.h2<{ mT?: string; wT?: string; bR?: string }>`
  font-size: 24px;
  width: ${(props) => props.wT};
  margin-top: ${(props) => props.mT};
  border-right: ${(props) => props.bR};
  color: ${(props: any) => {
    switch (props.color) {
      case "steel":
        return "#B7B7CE";
      case "fire":
        return "#EE8130";
      case "grass":
        return "#7AC74C";
      case "electric":
        return "#F7D02C";
      case "water":
        return "#6390F0";
      case "ice":
        return "#96D9D6";
      case "ground":
        return "#E2BF65";
      case "rock":
        return "#B6A136";
      case "fairy":
        return "#D685AD ";
      case "poison":
        return "#A33EA1";
      case "dragon":
        return "#6F35FC";
      case "psychic":
        return "#F95587";
      case "normal":
        return "#A8A77A";
      case "bug":
        return "#A6B91A";
      case "ghost":
        return "#735797";
      case "fighting":
        return "#C22E28";
      case "flying":
        return "#A98FF3";
      default:
        return "white";
    }
  }};
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-left: 1px solid #e0e0e0;
  flex-direction: column;

  :first-child {
    border: none;
  }
`;

export const InfoImg = styled.img`
  width: 50px;
  height: 50px;
  src: ${(props) => props.src};
`;
export const InfosPoke = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const InfoAbilities = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;
export const AbilitySpan = styled.span`
  margin-top: 5px;
`;

export const InfoSpan = styled.span`
  margin-left: 10px;
`;

export const TitleSpan = styled.h2`
  font-size: 12px;
  color: #666666;
  margin-top: 20px;
`;

export const PokemonInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px auto;
`;

export const StatsBar = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Stats = styled.div`
  width: 40%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const InfoNumbers = styled.div`
  width: 40px;
`;
