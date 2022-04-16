import styled from "styled-components";

export const ContainerPai = styled.div`
    width: 100%;
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
`

export const ImgDiv = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;

`
export const NamePokemon = styled.span`
    font-size: 24px;
    color: white;
    padding-left: 15px;
`

export const ArrowName = styled.div `
    display: flex;
    padding-left: 15px;
`
export const ArrowImg = styled.img`
    src: ${props => props.src};
    cursor: pointer;
`
