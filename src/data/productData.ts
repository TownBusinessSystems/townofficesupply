
import { Product } from "@/context/CartContext";

// Mock data for featured products
export const featuredInkProducts: Product[] = [
  {
    id: "ink-1",
    name: "HP 63XL Black Ink Cartridge",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/71umG0IYuLL._AC_SL1500_.jpg",
    brand: "HP",
    category: "ink",
    compatibility: ["HP Deskjet 1112", "HP Envy 4520", "HP OfficeJet 3830"],
    color: "Black",
    yield: "480"
  },
  {
    id: "ink-2",
    name: "Canon PG-245 Black Ink Cartridge",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/61tmihvQHdL._AC_SL1500_.jpg",
    brand: "Canon",
    category: "ink",
    compatibility: ["Canon PIXMA MG2420", "Canon PIXMA MG2520", "Canon PIXMA MG2920"],
    color: "Black",
    yield: "180"
  },
  {
    id: "ink-3",
    name: "Epson 702 Magenta Ink Cartridge",
    price: 21.99,
    image: "https://m.media-amazon.com/images/I/71zzjjqN9oL._AC_SL1500_.jpg",
    brand: "Epson",
    category: "ink",
    compatibility: ["Epson WorkForce Pro WF-3720", "Epson WorkForce Pro WF-3733"],
    color: "Magenta",
    yield: "300"
  },
  {
    id: "ink-4",
    name: "Brother LC3013 Cyan Ink Cartridge",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61AUWL+sIiL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "ink",
    compatibility: ["Brother MFC-J491DW", "Brother MFC-J497DW", "Brother MFC-J895DW"],
    color: "Cyan",
    yield: "400"
  }
];

export const featuredTonerProducts: Product[] = [
  {
    id: "toner-1",
    name: "HP 26A Black Toner Cartridge",
    price: 84.99,
    image: "https://m.media-amazon.com/images/I/71cvRNILxDL._AC_SL1500_.jpg",
    brand: "HP",
    category: "toner",
    compatibility: ["HP LaserJet Pro M402dn", "HP LaserJet Pro MFP M426fdw"],
    color: "Black",
    yield: "3,100"
  },
  {
    id: "toner-2",
    name: "Brother TN660 High Yield Toner",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/71C+-YsOkfL._AC_SL1500_.jpg",
    brand: "Brother",
    category: "toner",
    compatibility: ["Brother HL-L2340DW", "Brother HL-L2360DW", "Brother DCP-L2540DW"],
    color: "Black",
    yield: "2,600"
  },
  {
    id: "toner-3",
    name: "Canon 055 Cyan Toner Cartridge",
    price: 76.99,
    image: "https://m.media-amazon.com/images/I/51NUf28QpVL._AC_SL1000_.jpg",
    brand: "Canon",
    category: "toner",
    compatibility: ["Canon Color imageCLASS MF743Cdw", "Canon LBP664Cdw"],
    color: "Cyan",
    yield: "2,100"
  },
  {
    id: "toner-4",
    name: "Lexmark 51B1000 Return Program Toner Cartridge",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/61CQow3NTvL._AC_SL1500_.jpg",
    brand: "Lexmark",
    category: "toner",
    compatibility: ["Lexmark MS317dn", "Lexmark MS417dn", "Lexmark MS517dn"],
    color: "Black",
    yield: "2,500"
  }
];
