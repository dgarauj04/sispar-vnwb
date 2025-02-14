// api.js
let reembolsos = [
  {
    id: 1,
    colaborador: "Vitor Carvalho",
    empresa: "WSS001",
    prestacaoContas: "329456",
    data: "08/01/2025",
    motivo: "Desp. de viagem a...",
    tipoReembolso: "Viagem operacional",
    controleCusto: "1100110002 - FIN...",
    ordInt: "0003",
    div: "002",
    pep: "001",
    moeda: "BRL",
    distKm: "434Km",
    valorKm: "0.65",
    valorFaturado: "242.10",
    despesa: "40.05",
  },
  {
    id: 2,
    colaborador: "Vanessa Port",
    empresa: "WSS002",
    prestacaoContas: "987789",
    data: "01/01/2025",
    motivo: "Desp. de viagem a...",
    tipoReembolso: "Viagem admin.",
    controleCusto: "1100110102 - FIN C...",
    ordInt: "0002",
    div: "005",
    pep: "001",
    moeda: "ARS",
    distKm: "289Km",
    valorKm: "0.37",
    valorFaturado: "106.93",
    despesa: "0.00",
  },
  {
    id: 3,
    colaborador: "Washington Kl",
    empresa: "WSS003",
    prestacaoContas: "546791",
    data: "03/01/2025",
    motivo: "Eventos de aprese...",
    tipoReembolso: "Eventos de representação",
    controleCusto: "1100109002 - FIN...",
    ordInt: "0001",
    div: "005",
    pep: "001",
    moeda: "USD",
    distKm: "197Km",
    valorKm: "0.75",
    valorFaturado: "109.75",
    despesa: "29.97",
  },
];


export function getReembolsos() {
  return reembolsos;
}

export function addReembolso(novoReembolso) {
  reembolsos.push(novoReembolso);
}

export function removeReembolso(id) {
  reembolsos = reembolsos.filter((item) => item.id !== id);
}
