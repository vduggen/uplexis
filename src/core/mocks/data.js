const description = [
  "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
];

const value = 29.99;

const types = [
  { name: "Todos", icon: "mdi-web" },
  { name: "Profissional", icon: "mdi-briefcase" },
  { name: "Reguladores", icon: "mdi-bank" },
  { name: "Sócio Ambiental", icon: "mdi-pine-tree" },
  { name: "Júridico", icon: "mdi-gavel" },
  { name: "Listas Restritivas", icon: "mdi-cancel" },
  { name: "Mídia / Internet", icon: "mdi-search-web" },
  { name: "Bens e Imóveis", icon: "mdi-diamond-stone" },
  { name: "Cadastro", icon: "mdi-human-male" },
  { name: "Financeiro", icon: "mdi-finance" },
];

const banner = [
  {
    id: 13,
    name: "Histórico Empresarial",
    description: [
      "O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento de capital, reportagens e muito mais.",
      "Após realizar a consulta o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF",
    ],
    value: 40,
    banner: true,
  },
];

const cards = [
  {
    id: 1,
    ...types[1],
    description: "",
    value,
  },
  {
    id: 2,
    ...types[2],
    description,
    value: 40.0,
  },
  {
    id: 3,
    ...types[3],
    description,
    value,
  },
  {
    id: 4,
    ...types[4],
    description,
    value,
  },
  {
    id: 5,
    ...types[5],
    description,
    value: 34.5,
  },
  {
    id: 6,
    ...types[6],
    description,
    value,
  },
  {
    id: 7,
    ...types[7],
    description,
    value,
  },
  {
    id: 8,
    ...types[8],
    description,
    value,
  },
  {
    id: 9,
    ...types[9],
    description,
    value,
  },
  {
    id: 10,
    ...types[9],
    description,
    value,
  },
  {
    id: 11,
    ...types[3],
    description,
    value,
  },
  {
    id: 12,
    ...types[4],
    description,
    value: 60,
  },
];

export { types, cards, banner };
