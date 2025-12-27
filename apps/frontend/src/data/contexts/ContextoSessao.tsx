'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Usuario } from '@barba/core'
import cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode';

interface ContextoSessaoProps {
    carregando: boolean
    token: string | null
    usuario: Usuario | null
    criarSessao: (jwt: string) => void
    limparSessao: () => void
}

const ContextoSessao = createContext<ContextoSessaoProps>({} as any)

export function ProvedorSessao(props: any) {
    const nomeCookie = 'barba-authorization'

    const [carregando, setCarregando] = useState(true)
    const [token, setToken] = useState<string | null>(null)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    const carregarSessao = useCallback(function () {
        try {
            setCarregando(true)

            // Tenta carregar o token do LocalStorage primeiro
            const tokenLocal = localStorage.getItem('token')

            if (tokenLocal) {
                setToken(tokenLocal)
                // Decodifica o token e define o usuário
                const usuarioDecodificado = jwtDecode<Usuario>(tokenLocal)  // Decodifica o JWT
                setUsuario(usuarioDecodificado)  // Atualiza o estado do usuário
            } else {
                // Tenta carregar o token dos cookies se não houver no LocalStorage
                const jwt = cookie.get(nomeCookie)
                if (jwt) {
                    setToken(jwt)
                    // Decodifica o token e define o usuário
                    const usuarioDecodificado = jwtDecode<Usuario>(jwt)  // Decodifica o JWT
                    setUsuario(usuarioDecodificado)  // Atualiza o estado do usuário
                }
            }
        } finally {
            setCarregando(false)
        }
    }, [])

    useEffect(() => {
        carregarSessao()
    }, [carregarSessao])

    function criarSessao(jwt: string) {
    console.log('Criando sessão com JWT:', jwt);  // Log para verificar o JWT recebido
    localStorage.setItem('token', jwt); // Armazena o token no localStorage
    setToken(jwt); // Atualiza o token no estado

    // Decodifica o token JWT e define o usuário no estado
    try {
        const usuarioDecodificado = jwtDecode<Usuario>(jwt);  // Decodifica o JWT
        console.log('Usuário decodificado:', usuarioDecodificado);  // Verifique a estrutura do JWT decodificado
        setUsuario(usuarioDecodificado);  // Atualiza o estado do usuário
    } catch (error) {
        console.error('Erro ao decodificar JWT:', error);
    }
}

    function limparSessao() {
        setToken(null)
        setUsuario(null)
        localStorage.removeItem('token')
        cookie.remove(nomeCookie)
    }

    return (
        <ContextoSessao.Provider
            value={{
                carregando,
                token,
                usuario,
                criarSessao,
                limparSessao,
            }}
        >
            {props.children}
        </ContextoSessao.Provider>
    )
}

export default ContextoSessao
