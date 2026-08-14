import {
	Brain,
	Bug,
	Circle,
	Droplets,
	Flame,
	Landmark,
	Moon,
	Mountain,
	Shield,
	Skull,
	Snowflake,
	Sparkles,
	Sprout,
	Swords,
	Wind,
	Zap,
	type LucideIcon,
} from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Badge, badgeVariants } from "../ui/badge";

type Props = {
	tipo: string;
	size?: NonNullable<VariantProps<typeof badgeVariants>["size"]>;
};

type ConfiguracaoTipo = {
	nome: string;
	classe: string;
	Icone: LucideIcon;
};

const tipos: Record<string, ConfiguracaoTipo> = {
	normal: { nome: "Normal", classe: "bg-stone-400/20 text-stone-200 border-stone-400", Icone: Circle },
	fire: { nome: "Fogo", classe: "bg-orange-500/20 text-orange-300 border-orange-400", Icone: Flame },
	water: { nome: "Água", classe: "bg-sky-500/20 text-sky-300 border-sky-400", Icone: Droplets },
	electric: { nome: "Elétrico", classe: "bg-amber-400/20 text-amber-300 border-amber-400", Icone: Zap },
	grass: { nome: "Grama", classe: "bg-lime-500/20 text-lime-300 border-lime-400", Icone: Sprout },
	ice: { nome: "Gelo", classe: "bg-cyan-400/20 text-cyan-200 border-cyan-300", Icone: Snowflake },
	fighting: { nome: "Lutador", classe: "bg-red-500/20 text-red-300 border-red-400", Icone: Swords },
	poison: { nome: "Veneno", classe: "bg-purple-500/20 text-purple-300 border-purple-400", Icone: Skull },
	ground: { nome: "Terra", classe: "bg-yellow-700/20 text-yellow-300 border-yellow-500", Icone: Landmark },
	flying: { nome: "Voador", classe: "bg-indigo-400/20 text-indigo-200 border-indigo-300", Icone: Wind },
	psychic: { nome: "Psíquico", classe: "bg-pink-500/20 text-pink-300 border-pink-400", Icone: Brain },
	bug: { nome: "Inseto", classe: "bg-emerald-500/20 text-emerald-300 border-emerald-400", Icone: Bug },
	rock: { nome: "Pedra", classe: "bg-amber-700/20 text-amber-300 border-amber-500", Icone: Mountain },
	ghost: { nome: "Fantasma", classe: "bg-violet-600/20 text-violet-300 border-violet-400", Icone: Moon },
	dragon: { nome: "Dragão", classe: "bg-indigo-600/20 text-indigo-300 border-indigo-400", Icone: Sparkles },
	dark: { nome: "Sombrio", classe: "bg-slate-600/30 text-slate-200 border-slate-400", Icone: Moon },
	steel: { nome: "Aço", classe: "bg-zinc-500/20 text-zinc-200 border-zinc-400", Icone: Shield },
	fairy: { nome: "Fada", classe: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400", Icone: Sparkles },
};

export default function TypeBadge({ tipo, size = "md" }: Props) {
	const configuracao = tipos[tipo] ?? {
		nome: tipo,
		classe: "bg-neutral-500/20 text-neutral-200 border-neutral-400",
		Icone: Circle,
	};
	const Icone = configuracao.Icone;

	return (
		<Badge size={size} className={`border ${configuracao.classe}`}>
			<Icone aria-hidden="true" />
			{configuracao.nome}
		</Badge>
	);
}
