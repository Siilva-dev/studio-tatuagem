interface Profissional {
    id: number;
    nome: string;
    descricao: string;
    imagemUrl: string;
    avaliacao: number;
    quantidadeAvaliacoes: number;
}

interface Servico {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    qtdeSlots: number;
    imagemURL: string;
}

interface Usuario {
    id?: number;
    nome: string;
    email: string;
    senha?: string;
    telefone?: string;
    barbeiro?: boolean;
}

interface RepositorioUsuario {
    salvar(usuario: Usuario): Promise<void>;
    buscarPorEmail(email: string): Promise<Usuario>;
}

interface ProvedorCriptografia {
    criptografar(senha: string): Promise<string>;
    comparar(senha: string, senhaCriptografada: string): Promise<boolean>;
}

declare class LoginUsuario {
    private readonly repo;
    private readonly cripto;
    constructor(repo: RepositorioUsuario, cripto: ProvedorCriptografia);
    executar(email: string, senha: string): Promise<Usuario | null>;
}

declare class RegistrarUsuario {
    private readonly repo;
    private readonly cripto;
    constructor(repo: RepositorioUsuario, cripto: ProvedorCriptografia);
    executar(usuario: Usuario): Promise<void>;
}

interface Agendamento {
    id: number;
    data: Date;
    usuario: Usuario;
    profissional: Profissional;
    servicos: Servico[];
}

interface RepositorioAgendamento {
    criar(agendamento: Agendamento): Promise<void>;
    buscarPorEmail(email: string): Promise<Agendamento[]>;
    buscarPorProfissionalEData(profissional: number, data: Date): Promise<Agendamento[]>;
    excluir(id: number): Promise<void>;
}

declare class ObterHorariosOcupados {
    private readonly repo;
    constructor(repo: RepositorioAgendamento);
    executar(profissionalId: number, data: Date): Promise<string[]>;
    private somarMinutos;
}

declare const clientes: {
    id: number;
    imagemURL: string;
    nome: string;
    testemunho: string;
}[];

declare const profissionais: Profissional[];

declare const servicos: Servico[];

declare const TEMPO_SLOT = 15;

declare class AgendaUtils {
    private static minutos;
    static horariosDoDia(): {
        manha: string[];
        tarde: string[];
        noite: string[];
    };
    static duracaoTotal(servicos: {
        qtdeSlots: number;
    }[]): string;
    private static gerarHorarios;
}

declare class DataUtils {
    static hoje(): Date;
    static aplicarHorario(data: Date, horario: string): Date;
    static formatarData(data: Date): string;
    static formatarDataEHora(data: Date): string;
}

declare class TelefoneUtils {
    static formatar(telefone: string): string;
    static desformatar(telefone: string): string;
    private static substituirNumeros;
}

export { AgendaUtils, type Agendamento, DataUtils, LoginUsuario, ObterHorariosOcupados, type Profissional, type ProvedorCriptografia, RegistrarUsuario, type RepositorioAgendamento, type RepositorioUsuario, type Servico, TEMPO_SLOT, TelefoneUtils, type Usuario, clientes, profissionais, servicos };
