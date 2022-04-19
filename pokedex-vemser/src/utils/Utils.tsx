
export const zeroLeft = (num: number) => {
  return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
};

export const topPage = () => {
  return window.scrollTo(0, 0);
};

export const upperCaseLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
