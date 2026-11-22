import risol from "./assets/risol.jpg";
import pastel from "./assets/pastel.jpg";
import klepon from "./assets/klepon.jpg";
import lemper from "./assets/lemper.jpg";
import onde from "./assets/onde.jpg";
import dadar from "./assets/dadar.jpg";
import tahu from "./assets/tahu.jpg";
import lumpur from "./assets/lumpur.jpg";

export type Category = "Gorengan" | "Kue Basah";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  desc: string;
  img: string;
  tag?: string;
  rating: number;
  sold: string;
}

export const products: Product[] = [
  {
    id: "risol",
    name: "Risol Ragout",
    category: "Gorengan",
    price: 3500,
    unit: "pcs",
    desc: "Kulit tipis renyah berlapis panir, isi ragout ayam & sayur yang creamy.",
    img: risol,
    tag: "Terlaris",
    rating: 4.9,
    sold: "2,4rb",
  },
  {
    id: "pastel",
    name: "Pastel Goreng",
    category: "Gorengan",
    price: 3000,
    unit: "pcs",
    desc: "Kulit berlepuh gurih, isi bihun, wortel, dan telur dengan bumbu rumahan.",
    img: pastel,
    rating: 4.8,
    sold: "1,8rb",
  },
  {
    id: "tahu",
    name: "Tahu Isi",
    category: "Gorengan",
    price: 2500,
    unit: "pcs",
    desc: "Tahu goreng garing diisi sayuran berbumbu, paling pas dengan cabe rawit.",
    img: tahu,
    rating: 4.7,
    sold: "1,2rb",
  },
  {
    id: "onde",
    name: "Onde-onde",
    category: "Gorengan",
    price: 2500,
    unit: "pcs",
    desc: "Bola ketan berbalut wijen, kriuk di luar, isi kacang hijau manis lembut.",
    img: onde,
    tag: "Baru",
    rating: 4.8,
    sold: "980",
  },
  {
    id: "klepon",
    name: "Klepon Pandan",
    category: "Kue Basah",
    price: 2000,
    unit: "pcs",
    desc: "Ketan kenyal beraroma pandan, meletus manis gula merah, berbalut kelapa parut.",
    img: klepon,
    tag: "Favorit",
    rating: 4.9,
    sold: "2,1rb",
  },
  {
    id: "dadar",
    name: "Dadar Gulung",
    category: "Kue Basah",
    price: 3000,
    unit: "pcs",
    desc: "Kulit pandan lembut digulung dengan unti kelapa manis gurih.",
    img: dadar,
    rating: 4.8,
    sold: "1,5rb",
  },
  {
    id: "lumpur",
    name: "Kue Lumpur",
    category: "Kue Basah",
    price: 3000,
    unit: "pcs",
    desc: "Kue panggang selembut puding dengan kentang & santan, topping kismis.",
    img: lumpur,
    rating: 4.7,
    sold: "870",
  },
  {
    id: "lemper",
    name: "Lemper Ayam",
    category: "Kue Basah",
    price: 4000,
    unit: "pcs",
    desc: "Ketan gurih santan berisi abon ayam bumbu, dibungkus daun pisang.",
    img: lemper,
    rating: 4.9,
    sold: "1,6rb",
  },
];

export const categories: ("Semua" | Category)[] = ["Semua", "Gorengan", "Kue Basah"];

export const rupiah = (n: number) =>
  "Rp" + n.toLocaleString("id-ID", { maximumFractionDigits: 0 });

export const WA_NUMBER = "6281234567890";
export const FREE_SHIPPING_MIN = 50000;
export const SHIPPING_FEE = 7000;
