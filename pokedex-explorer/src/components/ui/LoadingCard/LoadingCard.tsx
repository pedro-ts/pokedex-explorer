import React from "react";
import styles from "./LoadingCard.module.css";

type Props = {};

export default function LoadingCard({}: Props) {
	return (
	<div className="flex flex-col justify-center items-center bg-neutral-950 rounded-xl px-10 py-20
	lg:px-20 lg:py-30
	"><div className={styles.loader}></div>
		<p className="pt-10 text-2xl text-neutral-200 font-bold">Carregando...</p>
	</div>
);
}