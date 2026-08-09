import { useState } from "react";

//defini tempo padrão dentro do parametro, usado em setTimeout
export function useToast(tempoPadrao = 2500) {
  const [mensagemToast, setMensagemToast] = useState("");

  const mostrarToast = (mensagem) => {
    setMensagemToast(mensagem);

    setTimeout(() => {
      setMensagemToast("");
    }, tempoPadrao);
  };

  return {
    mensagemToast,
    mostrarToast,
  };
}