import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react' // Mantém os ícones do Instagram e WhatsApp
import Logo from './Logo'

export default function Rodape() {
    return (
        <footer className="flex items-center bg-black">
            <div className="container flex flex-col gap-7 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
                    <Logo />
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Sobre</span>
                        <a href="/politica-de-privacidade" className="text-sm text-zinc-400 hover:underline">
                         Polí­tica de Privacidade
                        </a>
                    </div>
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Contato</span>
                        <span className="text-sm text-zinc-400">agenciakyng@gmail.com</span>
                        <a href="https://wa.me/556492007085" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400">
                            <IconBrandWhatsapp size={20} className="text-green-500" /> {/* Ícone do WhatsApp */}
                            <span>Whatsapp</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex gap-2 text-zinc-400">
                        {/* Ícone do Instagram com o link */}
                        <a href="https://www.instagram.com/marciano.tattoo" target="_blank" rel="noopener noreferrer">
                            <IconBrandInstagram size={28} stroke={1} />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-zinc-400 text-sm">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>🪓</span>
                            <a href="https://wa.me/5564981279518" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                por Silva_dev
                            </a>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
