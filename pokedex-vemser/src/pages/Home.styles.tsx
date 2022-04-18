import styled from "styled-components";
import beforePoke from "../images/beforePoke.png";

export const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: rgb(238, 238, 238, 0.5);
`;

export const ContainerCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const TitleType = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const Card = styled.li<{ bd: any }>`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${(props: any) => {
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
      default:
        return "white";
    }
  }};
  box-shadow: 0px 0px 8px -1px ${(props: any) => {
      switch (props.bd) {
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
        default:
          return "white";
      }
    }};
`;
export const BackgroundCardImg = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: 0.1;
  img {
    margin-left: 30px;
  }
`;

export const ContainerCardImg = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  :before {
    z-index: -1;
    position: absolute;
    bottom: -35px;
  }
`;
export const CardImg = styled.img`
  height: 150px;
  width: 150px;
  transition: all 0.5s;
  :hover {
    cursor: pointer;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ColorCard = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
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
      default:
        return "white";
    }
  }};
`;
export const TitleCard = styled.h3`
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ContainerIdCard = styled.div`
  margin-right: 15px;
`;
export const IdCard = styled.p`
  padding-top: 10px;
  text-align: right;
  font-weight: bold;
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
      default:
        return "white";
    }
  }};
`;

export const ContainerNamePokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  z-index: 99;
`;
/* MENU LATERAL */

export const ContainerSearch = styled.div`
  border-right: 1px solid #fff;
  position: relative;
`;
export const ReturnHome = styled.img`
  opacity: 0.5;
  transform: rotate(270deg);
`;
export const SearchPokemon = styled.input`
  width: 100%;
  border: none;
  padding-left: 10px;
  font-size: 20px;
  height: 35px;
  outline: none;
`;
export const SearchImg = styled.img`
  position: absolute;
  top: 58px;
  right: 1px;
  opacity: 0.4;
`;

export const ButtonHome = styled.a`
  padding: 5px 0px 5px 10px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #dfdfdf;
  }
  h3 {
    padding-left: 5px;
  }
`;

export const ContainerMenuLateral = styled.nav`
  margin-right: 20px;
  background-color: rgb(238, 238, 238, 0.5);
`;

export const UlMenuLateral = styled.ul`
  border-right: 2px solid #fff;
  display: flex;
  flex-direction: column;
`;
export const ContainerTitleMenuLateral = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
  margin-top: 20px;
  border-bottom: 2px solid #fff;
`;
export const LiMenuLateral = styled.li`
  display: flex;
  border-bottom: 2px solid #fff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 50px;
  position: relative;
  img {
    margin-left: 10px;
    opacity: 0.5;
  }
  :hover {
    background-color: #dfdfdf;
  }
  :hover:after {
    position: absolute;
    right: 5px;
    content: url(${beforePoke});
  }
`;
export const ItemMenu = styled.p`
  padding-left: 5px;
  text-transform: capitalize;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const ItemMenuLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  color: #a7a7a7;
  border-top: 2px solid #fff;
  padding: 0px 20px 3px 20px;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  p {
    width: 100%;
    text-align: center;
  }
  a {
    cursor: pointer;
    padding-bottom: 0px;
  }
`;

/* export const ImgMenu = styled.img.attrs({
src: url
${(props: any) => {
  switch (props.source) {
    case "steel":
      return `${stellImg}`;
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
    default:
      return "white";
  }
}};
}) */
