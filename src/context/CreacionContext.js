import { createContext, useState } from "react";

export const CreacionContext = createContext({
  creado: {},
  setCreado: () => {}
})

export const CreadoProvider = ({ children }) => {
  const [creado, setCreado] = useState();
  const value = { creado , setCreado };

  return <CreacionContext.Provider value={value}>{children}</CreacionContext.Provider>;
}