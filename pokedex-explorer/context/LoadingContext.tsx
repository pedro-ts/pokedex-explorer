"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
import LoadingCard from "@/components/ui/LoadingCard/LoadingCard";

type Props = {
	carregando: boolean;
	iniciarLoading: () => void;
	finalizarLoading: () => void;
};

const LoadingContext = createContext<Props | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [carregando, setCarregando] = useState(false);

	function iniciarLoading() {
		setCarregando(true);
	}

	function finalizarLoading() {
		setCarregando(false);
	}

	return (
		<LoadingContext.Provider
			value={{ carregando, iniciarLoading, finalizarLoading }}
		>
			{carregando && (
				<div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60">
					<LoadingCard />
				</div>
			)}
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading() {
	const contexto = useContext(LoadingContext);

	if (!contexto) {
		throw new Error("useLoading deve estar dentro de LoadingProvider");
	}

	return contexto;
}