import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DVD",
    src : "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/DVD--logo.png?raw=true"
  },
  {
    _id: uuid(),
    categoryName: "Blu-ray",
    src : "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/blu-ray--logo.png?raw=true"
  },
  {
    _id: uuid(),
    categoryName: "VCD",
    src : "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/vcd--logo.png?raw=true"
  },
];
