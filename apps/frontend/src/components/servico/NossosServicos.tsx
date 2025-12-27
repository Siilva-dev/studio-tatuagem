'use client'
import { Servico } from '@barba/core'
import { useRouter } from 'next/navigation'
import { useServicos } from '@barba/ui'
import ServicoItem from './ServicoItem'
import Titulo from '../shared/Titulo'

export default function NossosServicos() {
    const router = useRouter()
    const { servicos } = useServicos()

    function iniciarAgendamento() {
        router.push('/agendamento')
    }

    return (
        <div className="flex flex-col gap-16">
            <Titulo
                tag="Serviços"
                principal="Do Espacial ao Lendário"
                secundario="Tatuagens de Outro Mundo, Estilo de Explorador(a) e Detalhes Cósmicos, com uma aura estelar!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {servicos.map((servico: Servico) => (
                    <ServicoItem key={servico.id} servico={servico} onClick={iniciarAgendamento} />
                ))}
            </div>
        </div>
    )
}
