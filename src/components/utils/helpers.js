// takes the key in Object.entries from skills data and spits/capitalizes the word
export const splitAndCapitalize = (title) => {
  const splitStr = title.split(/(?=[A-Z])/);
  const capitalizeSplitStr = splitStr.map(
    (str) => str.charAt(0).toLocaleUpperCase() + str.slice(1)
  );
  return capitalizeSplitStr.join(" ");
};
