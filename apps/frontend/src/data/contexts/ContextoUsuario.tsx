'use client'
import { useRouter } from 'next/navigation'
import { createContext } from 'react'
import { Usuario } from '@barba/core'
import useSessao from '../hooks/useSessao'
import useAPI from '../hooks/useAPI'

export interface ContextoUsuarioProps {
    carregando: boolean
    usuario: Usuario | null
    entrar: (usuario: Partial<Usuario>) => Promise<void>
    registrar: (usuario: Usuario) => Promise<void>
    sair: () => void
}

const ContextoUsuario = createContext<ContextoUsuarioProps>({} as any)

export function ProvedorUsuario({ children }: any) {
    const { httpPost } = useAPI()
    const { carregando, usuario, criarSessao, limparSessao } = useSessao()
    const router = useRouter()

    async function entrar(usuario: Partial<Usuario>) {
    const token = await httpPost('/usuario/login', usuario); // Pega o token diretamente, sem acessar data.token
    if (token) {
        criarSessao(token);  // Armazena o token corretamente no cookie
    } else {
        console.error('Token não foi retornado pelo backend');
    }
}
    async function registrar(usuario: Usuario) {
        await httpPost('/usuario/registrar', usuario)
    }

    function sair() {
        limparSessao()
        router.push('/')
    }

    return (
        <ContextoUsuario.Provider
            value={{
                carregando,
                usuario,
                entrar,
                registrar,
                sair,
            }}
        >
            {children}
        </ContextoUsuario.Provider>
    )
}

export default ContextoUsuario
