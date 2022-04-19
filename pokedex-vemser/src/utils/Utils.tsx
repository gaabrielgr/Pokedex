export const ColorStandard = (values: string) => {
  switch (values) {
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
};

export const zeroLeft = (num: number) => {
  return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
};

export const topPage = () => {
  return window.scrollTo(0, 0);
};

export const upperCaseLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
