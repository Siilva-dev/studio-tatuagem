import { useCallback } from 'react';
import useSessao from './useSessao';

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE;

export default function useAPI() {
    const { token, criarSessao } = useSessao();  // Adicionamos criarSessao aqui

    const httpGet = useCallback(
        async function (uri: string): Promise<any> {
            const path = uri.startsWith('/') ? uri : `/${uri}`;
            const resp = await fetch(`${URL_BASE}${path}`, {
                headers: {
                    Authorization: `Bearer ${token}`,  // Continua usando o token do useSessao
                },
            });
            return extrairDados(resp);
        },
        [token]
    );

    const httpPost = useCallback(
        async function (uri: string, body: any): Promise<any> {
            const path = uri.startsWith('/') ? uri : `/${uri}`;
            const resp = await fetch(`${URL_BASE}${path}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,  // Continua usando o token do useSessao
                },
                body: JSON.stringify(body),
            });

            // Log completo da resposta para depuração
            const responseBody = await resp.text(); // Captura o corpo como texto
            console.log('Resposta completa do backend:', resp);
            console.log('Corpo da resposta do backend:', responseBody);

            // Se a requisição for de login e for bem-sucedida, armazenar o token no localStorage
            if (uri.includes('/login') && (resp.status === 200 || resp.status === 201)) {
                if (responseBody) {
                    localStorage.setItem('token', responseBody);  // Armazena o token diretamente no localStorage
                    criarSessao(responseBody);  // Atualiza a sessão também com o token
                    console.log('Token armazenado no localStorage:', responseBody);
                } else {
                    console.error('Token não foi retornado pelo backend');
                }
            } else if (!resp.ok) {
                console.error('Falha no login, status:', resp.status);
            }

            return extrairDados(resp);  // Usa a função para extrair os dados
        },
        [token, criarSessao]
    );

    const httpDelete = useCallback(
        async function (uri: string): Promise<any> {
            const path = uri.startsWith('/') ? uri : `/${uri}`;
            const resp = await fetch(`${URL_BASE}${path}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,  // Continua usando o token do useSessao
                },
            });
            return extrairDados(resp);
        },
        [token]
    );

    async function extrairDados(resp: Response) {
        let conteudo = '';
        try {
            conteudo = await resp.text();
            return JSON.parse(conteudo);
        } catch (e) {
            return conteudo;
        }
    }

    return { httpGet, httpPost, httpDelete };
}
