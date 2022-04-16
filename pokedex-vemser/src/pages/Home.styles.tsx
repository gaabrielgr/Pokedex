import styled from "styled-components";
import beforePoke from "../images/beforePoke.png";
export const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #eeeeee;
`;

export const ContainerCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Card = styled.li`
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
`;
export const ContainerCardImg = styled.div`
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
`;
/* MENU LATERAL */

export const ContainerSearch = styled.div`
  border-right: 1px solid #fff;
`;

export const ContainerMenuLateral = styled.nav`
  margin-right: 20px;
  background-color: #eeeeee;
`;

export const UlMenuLateral = styled.ul`
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const LiMenuLateral = styled.li`
  display: flex;
  align-items: end;
  cursor: pointer;
  height: 50px;
  position: relative;
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
  padding-left: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const ItemMenuLink = styled.a`
  width: 100%;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  padding: 0px 20px;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 50px;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
  }
`;
