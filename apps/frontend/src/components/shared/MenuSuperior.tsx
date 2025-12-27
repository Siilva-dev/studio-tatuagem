'use client'

import Link from 'next/link'
import Logo from './Logo'
import MenuUsuario from './MenuUsuario'
import useUsuario from '@/data/hooks/useUsuario'

export default function MenuSuperior() {
    const { usuario } = useUsuario()

    return (
        <header className="self-stretch flex justify-center items-center h-24 bg-black/60">
            <nav className="flex items-center justify-between container">
                <Logo />
            </nav>
        </header>
    )
}
