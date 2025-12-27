"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AgendaUtils: () => AgendaUtils,
  DataUtils: () => DataUtils,
  LoginUsuario: () => LoginUsuario,
  ObterHorariosOcupados: () => ObterHorariosOcupados,
  RegistrarUsuario: () => RegistrarUsuario,
  TEMPO_SLOT: () => TEMPO_SLOT,
  TelefoneUtils: () => TelefoneUtils,
  clientes: () => clientes_default,
  profissionais: () => profissionais_default,
  servicos: () => servicos_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/clientes.ts
var clientes = [
  {
    id: 1,
    imagemURL: "/clientes/cliente-1.jpg",
    nome: "O Guerreiro Estelar",
    testemunho: 'Uma tatuagem que capta a ess\xEAncia de um guerreiro intergal\xE1ctico, com detalhes que brilham como estrelas distantes. Nossos clientes dizem: "Essa arte me conecta com o universo, um verdadeiro s\xEDmbolo de for\xE7a e determina\xE7\xE3o estelar."'
  },
  {
    id: 2,
    imagemURL: "/clientes/cliente-2.jpg",
    nome: "O brabox",
    testemunho: 'Uma tatuagem que une a paix\xE3o pelo esporte com a vastid\xE3o do cosmos, capturando o momento de um gol \xE9pico entre estrelas. Quem a escolhe afirma: "\xC9 como marcar um gol nas estrelas, cada detalhe dessa tatuagem \xE9 pura energia c\xF3smica!"'
  },
  {
    id: 3,
    imagemURL: "/clientes/cliente-3.jpg",
    nome: "Nebulosa de Paix\xE3o",
    testemunho: 'Uma tatuagem com tons vermelhos vibrantes que lembram as cores intensas de uma nebulosa distante, cheia de mist\xE9rio e beleza. Clientes apaixonados por arte espacial dizem: "Essa tatuagem \xE9 como carregar um peda\xE7o do universo em mim, \xE9 simplesmente fora deste mundo."'
  },
  {
    id: 4,
    imagemURL: "/clientes/cliente-4.jpg",
    nome: "O S\xE1bio Cosmonauta",
    testemunho: 'Uma tatuagem que simboliza a sabedoria e a explora\xE7\xE3o do espa\xE7o, com detalhes que evocam a vastid\xE3o do cosmos. Nossos clientes mais experientes comentam: "Essa arte me lembra as grandes aventuras do universo, com um estilo que transcende o tempo e o espa\xE7o."'
  }
];
var clientes_default = clientes;

// src/constants/profissionais.ts
var profissionais = [
  {
    id: 1,
    nome: "Marciano",
    descricao: "Ol\xE1, viajantes do universo! Marciano,  Tatuador que pode transformar sua ideia em arte, leva suas tatuagens a novas gal\xE1xias com designs que brilham e encantam.",
    imagemUrl: "/profissionais/profissional-1.jpg",
    avaliacao: 4.5,
    quantidadeAvaliacoes: 87
  }
];
var profissionais_default = profissionais;

// src/constants/servicos.ts
var servicos = [
  {
    id: 1,
    nome: "Tatuagem pequena",
    descricao: "R$50 \xE0 R$150 - Tatuagens pequenas que capturam a ess\xEAncia da arte em um formato compacto e elegante.",
    preco: 60,
    qtdeSlots: 4,
    imagemURL: "/servicos/corte-de-cabelo.jpg"
  },
  {
    id: 2,
    nome: "Tatuagem m\xE9dia",
    descricao: "R$200 \xE0 R$400 - Encontre a tatuagem m\xE9dia ideal para voc\xEA, com designs que traduzem emo\xE7\xF5es e hist\xF3rias em um tamanho ideal.",
    preco: 250,
    qtdeSlots: 12,
    imagemURL: "/servicos/corte-de-barba.jpg"
  },
  {
    id: 3,
    nome: "Tatuagem grande",
    descricao: "R$500 \xE0 R$3000 - Abrace o poder da arte em grande escala com tatuagens que refletem sua personalidade e estilo de forma ousada e significativa.",
    preco: 600,
    qtdeSlots: 15,
    imagemURL: "/servicos/manicure-pedicure.jpg"
  },
  {
    id: 5,
    nome: "Piercings",
    descricao: "R$30 \xE0 R$150 - Nossos piercings s\xE3o como estrelas no c\xE9u noturno, projetados para iluminar e transformar seu visual com um toque gal\xE1ctico, insira um piercing com a gente! ",
    preco: 50,
    qtdeSlots: 2,
    imagemURL: "/servicos/corte-infantil.jpg"
  }
];
var servicos_default = servicos;

// src/constants/index.ts
var TEMPO_SLOT = 15;

// src/agendamento/ObterHorariosOcupados.ts
var ObterHorariosOcupados = class {
  constructor(repo) {
    this.repo = repo;
  }
  async executar(profissionalId, data) {
    const agendamentos = await this.repo.buscarPorProfissionalEData(profissionalId, data);
    const dados = agendamentos.map((agendamento) => {
      return {
        data: agendamento.data,
        slots: agendamento.servicos.reduce((total, s) => total + s.qtdeSlots, 0)
      };
    }).reduce((horariosOcupados, dados2) => {
      const horario = dados2.data;
      const slots = dados2.slots;
      const horarios = Array.from(
        { length: slots },
        (_, i) => this.somarMinutos(horario, i * TEMPO_SLOT)
      );
      return [...horariosOcupados, ...horarios];
    }, []).map((d) => d.toTimeString().slice(0, 5));
    return dados;
  }
  somarMinutos(data, minutos) {
    return new Date(data.getTime() + minutos * 6e4);
  }
};

// src/usuario/LoginUsuario.ts
var LoginUsuario = class {
  constructor(repo, cripto) {
    this.repo = repo;
    this.cripto = cripto;
  }
  async executar(email, senha) {
    const usuario = await this.repo.buscarPorEmail(email);
    if (!usuario) throw new Error("Usu\xE1rio n\xE3o encontrado");
    const senhaCorreta = await this.cripto.comparar(senha, usuario.senha);
    if (!senhaCorreta) throw new Error("Senha incorreta");
    delete usuario.senha;
    return usuario;
  }
};

// src/usuario/RegistrarUsuario.ts
var RegistrarUsuario = class {
  constructor(repo, cripto) {
    this.repo = repo;
    this.cripto = cripto;
  }
  async executar(usuario) {
    const usuarioExistente = await this.repo.buscarPorEmail(usuario.email);
    if (usuarioExistente) throw new Error("Usu\xE1rio j\xE1 existe");
    const senhaCriptografada = await this.cripto.criptografar(usuario.senha);
    const novoUsuario = { ...usuario, senha: senhaCriptografada, barbeiro: false };
    await this.repo.salvar(novoUsuario);
  }
};

// src/utils/AgendaUtils.ts
var AgendaUtils = class {
  static horariosDoDia() {
    return {
      manha: this.gerarHorarios([8, 9, 10, 11]),
      tarde: this.gerarHorarios([14, 15, 16, 17]),
      noite: this.gerarHorarios([18, 19, 20, 21])
    };
  }
  static duracaoTotal(servicos2) {
    const duracao = servicos2.reduce((acc, atual) => {
      return acc += atual.qtdeSlots * 15;
    }, 0);
    return `${Math.trunc(duracao / 60)}h ${duracao % 60}m`;
  }
  static gerarHorarios(horas) {
    return horas.reduce((horarios, hora) => {
      const todos = this.minutos.map((minuto) => {
        return `${String(hora).padStart(2, "0")}:${String(minuto).padStart(2, "0")}`;
      });
      return horarios.concat(todos);
    }, []);
  }
};
AgendaUtils.minutos = [0, 15, 30, 45];

// src/utils/DataUtils.ts
var DataUtils = class {
  static hoje() {
    const hoje = /* @__PURE__ */ new Date();
    hoje.setHours(0, 0, 0, 0);
    return hoje;
  }
  // new Date(), '09:45'
  static aplicarHorario(data, horario) {
    const novaData = new Date(data);
    const partes = horario.split(":");
    novaData.setHours(parseInt(partes[0]), parseInt(partes[1]));
    return novaData;
  }
  static formatarData(data) {
    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  static formatarDataEHora(data) {
    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    });
  }
};

// src/utils/TelefoneUtils.ts
var TelefoneUtils = class {
  static formatar(telefone) {
    if (!telefone) return "";
    const numeros = this.desformatar(telefone);
    return numeros.length <= 10 ? this.substituirNumeros(numeros, "(xx) xxxx-xxxx") : this.substituirNumeros(numeros, "(xx) xxxxx-xxxx");
  }
  static desformatar(telefone) {
    if (!telefone) return "";
    return telefone.replace(/\D/g, "").slice(0, 11);
  }
  static substituirNumeros(telefone, ref) {
    let formatado = telefone.split("").reduce((telefone2, numero) => {
      return telefone2.replace("x", numero);
    }, ref).replace(/x/g, "");
    if (telefone.length <= 2) formatado = formatado.replace(")", "").replace(" ", "");
    if (telefone.length <= 6) formatado = formatado.replace("-", "");
    return formatado;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgendaUtils,
  DataUtils,
  LoginUsuario,
  ObterHorariosOcupados,
  RegistrarUsuario,
  TEMPO_SLOT,
  TelefoneUtils,
  clientes,
  profissionais,
  servicos
});
