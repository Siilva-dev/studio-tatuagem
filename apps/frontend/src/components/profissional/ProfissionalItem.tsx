import { IconBrandInstagram } from '@tabler/icons-react' // Mantém apenas o ícone do Instagram
import { Profissional } from '@barba/core'
import Image from 'next/image'
import Avaliacao from '../shared/Avaliacao'

export interface ProfissionalItemProps {
    profissional: Profissional
}

export default function ProfissionalItem(props: ProfissionalItemProps) {
    return (
        <div
            className="
                flex flex-col items-center p-1
                bg-zinc-800 rounded-lg
            "
        >
            <div className="relative h-72 w-full">
                <Image
                    src={props.profissional.imagemUrl}
                    fill
                    alt={props.profissional.nome}
                    className="object-cover object-top rounded-t-lg"
                />
            </div>
            <div className="flex flex-col p-4 gap-5">
                <span className="text-2xl font-black">{props.profissional.nome}</span>
                <span className="text-sm text-zinc-400">{props.profissional.descricao}</span>

                <div className="flex gap-3 flex-wrap">
                    <Avaliacao
                        valor={props.profissional.avaliacao}
                        quantidade={props.profissional.quantidadeAvaliacoes}
                    />
                </div>

                {/* Mantém apenas o ícone do Instagram com o link */}
                <div className="flex gap-3 text-zinc-300">
                    <a href="https://www.instagram.com/marciano.tattoo" target="_blank" rel="noopener noreferrer">
                        <IconBrandInstagram stroke={1} />
                    </a>
                </div>
            </div>
        </div>
    )
}