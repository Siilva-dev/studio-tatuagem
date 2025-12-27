import { clientes } from '@barba/core'
import { LayoutGrid } from '../ui/layout-grid'
import ClienteItem from './ClienteItem'
import Titulo from '@/components/shared/Titulo'

export default function NossosClientes() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2']
    const cards = clientes.map((cliente, i) => {
        return {
            id: cliente.id,
            content: <ClienteItem nome={cliente.nome} testemunho={cliente.testemunho} />,
            className: classes[i],
            thumbnail: cliente.imagemURL,
        }
    })

    return (
        <div className="container flex flex-col items-center gap-16">
            <Titulo
                tag="Tatuagens"
                principal="Seu Estilo, Seu Comando"
                secundario="Aqui, cada tatuagem é uma obra-prima criada sob o comando do verdadeiro chefe: você! Comande seu estilo e leve um toque estelar para o universo."
            />
            <div className="h-[900px] w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    )
}
