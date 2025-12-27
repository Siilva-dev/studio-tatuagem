import Servico from '../servico/Servico'

const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Tatuagem pequena',
        descricao:
            'R$50 à R$150 - Tatuagens pequenas que capturam a essência da arte em um formato compacto e elegante.',
        preco: 60,
        qtdeSlots: 4,
        imagemURL: '/servicos/corte-de-cabelo.jpg',
    },
    {
        id: 2,
        nome: 'Tatuagem média',
        descricao:
            'R$200 à R$400 - Encontre a tatuagem média ideal para você, com designs que traduzem emoções e histórias em um tamanho ideal.',
        preco: 250,
        qtdeSlots: 12,
        imagemURL: '/servicos/corte-de-barba.jpg',
    },
    {
        id: 3,
        nome: 'Tatuagem grande',
        descricao:
            'R$500 à R$3000 - Abrace o poder da arte em grande escala com tatuagens que refletem sua personalidade e estilo de forma ousada e significativa.',
        preco: 600,
        qtdeSlots: 15,
        imagemURL: '/servicos/manicure-pedicure.jpg',
    },
    {
        id: 5,
        nome: 'Piercings',
        descricao:
            'R$30 à R$150 - Nossos piercings são como estrelas no céu noturno, projetados para iluminar e transformar seu visual com um toque galáctico, insira um piercing com a gente! ',
        preco: 50,
        qtdeSlots: 2,
        imagemURL: '/servicos/corte-infantil.jpg',
    },
    
]

export default servicos
