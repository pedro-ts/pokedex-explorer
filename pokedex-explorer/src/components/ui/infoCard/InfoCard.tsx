import React from "react";

type Props = {
	icon: React.ReactNode;
	infoTitulo: string;
	infoValor: string | number;
};

export default function InfoCard({icon, infoTitulo, infoValor}: Props) {
	return (
		<div
			data-aos="fade-left"
			id="info-card-container"
			className="
	bg-neutral-800 rounded-md flex flex-row justify-between items-center p-4 my-4 transition-all hover:scale-102
	"
		>
			<div
				id="info-info-titulo-container"
				className="
			flex flex-row font-extrabold text-red-300
		"
			>
				{icon}
				<p
					className=" pl-2
			"
				>
					{infoTitulo}
				</p>
			</div>

			<p>{infoValor}</p>
		</div>
	);
}
