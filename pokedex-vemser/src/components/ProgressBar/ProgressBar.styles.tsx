import styled from "styled-components";

export const Progress = styled.div`
    width: 300px;
    height: 10px;
    background-color: #f2f2f2;
    border-radius: 6px;
    margin: 0 0 0 30px;
    
`


export const Bar = styled.span<{width: string}>`
    width: ${props => props.width};
    display: block;
    position: relative;
    border-radius: 6px;
    
    background-color:  ${(props: any) => {
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
    height: 100%;
`


