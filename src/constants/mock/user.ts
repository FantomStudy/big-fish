export interface User {
  name: string;
  avatarUrl: string;
  balance: number;
  bonus: number;
  referalLink: string;
}

export const getUser = () => {
  return {
    name: "Арзамасцев Даниил Михайлович",
    avatarUrl: "https://avatars.githubusercontent.com/u/110792863?v=4",
    balance: 500,
    bonus: 120,
    referalLink: "https://referalnaia.ssilka/ssilka",
  };
};
