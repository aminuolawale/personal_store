const imageUploader = (image) => {
  let data = {};
  let reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = function () {
    let dd = reader.result.split(",");
    const d0 = dd[0];
    const d1 = dd[1];
    let r = d0.split(":")[1];
    r = r.split(";")[0];
    data = { type: r, data: d1 };
    console.log(";:::::::::::::", data);
  };
  return data;
};

export default imageUploader;
