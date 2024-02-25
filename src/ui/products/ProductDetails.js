import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div className="w-50%">
          <figure>
            <img src={product.image} alt="Movie" className="w-50% h-50%" />
          </figure>
        </div>
        <div>
          <h1 className="font-extrabold text-3xl">{product.name}</h1>
          <h2 className="font-bold underline py-3 text-2xl">Features:</h2>
          <div className="border w-[50%] my-4">
            {product.features?.map((feature) => (
              <>
                <div className="">
                  <table className="table font-normal">
                    <tbody>
                      <tr>
                        <th className="font-normal">{feature}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ))}
          </div>

          <div className="card-actions justify-start items-start">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
