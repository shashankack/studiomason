import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import ImageAni from './ImageAni';
import { useNavigate } from 'react-router-dom';
import '../styles/products.scss';

import image1 from "../../public/image_1.jpg";
import image2 from "../../public/image_2.jpg";
import image3 from "../../public/image_3.jpg";
import image4 from "../../public/image_4.jpg";
import image5 from "../../public/image_5.jpg";
import image6 from "../../public/image_6.jpg";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [productDataSelect, setProductDataSelect] = useState(null);

  const navigate = useNavigate();

  const productData = [
    {
      id: "product-1",
      image: image1,
      name: "FACE",
      description: "Elevate your workspace with our minimalist Concrete Desk Planters—a seamless blend of functionality and modern design. Handcrafted from premium concrete, these planters offer a sleek, industrial aesthetic that complements any desk or shelf.",
      price: "$39.99",
      features: [
        "DURABLE AND SUSTAINABLE",
        "MODERN AESTHETIC",
        "PLANT-FRIENDLY FEATURES",
        "GIFT-READY",
      ],
      specifications: [
        {name: "Material", value: "GRC"},
        { name: "Size", value: "Diameter" },
        { name: "S", value: "4.7'" },
     
      ],
    },
    {
      id: "product-2",
      image: image2,
      name: "COFFEE TABLE",
      description: "This sleek concrete coffee table is durable, fiberglass-reinforced, and available in multiple colors. Water, moss, and stain-resistant, it's easy to maintain and perfect for any indoor or outdoor space.",
      price: "$29.99",
      features: ["FROST-RESISTANCE", "UV-RESISTANCE", "OUTDOOR-READY"],
      specifications: [
        {name: "Material", value: "GRC/FRP"},
        { name: "Size", value: "W x H x L" },
        { name: "M", value: "2.6ft' x 3.6ft' x 1.4ft" },
     
      ],
    },
    {
      id: "product-3",
      image: image3,
      name: "SPACE POT 1",
      description: "Elevate your workspace with our minimalist Concrete Desk Planters—a seamless blend of functionality and modern design. Handcrafted from premium concrete, these planters offer a sleek, industrial aesthetic that complements any desk or shelf.",
      price: "$29.99",
      features: [
        "DURABLE AND SUSTAINABLE",
        "MODERN AESTHETIC",
        "PLANT-FRIENDLY FEATURES",
        "GIFT-READY",
      ],
      specifications: [
        { name: "Material", value: "GRC" },
        { name: "Size", value: "W x H" },
        { name: "S", value: "3.5' x 4.5 inch" },
      ],
    },
    {
      id: "product-4",
      image: image4,
      name: "RIBMAT",
      description: "FRP and GRC planters are durable, weather-resistant, and stylish options for any space. FRP offers a lightweight, sleek look, while GRC combines concrete strength with reduced weight and eco-friendly materials. Both add elegance and versatility indoors or outdoors.",
      price: "$29.99",
      features: ["FROST-RESISTANT", "UV-RESISTANT", "DRAINAGE", "OUTDOOR-READY", "INDOOR-READY"],
      specifications: [
        {name: "Material", value: "GRC/FRP"},
        { name: "Size", value: "W x H" },
        { name: "S", value: "18' x 18'" },
        { name: "M", value: "22' x 24'" },
        { name: "L", value: "26' x 30'" }
      ],
    },
    {
      id: "product-5",
      image: image5,
      name: "SQUARE BOX",
      description: "FRP and GRC planters are durable, weather-resistant, and stylish options for any space. FRP offers a lightweight, sleek look, while GRC combines concrete strength with reduced weight and eco-friendly materials. Both add elegance and versatility indoors or outdoors.",
      features: ["FROST-RESISTANT", "UV-RESISTANT", "DRAINAGE", "OUTDOOR-READY", "INDOOR-READY"],
      specifications: [
        {name: "Material", value: "GRC/FRP"},
        { name: "Size", value: "W x H x L" },
        { name: "S", value: "12' x 13 x 12'" },
        { name: "M", value: "16' x 17' x 17'" },
        { name: "L", value: "20' x 21 x 20'" }
      ],
    },
    {
      id: "product-6",
      image: image6,
      name: "STONE SERIES",
      description: "FRP and GRC planters are durable, weather-resistant, and stylish options for any space. FRP offers a lightweight, sleek look, while GRC combines concrete strength with reduced weight and eco-friendly materials. Both add elegance and versatility indoors or outdoors.",
      price: "$29.99",
      features: [
        "FROST-RESISTANCE",
        "UV-RESISTANCE",
        "DRAINAGE",
        "OUTDOOR-READY",
        "INDOOR-READY"
      ],
      specifications: [
        {name: "Material", value: "GRC/FRP"},
        { name: "Size", value: "W x H" },
        { name: "S", value: "10' x 1O'" },
        { name: "M", value: "12' x 12'" },
        { name: "L", value: "18' x 18'" },
        { name: "XL", value: "24' x 24'" }
      ],
    },
  ];

  const handleImageClick = (productId) => {
    const selectedProduct = productData.find(product => product.id === productId);
    if (selectedProduct) {
      setSelectedId(selectedProduct.id);
      setSelectedImage(selectedProduct.image);
      setProductDataSelect(selectedProduct);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedId(null);
    setProductDataSelect(null);
  };

  return (
    <div className="products-container">
      <AnimatePresence mode="wait">
        {!selectedImage ? (
          <motion.div className="sticky-container">
            <section className="sticky-section">
              <div className="content">
                <ImageAni />
              </div>
            </section>

            <section className="scroll-section">
              <div className="scroll-item">
                <div className='image-container-love'>
                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-1"
                    onClick={() => handleImageClick("product-5")}
                  >
                    <img 
                      src={image5}
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>

                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-2"
                    onClick={() => handleImageClick("product-2")}
                  >
                    <img 
                      src={image2}
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="scroll-item-two">
                <div className='image-container-love'>
                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-3"
                    onClick={() => handleImageClick("product-6")}
                  >
                    <img 
                      src={image6}
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>

                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-4"
                    onClick={() => handleImageClick("product-4")}
                  >
                    <img 
                      src={image4} 
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="scroll-item-three">
                <div className='image-container-love'>
                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-5"
                    onClick={() => handleImageClick("product-1")}
                  >
                    <img 
                      src={image1}
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>

                  <motion.div 
                    className="image-container-scroll"
                    layoutId="product-6"
                    onClick={() => handleImageClick("product-3")}
                  >
                    <img 
                      src={image3} 
                      alt="Product" 
                      className="scroll-image"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <Hero 
            image={selectedImage}
            onClose={handleClose}
            layoutId={selectedId}
            productData={productDataSelect}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;