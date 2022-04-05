import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
        _id: uuid(),
        title: "Tenet",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image1.jpg?raw=true",
        director: "Christopher Nolan",
        price: 1000,
        discount: 25,
        category: "Blu-ray",
        rating: 3.8,
        description: "Denzel Washington, Robert Pattinson, Dimple Kapadia, Elizabrth Debicki, Kenneth Branagh"
    },
    {
        _id: uuid(),
        title: "Dune : Part 1",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image4.jpg?raw=true",
        director: "Denis Villenuve",
        price: 2500,
        discount: 50,
        category: "Blu-ray",
        rating: 3.9,
        description: " Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, David Dastmalchian, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, Jason Momoa, and Javier Bardem."
    },
    {
        _id: uuid(),
        title: "Aquaman",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image2.jpg?raw=true",
        director: "James Wan",
        price: 500,
        discount: 20,
        category: "Blu-ray",
        rating: 3.5,
        description: "Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, and Nicole Kidman"
    },
    {
        _id: uuid(),
        title: "X-Men : First Class",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/DVD/DVD-image1.jpg?raw=true",
        director: "	Matthew Vaughn",
        price: 250,
        discount: 0,
        category: "DVD",
        rating: 2.5,
        description: "James McAvoy, Michael Fassbender, Rose Byrne, Jennifer Lawrence, January Jones, Oliver Platt, and Kevin Bacon"
    },
    {
        _id: uuid(),
        title: "X-Men : First Class",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/DVD/DVD-image1.jpg?raw=true",
        director: "	Matthew Vaughn",
        price: 250,
        discount: 0,
        category: "DVD",
        rating: 2.5,
        description: "James McAvoy, Michael Fassbender, Rose Byrne, Jennifer Lawrence, January Jones, Oliver Platt, and Kevin Bacon"
    },
    {
        _id: uuid(),
        title: "Breaking Bad",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/DVD/DVD-image1.jpg?raw=true",
        director: "	Vince Giligan",
        price: 4000,
        discount: 10,
        category: "Blu-ray",
        rating: 4.8,
        description: "Bryan Cranston,Anna Gunn, Dean Norris, Betsy Brandt, RJ Mitte, Giancarlo Esposito, Bob Odenkirk, Jonathan Banks, Laura Fraser, Jesse Plemons"
    },
    {
        _id: uuid(),
        title: "Venom : Let there be Carnage",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image3.jpg?raw=true",
        director: "	Andy Serkis",
        price: 1600,
        discount: 50,
        category: "Blu-ray",
        rating: 2.3,
        description: "Tom Hardy, Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, Woody Harrelson."
    },
    {
        _id: uuid(),
        title: "Venom : Let there be Carnage",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image3.jpg?raw=true",
        director: "Andy Serkis",
        price: 1600,
        discount: 50,
        category: "Blu-ray",
        rating: 2.3,
        description: "Tom Hardy, Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, Woody Harrelson."
    },
    {
        _id: uuid(),
        title: "True Detective",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/series/series-bluray1.jpg",
        director: "Nic Pizzolatto",
        price: 4000,
        discount: 25,
        category: "Blu-ray",
        rating: 4.2,
        description: " Matthew McConaughey, Woody Harrelson, Michelle Monaghan, Michael Potts, and Tory Kittles,"
    },
    {
        _id: uuid(),
        title: "Hobbit Triology",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image5.jpg?raw=true",
        director: "Peter Jackson",
        price: 3000,
        discount: 10,
        category: "Blu-ray",
        rating: 3.2,
        description: "Martin Freeman, Ian McKellen, Richard Armitage, Benedict Cumberbatch, Evangeline Lilly, Lee Pace, Luke Evans"
    },
    {
        _id: uuid(),
        title: "IT",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/DVD/DVD-image6.jpg?raw=true",
        director: "Andy Muschietti",
        price: 1000,
        discount: 75,
        category: "DVD",
        rating: 3.2,
        description: "Jaeden Lieberher,Bill Skarsgård, Jeremy Ray Taylor, Sophia Lillis, Finn Wolfhard, Wyatt Oleff, Chosen Jacobs, Jack Dylan Grazer, Nicholas Hamilton, Jackson Robert Scott"
    },
    {
        _id: uuid(),
        title: "M.S. Dhoni : The untold story",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image7.jpg?raw=true",
        director: "Neeraj Pandey",
        price: 800,
        discount: 60,
        category: "Blu-ray",
        rating: 4,
        description: "Sushant Singh Rajput, Kiara Advani, Disha Patani, Anupam Kher"
    },
    {
        _id: uuid(),
        title: "Jab We Met",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image8.jpg?raw=true",
        director: "Imtiaz Ali",
        price: 500,
        discount: 10,
        category: "Blu-ray",
        rating: 3.75,
        description: "Kareena Kapoor, Shahid Kapoor, Dara Singh, Pavan Malhotra, Saumya Tandon "
    },
    {
        _id: uuid(),
        title: "Django Unchained",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image9.jpg?raw=true",
        director: "Quentin Tarantino",
        price: 500,
        discount: 10,
        category: "Blu-ray",
        rating: 4.3,
        description: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L. Jackson, with Walton Goggins, Dennis Christopher, James Remar, Michael Parks, Don Johnson"
    },
    {
        _id: uuid(),
        title: "1917",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image10.jpg?raw=true",
        director: "Sam Mendes",
        price: 2000,
        discount: 75,
        category: "Blu-ray",
        rating: 3.9,
        description: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L. Jackson, with Walton Goggins, Dennis Christopher, James Remar, Michael Parks, Don Johnson"
    },
    {
        _id: uuid(),
        title: "1917",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Bluray/bluray-image10.jpg?raw=true",
        director: "Sam Mendes",
        price: 2000,
        discount: 75,
        category: "Blu-ray",
        rating: 3.9,
        description: "George MacKay, Mark Strong, Andrew Scott, Richard Madden, Claire Duburcq, Colin Firth, Benedict Cumberbatch"
    },
    {
        _id: uuid(),
        title: "Chanakya",
        image: "https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/VCD/VCD-image3.jpg?raw=true",
        director: "	Chandraprakash Dwivedi",
        price: 1000,
        discount: 90,
        category: "VCD",
        rating: 3.25,
        description: "Chandraprakash Dwivedi, Irrfan Khan, Sanjay Mishra, Dinesh Shakul, Suraj Chaddha, Surendra Pal, Prakash Dwivedi, Kurush Deboo, JD Majethia"
    }
];