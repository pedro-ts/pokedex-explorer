import React from 'react'
import { NumerosLandingType } from '@/types/landing'

type Props = {
    titulo?: string;
    subtitulo?: string;
    valores: NumerosLandingType[];
}

export default function NumerosLanding({titulo = "", subtitulo = "", valores}: Props) {
return (
    <section className='text-neutral-200'>
        <div id="numeros-title-container">
            {titulo && 
                <h2 className='text-2xl font-semibold py-4 text-center
                '>
                    {titulo}
                </h2>
            }
            
            {subtitulo &&
                <p className='px-5 text-center text-red-200 py-4
                '>
                    {subtitulo}
                </p>
            }
        </div>

        <div 
        id="numeros-cards-container"
        className='grid grid-cols-2 gap-4 px-5 py-10
        lg:grid-cols-4 lg:gap-2
        2xl:px-[20%]
        '
        >
            {valores.map((card)=>(
                <article 
                data-aos="zoom-in"
                className='text-center px-2 py-4 bg-linear-to-br to-neutral-600/25 from-neutral-700/25 rounded-lg border-1 border-neutral-200/20
                lg:to-transparent lg:from-transparent lg:border-none
                '>
                    <p className=' text-4xl font-bold text-rose-600
                    '>
                        {card.valor}
                    </p>
                    <p className=' uppercase text-sm pt-2 text-red-200
                    '>
                        {card.desc}
                    </p>
                </article>
            ))}
        </div>
    </section>
)
}