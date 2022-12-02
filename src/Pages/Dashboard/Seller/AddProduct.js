import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("ASUS");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const [Condition, setCondition] = useState("good");
  const handleCondition = (e) => {
    setCondition(e.target.value);
  };
  const [fileSelected, setFileSelected] = useState(null);
  const handleFileSelected = (e) => {
    setFileSelected(e.target.files[0]);
  };

  const [image, setImg] = useState(null);
  const handleImg = () => {
    const formData = new FormData();

    const imgbbURL = process.env.REACT_APP_imgbb;
    formData.append("image", fileSelected);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbURL}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgData) => {
        if (imgData.success) {
          setImg(imgData.data.url);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const sellingPrice = e.target.sellingPrice.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const desc = e.target.desc.value;
    const buyingPrice = e.target.buyingPrice.value;
    const year = e.target.year.value;
    handleImg();
    const img = image;

    const addedProduct = {
      name,
      sellingPrice,
      Condition,
      phone,
      address,
      category,
      desc,
      buyingPrice,
      year,
      img,
      sellerEmail: user.email,
      sellerName: user.displayName,
      status: "available",
    };
    console.log(addedProduct);

    // fetch(`http://localhost:5000/products`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(addedProduct),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       toast.success("Product successfully added");
    //       e.target.reset();
    //     }
    //   });
  };
  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto my-10">
      <div className=" justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white ">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Add a product
          </h5>
          <form onSubmit={handleSubmitProduct} className="mt-5">
            <div className="grid grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Product name"
                name="name"
                className="
                        w-full
                        rounded-md
                        border
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />

              <select
                required
                className="select select-bordered w-full rounded-md border h-[54px]  border-gray-300 px-5
                bg-[#FssCFDFE] text-base text-body-color placeholder-[#ACB6BE]
                outline-none focus-visible:shadow-none focus:border-primary  text-gray-900 "
                name="category"
                onChange={handleCategory}
              >
                <option value="ASUS">ASUS</option>
                <option value="APPLE">APPLE</option>
                <option value="HP">HP</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                required
                type="number"
                placeholder="Selling Price"
                name="sellingPrice"
                className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />
              <select
                required
                className="select select-bordered w-full rounded-md border h-[54px]  border-gray-300 px-5
                bg-[#FssCFDFE] text-base text-body-color placeholder-[#ACB6BE]
                outline-none focus-visible:shadow-none focus:border-primary  text-gray-900 "
                name="category"
                onChange={handleCondition}
              >
                <option value="Good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                required
                type="number"
                placeholder="Initial buying price"
                name="buyingPrice"
                className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />
              <input
                required
                type="number"
                placeholder="Year of purchase"
                name="year"
                className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                required
                type="tel"
                placeholder="Mobile no"
                name="phone"
                className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />
              <input
                required
                type="text"
                placeholder="Address"
                name="address"
                className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
              />
            </div>
            <input
              required
              type="file"
              onChange={handleFileSelected}
              placeholder="img"
              name="img"
              className="
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        text-gray-900
                        "
            />
            <textarea
              required
              className="w-full rounded-md border text-gray-900
              border-gray-300 py-3.5 px-5 bg-[#FssCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary mb-5"
              name="desc"
              id=""
              cols="20"
              rows="6"
              placeholder="product description"
            ></textarea>

            <div className="text-right">
              <button
                type="submit"
                className=" inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
