import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { uploadProduct } from "../redux/myProducts/actions";
import { useDispatch } from "react-redux";
const ListProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 1,
    stock: 1,
    main_image: "",
    images: [],
  });
  const [imageFieldsCount, setImageFieldsCount] = useState(0);
  const { name, description, price, stock, main_image, images } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(formData.main_image);
    reader.onload = function () {
      let dd = reader.result.split(",");
      const d0 = dd[0];
      const d1 = dd[1];
      let r = d0.split(":")[1];
      r = r.split(";")[0];
      console.log(r);
      formData["main_image"] = { type: r, data: d1 };
      dispatch(uploadProduct(formData));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddNew = (e) => {
    setImageFieldsCount(imageFieldsCount + 1);
  };

  const remove = (e) => {
    setImageFieldsCount(imageFieldsCount - 1);
  };
  const handleMainImageChange = (e) => {
    setFormData({ ...formData, main_image: e.target.files[0] });
  };
  const handleImagesChange = (e) => {
    const _images = formData.images;
    _images.push(e.target.files[0]);
    setFormData({ ...formData, images: _images });
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
          onChange={(e) => handleMainImageChange(e)}
        ></input>
      </div>
      <label htmlFor={`image`}>Images</label>
      {[...Array(imageFieldsCount).keys()].map((i) => (
        <div key={i}>
          <input
            type="file"
            id={`image${i}`}
            name={`image${i}`}
            onChange={(e) => handleImagesChange(e)}
          ></input>
          <div onClick={remove}>
            <Button text="Remove" size="sm"></Button>
          </div>
        </div>
      ))}
      <div onClick={handleAddNew}>
        <Button text="Add New" size="sm"></Button>
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ListProduct;
