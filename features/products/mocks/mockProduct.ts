import type { ProductModel } from "../types/ProductType";

export const mockProducts: ProductModel[] = [
  {
    id: 1,
    name: "Orquídea Phalaenopsis",
    price: 59.90,
    description:
      "A orquídea Phalaenopsis é popular por sua beleza exótica e cultivo relativamente fácil, representando amor e admiração. Ela requer luz indireta brilhante, alta umidade e rega moderada, preferencialmente a cada 7-10 dias, evitando o acúmulo de água na base das folhas. O cuidado ideal envolve substrato apropriado para orquídeas, que proporciona boa aeração e drenagem, e a fertilização periódica com adubo específico durante o período de crescimento.",
    category_id: 1,
    stock: 10,
    createdAt: "2025-11-30T00:19:40.000Z",
    updatedAt: "2025-11-30T00:19:40.000Z",
    category: { name: "Orquídeas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1723721420945-d7f4b16e640b?q=80&w=327&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 3,
    name: "Orquídea Cattleya",
    price: 55.90,
    description:
      "Adicione um toque de realeza ao seu espaço com esta deslumbrante orquídea Cattleya! Conhecida como a 'rainha das orquídeas', ela simboliza beleza feminina, amor e pureza espiritual.",
    category_id: 1,
    stock: 11,
    createdAt: "2025-12-04T00:41:58.000Z",
    updatedAt: "2025-12-04T00:41:58.000Z",
    category: { name: "Orquídeas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1673913201428-28adf2d068e4?q=80&w=874&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 4,
    name: "Orquídea Oncidium (Chuva de Ouro)",
    price: 49.90,
    description:
      "Ilumine sua casa com a alegria da Chuva de Ouro. Suas centenas de pequenas flores amarelas criam um espetáculo visual vibrante.",
    category_id: 1,
    stock: 8,
    createdAt: "2025-12-04T01:42:04.000Z",
    updatedAt: "2025-12-04T01:42:04.000Z",
    category: { name: "Orquídeas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1638047439096-55a186f4c2f7?q=80&w=435&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 5,
    name: "Orquídea Vanda Suspensa",
    price: 149.90,
    description:
      "Uma obra-prima da natureza. A Vanda é conhecida por suas raízes aéreas e cores exóticas e vibrantes. Perfeita para varandas.",
    category_id: 1,
    stock: 5,
    createdAt: "2025-12-04T01:43:05.000Z",
    updatedAt: "2025-12-04T01:43:05.000Z",
    category: { name: "Orquídeas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1760015022176-7b84ec1772bb?q=80&w=870&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 6,
    name: "Samambaia Americana",
    price: 35.90,
    description:
      "Folhagem volumosa e verde intenso, perfeita para jardins verticais ou vasos suspensos.",
    category_id: 2,
    stock: 25,
    createdAt: "2025-12-04T01:45:00.000Z",
    updatedAt: "2025-12-04T01:45:00.000Z",
    category: { name: "Samambaias" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1574873688018-15dfc4921e02?q=80&w=870&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 7,
    name: "Echeveria Elegans (Rosa de Pedra)",
    price: 15.90,
    description:
      "Suculenta em formato de roseta, perfeita para arranjos e ambientes ensolarados.",
    category_id: 3,
    stock: 40,
    createdAt: "2025-12-04T01:45:29.000Z",
    updatedAt: "2025-12-04T01:45:29.000Z",
    category: { name: "Suculentas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1693688639952-06eb9fdedc68?q=80&w=1557&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 8,
    name: "Chifre-de-Veado",
    price: 75.00,
    description:
      "Folhas bifurcadas que lembram chifres de cervo. Ideal para placas decorativas.",
    category_id: 2,
    stock: 6,
    createdAt: "2025-12-04T01:45:59.000Z",
    updatedAt: "2025-12-04T01:45:59.000Z",
    category: { name: "Samambaias" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1667715318212-7dbf21da371f?q=80&w=870&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 9,
    name: "Asplênio Ninho de Passarinho",
    price: 45.50,
    description:
      "Folhas largas e brilhantes que crescem em roseta. Planta moderna e purificadora.",
    category_id: 2,
    stock: 14,
    createdAt: "2025-12-04T01:51:13.000Z",
    updatedAt: "2025-12-04T01:51:13.000Z",
    category: { name: "Samambaias" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1758351507720-899300766eb1?q=80&w=774&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 10,
    name: "Orquídea Cymbidium Rosa",
    price: 89.90,
    description:
      "Resistente ao frio e com flores duradouras em tons de rosa suave.",
    category_id: 1,
    stock: 7,
    createdAt: "2025-12-04T01:51:56.000Z",
    updatedAt: "2025-12-04T01:51:56.000Z",
    category: { name: "Orquídeas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1758635591755-f9e08cb4c34e?q=80&w=726&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 11,
    name: "Suculenta Colar de Pérolas",
    price: 32.90,
    description: "Pendente com folhas redondas que formam uma cascata natural.",
    category_id: 3,
    stock: 18,
    createdAt: "2025-12-04T01:53:39.000Z",
    updatedAt: "2025-12-04T01:53:39.000Z",
    category: { name: "Suculentas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1648070024741-43f8fa965966?q=80&w=870&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 12,
    name: "Aloe Vera (Babosa)",
    price: 25.00,
    description:
      "Planta ornamental e medicinal, resistente e de baixa manutenção.",
    category_id: 3,
    stock: 22,
    createdAt: "2025-12-04T01:54:17.000Z",
    updatedAt: "2025-12-04T01:54:17.000Z",
    category: { name: "Suculentas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1644585949224-cbe48d2cc2d6?q=80&w=387&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 13,
    name: "Haworthia Zebra",
    price: 19.90,
    description: "Folhas com listras brancas, perfeita para mesas e terrários.",
    category_id: 3,
    stock: 30,
    createdAt: "2025-12-04T01:54:45.000Z",
    updatedAt: "2025-12-04T01:54:45.000Z",
    category: { name: "Suculentas" },
    images: [
      {
        url: "https://images.unsplash.com/photo-1639627369574-28d7fde9fe68?q=80&w=774&auto=format&fit=crop",
      },
    ],
  },
];
