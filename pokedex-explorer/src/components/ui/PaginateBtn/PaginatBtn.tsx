import React from 'react'
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

type Props = {
    paginaAtual: number;
    setState: (novoValorPagina: number) => void;
}

export default function PaginatBtn({paginaAtual, setState}: Props) {
  async function somar(paginaAtual: number, eh10 = false): Promise<void> {
		let soma = 1;

		if (!eh10) {
			soma = paginaAtual + 1;
		} else{
		soma = paginaAtual + 10;
    }

		setState(soma);

    window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

  async function subtrair(paginaAtual: number, eh10 = false): Promise<void>{
    let subtracao = 1;

    if(!eh10){
      subtracao = paginaAtual - 1;
    } else{
    subtracao = paginaAtual - 10;
    }

    if(subtracao < 0){
      subtracao = 0
    }

    setState(subtracao)

    window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
  }

  return (
    <div
      id="paginate-btn-container"
      className=" flex flex-row gap-2 py-5 items-center justify-items-center
    "
    >
      {/* Retorna 1 */}
      <button
        onClick={() => subtrair(paginaAtual, false)}
        className=' block text-neutral-900 text-bold text-center bg-gradient-to-br from-neutral-100/85 to-neutral-300/70 p-2 rounded-md transition-all hover:from-neutral-100/10 hover:to-neutral-300/10 hover:text-neutral-200 hover:scale-115 hover:cursor-pointer
      '>
        <ChevronLeft />
      </button>

      {/* Reduz 10 */}
      <button
        onClick={() => subtrair(paginaAtual, true)}
        className=' block text-neutral-900 text-bold text-center bg-gradient-to-br from-neutral-100/85 to-neutral-300/70 p-2 rounded-md transition-all hover:from-neutral-100/10 hover:to-neutral-300/10 hover:text-neutral-200 hover:scale-115 hover:cursor-pointer
      '>
        <ChevronsLeft />
      </button>

      {/* Valor da pagina que está */}
      <input 
        value={paginaAtual}
        onChange={(evento) => {setState(Number(evento.target.value))}} 
        type="number"
        className=' block text-neutral-900 text-bold text-center bg-gradient-to-br from-neutral-100/85 to-neutral-300/70 w-15 p-2 rounded-md transition-all hover:from-neutral-100/10 hover:to-neutral-300/10 hover:text-neutral-200 hover:scale-115 hover:cursor-pointer
      '/>
      {/* Soma 10 */}
      <button
        onClick={() => somar(paginaAtual, true)}
        className=' block text-neutral-900 text-bold text-center bg-gradient-to-br from-neutral-100/85 to-neutral-300/70 p-2 rounded-md transition-all hover:from-neutral-100/10 hover:to-neutral-300/10 hover:text-neutral-200 hover:scale-115 hover:cursor-pointer 
      '>
        <ChevronsRight />
      </button>

      {/* Avança 1 */}
      <button
        onClick={() => somar(paginaAtual, false)}
        className=' block text-neutral-900 text-bold text-center bg-gradient-to-br from-neutral-100/85 to-neutral-300/70 p-2 rounded-md transition-all hover:from-neutral-100/10 hover:to-neutral-300/10 hover:text-neutral-200 hover:scale-115 hover:cursor-pointer 
      '>
        <ChevronRight />
      </button>
    </div>
  );
}