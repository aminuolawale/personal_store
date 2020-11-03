import React, { useState } from "react";

const ListProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 1,
    stock: 1,
    main_image: "",
    images: [],
  });
  const [imageFieldCount, setImageFieldCount] = useState(3);
  const { name, description, price, stock, main_image, images } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          required
          id="description"
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          required
          id="price"
          name="price"
          value={price}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          required
          id="stock"
          name="stock"
          value={stock}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="main_image">Main Image</label>
        <input
          type="file"
          required
          id="main_image"
          name="main_image"
          value={main_image}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <label htmlFor={`image`}>Images</label>
      {[...Array(imageFieldCount).keys()].map((i) => (
        <div>
          <input
            type="file"
            required
            id={`image${i}`}
            name={`image${i}`}
            value={images}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      ))}

      <button type="submit">Upload</button>
    </form>
  );
};

export default ListProduct;
