import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = (props) => {
  const [product, setProduct] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [productImages, setProductImages] = useState([]);
  const productId = props.match.params.id;
  const url = `http://localhost:8000/api/public_products/${productId}`;
  useEffect(async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProduct(data);
    } catch (err) {
      console.log(err.message);
    }
  }, [productId]);

  useEffect(() => {
    setProductImages(product ? [product.main_image, ...product.images] : []);
  }, [product]);

  useEffect(() => {
    setSelectedImage(productImages[0]);
  }, [productImages]);

  const handleThumbClick = (e) => {
    setSelectedImage(e.target.src);
  };
  return product ? (
    <div className="productDetail">
      <div className="productDetail__left">
        <img className="productDetail__left__main" src={selectedImage}></img>
        <div className="productDetail__left__sub">
          {productImages.map((i) => (
            <img
              key={i}
              className="productDetail__left__sub__img"
              onClick={handleThumbClick}
              src={i}
            ></img>
          ))}
        </div>
      </div>
      <div className="productDetail__right">
        <p className="productDetail__right__name">{product.name}</p>
        <p className="productDetail__right__text">{product.description}</p>
        <p className="productDetail__right__price">N{product.price}</p>
        <p className="productDetail__right__stock">In Stock: {product.stock}</p>
        <p>{product.owner.username}</p>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
};

export default ProductDetail;
