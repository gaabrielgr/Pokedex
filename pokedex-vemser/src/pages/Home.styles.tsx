import styled from "styled-components";

export const ColorDiv = styled.div`
  width: 70%;
  background-color: ${(props: any) => {
    switch (props.color) {
      case "steel":
        return "#f4f4f4";
      case "fire":
        return "#fddfdf";
      case "grass":
        return "#defde0";
      case "electric":
        return "#fcf7de";
      case "water":
        return "#def3fd";
      case "ice":
        return "#def3fd";
      case "ground":
        return "#f4e7da";
      case "rock":
        return "#d5d5d4";
      case "fairy":
        return "#fceaff ";
      case "poison":
        return "#98ce9f";
      case "dragon":
        return "#97b3e6";
      case "psychic":
        return "#eaeda1";
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
  margin-bottom: 10px;
  padding-left: 10px;
`;
