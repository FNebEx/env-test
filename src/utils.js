const variable = import.meta.env.VITE_ENV_VARIBALE;

console.log(variable);

export const getVaribale = () => {
  return variable || "Some variable";
};
