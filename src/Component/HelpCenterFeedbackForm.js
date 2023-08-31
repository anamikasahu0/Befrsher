import React, { useState } from "react";
import HelpCenterHome from "../Images/HelpCenterHome.png";

const HelpCenterFeedbackForm = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedRetailer, setSelectedRetailer] = useState("");
  const [product, setProduct] = useState("");
  const [orderId, setOrderId] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log({
      selectedArea,
      selectedRetailer,
      product,
      orderId,
      comment,
    });
  };

  return (
    <section>
      <div className="flex gap-[1.87rem]  ">
        <div>
          <img
            className=" mt-[1.88rem] w-full h-[48.0625rem] "
            src={HelpCenterHome}
            alt="Help Center Image"
          />
        </div>
        <div className="flex p-6 mt-[6.81rem]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="selectedArea"
                className=" uppercase text-[16px] block font-medium "
              >
                Select Area
              </label>
              <select
                id="selectedArea"
                className="mt-1 block w-[450px] h-[40px] border border-[#C40460] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                {/* Options for areas */}
                <option value="">Select an Area</option>
                <option value="area1">Area 1</option>
                <option value="area2">Area 2</option>
                {/* Add more options */}
              </select>
            </div>

            <div>
              <label
                htmlFor="selectedRetailer"
                className="uppercase block font-medium"
              >
                Select Retailer
              </label>
              <select
                id="selectedRetailer"
                className="mt-1 block w-[450px] h-[40px] border border-[#C40460] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={selectedRetailer}
                onChange={(e) => setSelectedRetailer(e.target.value)}
              >
                {/* Options for retailers */}
                <option value="">Select a Retailer</option>
                <option value="retailer1">Retailer 1</option>
                <option value="retailer2">Retailer 2</option>
                {/* Add more options */}
              </select>
            </div>

            <div>
              <label htmlFor="product" className="uppercase block font-medium">
                Product
              </label>
              <input
                type="text"
                id="product"
                className="mt-1 block w-[450px] h-[40px]  border border-[#C40460] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="orderId" className="uppercase block font-medium">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                className="mt-1 block w-[450px] h-[40px] border border-[#C40460] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="comment" className=" uppercase block font-medium">
                Any Comment
              </label>
              <textarea
                id="comment"
                className="mt-1 block w-[450px] h-[40px] border border-[#C40460] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {/* <div className="flex items-center space-x-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox mr-2 border border-[#C40460]"
                  // You can add state and logic here if needed
                />
                <p className=" flex items-center w-[450px] text-[#484FA2] ">
                  Please ensure that the selected product name, model, and color
                  match the one written on the product box received/invoice
                </p>
                <p className="flex flex-row  text-[#484FA2]">
                  In case of a name mismatch, claim is liable for rejection
                </p>
              </label>
            </div> */}

            <div className="flex flex-col items-center mt-8">
              <div className="flex items-start space-x-2 mb-2">
                <input type="checkbox" className="form-checkbox mt-1" />
                <p className=" w-[28.125rem] text-[#484FA2] font-normal">
                  Please ensure that the selected product name, model, and color
                  match the one written on the product box received/invoice
                </p>
              </div>
              <div className=" items-center w-[27.125rem] text-[#484FA2] font-normal">
                <p>In case of a name mismatch, claim is liable for rejection</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="px-4 py-2 pl-[66.67px] pr-[66.67px] text-white rounded-[20px] bg-[#C40460] hover focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterFeedbackForm;
