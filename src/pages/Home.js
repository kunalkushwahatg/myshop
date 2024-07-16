import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBox from '../components/SearchBox';
import ProductDialog from '../components/ProductDialog';
import Button from '@mui/material/Button';


const Home = ({ productsData, categoriesData }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);




  //initial run get products data and categoriesData  from app.js and useeffect only once on starting
  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
    setCategories(categoriesData);
  }, [productsData, categoriesData]);


//searchterm gets updated on typing filter products is set.
  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);


//if product category is equal to category then filtered products is updated 
  const handleCategorySelect = (category) => {
    const results = products.filter((product) => product.category === category);
    setFilteredProducts(results);
  };




  //for dialog box 

  const handleClickOpen = (product) => {
    setOpen(true);
    setSelectedProduct(product);

  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="flex flex-col">
      <div className="p-4 flex flex-row">
        <div className="w-4/6 pr-8 l">
          <CategoryFilter categories={categories} onSelectCategory={handleCategorySelect} />
        </div>
        <div className="w-1/4">
          <SearchBox onSearch={setSearchTerm} />
        </div>
        <div className="text-right pl-4 sm:pl-2">
        <Button>
                  cart
        </Button>
        </div>
      </div>
      <div className="flex flex-wrap pl-4 sm:justify-around  pr-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleClickOpen={ () => {handleClickOpen(product)}} />
        ))} 

      </div>
      <div>
      <ProductDialog open={open} onClose={handleClose} selectedProduct = {selectedProduct}/>
    </div>
    </div>
  );
};

export default Home;
