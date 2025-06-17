import React from "react";

const OrderTracking = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      {/* Order Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Order Details</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          PAY ₹539
        </button>
      </div>

      {/* Product Details */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Product"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h2 className="text-base font-semibold">JBL C50HI Wired Headset</h2>
          <p className="text-sm text-gray-600">Black</p>
          <p className="text-sm text-gray-600">Seller: Creative Deals</p>
          <p className="text-lg font-bold">₹539</p>
        </div>
      </div>

      {/* Tracking Timeline */}
      <div className="mb-4">
        <div className="relative">
          <div className="absolute h-full border-l-2 border-green-500 left-4 top-0 z-0"></div>
          <div className="relative flex items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
              ✔
            </div>
            <div>
              <p className="font-bold">Ordered</p>
              <p className="text-sm text-gray-600">Wed, 16th Jun 21</p>
            </div>
          </div>
          <div className="relative flex items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
              ✔
            </div>
            <div>
              <p className="font-bold">Packed</p>
              <p className="text-sm text-gray-600">Fri, 18th Jun 21</p>
            </div>
          </div>
          <div className="relative flex items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
              ✔
            </div>
            <div>
              <p className="font-bold">Shipped</p>
              <p className="text-sm text-gray-600">Fri, 18th Jun 21</p>
            </div>
          </div>
          <div className="relative flex items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              🕒
            </div>
            <div>
              <p className="font-bold">Out for delivery</p>
              <button className="text-blue-500 text-sm underline">
                Track your delivery
              </button>
            </div>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
            <div>
              <p className="font-bold">Delivery</p>
              <p className="text-sm text-gray-600">
                Expected by Sun, 20th Jun 21
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Time */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">Delivery Time:</p>
        <p className="font-bold text-blue-500">3 PM</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button className="bg-gray-100 px-4 py-2 rounded text-blue-500">
          Call
        </button>
        <button className="bg-gray-100 px-4 py-2 rounded text-blue-500">
          Return
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;
