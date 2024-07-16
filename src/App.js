import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

const products = [
  { id: 1, name: "Iphone 15", category: "Electronics", price: 1000, image: "images/iphone15.jpg", description: "This is a very good phone", rating: 4.5 },
  { id: 2, name: "Google Pixel", category: "Electronics", price: 2000, image: "images/googlepixel.jpg", description: "This is a very good phone", rating: 4.5 },
  { id: 3, name: "Samsung Galaxy", category: "Electronics", price: 3000, image: "images/samsunggalaxy.jpg", description: "This is a very good phone", rating: 4.5 },
  { id: 4, name: "OnePlus", category: "Electronics", price: 4000, image: "images/oneplus.jpg", description: "This is a very good phone", rating: 4.5 },
  { id: 5, name: "MacBook Pro", category: "Electronics", price: 2500, image: "images/macbookpro.jpg", description: "This is a very good laptop", rating: 4.7 },
  { id: 6, name: "Dell XPS", category: "Electronics", price: 1800, image: "images/dellxps.jpg", description: "This is a very good laptop", rating: 4.6 },
  { id: 7, name: "HP Spectre", category: "Electronics", price: 2200, image: "images/hpspectre.jpg", description: "This is a very good laptop", rating: 4.5 },
  { id: 8, name: "Asus ROG", category: "Electronics", price: 2800, image: "images/asusrog.jpg", description: "This is a very good gaming laptop", rating: 4.8 },
  { id: 9, name: "Sony Bravia", category: "Electronics", price: 1500, image: "images/sonybravia.jpg", description: "This is a very good TV", rating: 4.7 },
  { id: 10, name: "LG OLED", category: "Electronics", price: 3000, image: "images/lgoled.jpg", description: "This is a very good TV", rating: 4.8 },

  { id: 11, name: "Nike Air Zoom", category: "Fashion", price: 150, image: "images/nikeairzoom.jpg", description: "This is a very comfortable shoe", rating: 4.6 },
  { id: 12, name: "Adidas Ultraboost", category: "Fashion", price: 180, image: "images/adidasultraboost.jpg", description: "This is a very comfortable shoe", rating: 4.5 },
  { id: 13, name: "Gucci Loafers", category: "Fashion", price: 800, image: "images/gucciloafers.jpg", description: "This is a very stylish shoe", rating: 4.7 },
  { id: 14, name: "Prada Sunglasses", category: "Fashion", price: 400, image: "images/pradasunglasses.jpg", description: "This is a very stylish accessory", rating: 4.6 },
  { id: 15, name: "Rolex Submariner", category: "Fashion", price: 10000, image: "images/rolexsubmariner.jpg", description: "This is a very luxurious watch", rating: 4.9 },
  { id: 16, name: "Chanel Handbag", category: "Fashion", price: 3000, image: "images/chanelhandbag.jpg", description: "This is a very stylish handbag", rating: 4.8 },
  { id: 17, name: "Zara Dress", category: "Fashion", price: 80, image: "images/zaradress.jpg", description: "This is a very trendy dress", rating: 4.5 },
  { id: 18, name: "H&M Jeans", category: "Fashion", price: 50, image: "images/hmjeans.jpg", description: "These are very comfortable jeans", rating: 4.4 },
  { id: 19, name: "Burberry Scarf", category: "Fashion", price: 300, image: "images/burberryscarf.jpg", description: "This is a very stylish scarf", rating: 4.6 },
  { id: 20, name: "Louis Vuitton Wallet", category: "Fashion", price: 600, image: "images/louisvuittonwallet.jpg", description: "This is a very luxurious wallet", rating: 4.7 },

  { id: 21, name: "Canon EOS R5", category: "Cameras", price: 3500, image: "images/canoneosr5.jpg", description: "This is a very powerful camera", rating: 4.9 },
  { id: 22, name: "Nikon D850", category: "Cameras", price: 2800, image: "images/nikond850.jpg", description: "This is a very versatile camera", rating: 4.8 },
  { id: 23, name: "Sony Alpha A7 III", category: "Cameras", price: 2000, image: "images/sonya7iii.jpg", description: "This is a very compact camera", rating: 4.7 },
  { id: 24, name: "Fujifilm X-T4", category: "Cameras", price: 1800, image: "images/fujifilmxt4.jpg", description: "This is a very lightweight camera", rating: 4.6 },
  { id: 25, name: "GoPro Hero 9", category: "Cameras", price: 400, image: "images/goprohero9.jpg", description: "This is a very durable action camera", rating: 4.5 },
  { id: 26, name: "DJI Mavic Air 2", category: "Cameras", price: 1200, image: "images/djimavicair2.jpg", description: "This is a very portable drone", rating: 4.7 },
  { id: 27, name: "Leica Q2", category: "Cameras", price: 5500, image: "images/leicaq2.jpg", description: "This is a very premium compact camera", rating: 4.9 },
  { id: 28, name: "Panasonic Lumix GH5", category: "Cameras", price: 2500, image: "images/panasonicgh5.jpg", description: "This is a very versatile mirrorless camera", rating: 4.8 },
  { id: 29, name: "Olympus OM-D E-M1 Mark III", category: "Cameras", price: 1800, image: "images/olympusem1markiii.jpg", description: "This is a very powerful mirrorless camera", rating: 4.7 },
  { id: 30, name: "Polaroid Originals OneStep+", category: "Cameras", price: 100, image: "images/polaroidonestep.jpg", description: "This is a very nostalgic instant camera", rating: 4.5 },

  { id: 31, name: "Apple AirPods Pro", category: "Accessories", price: 250, image: "images/airpodspro.jpg", description: "These are very high-quality earbuds", rating: 4.8 },
  { id: 32, name: "Bose Noise Cancelling Headphones 700", category: "Accessories", price: 400, image: "images/bose700.jpg", description: "These are very effective noise-cancelling headphones", rating: 4.7 },
  { id: 33, name: "Fitbit Versa 3", category: "Accessories", price: 200, image: "images/fitbitversa3.jpg", description: "This is a very advanced fitness tracker", rating: 4.6 },
  { id: 34, name: "Garmin Forerunner 945", category: "Accessories", price: 600, image: "images/garminforerunner945.jpg", description: "This is a very powerful GPS running watch", rating: 4.7 },
  { id: 35, name: "Razer DeathAdder V2 Gaming Mouse", category: "Accessories", price: 80, image: "images/razerdeathadder.jpg", description: "This is a very precise gaming mouse", rating: 4.6 },
  { id: 36, name: "Logitech MX Master 3", category: "Accessories", price: 100, image: "images/logitechmxmaster3.jpg", description: "This is a very ergonomic mouse", rating: 4.5 },
  { id: 37, name: "SteelSeries Apex Pro Mechanical Keyboard", category: "Accessories", price: 150, image: "images/steelseriesapexpro.jpg", description: "This is a very customizable gaming keyboard", rating: 4.6 }, 
  ];
  
const categories = [ "Electronics", "Fashion", "Cameras", "Accessories" ];



const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home categoriesData={categories}  productsData={products}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
