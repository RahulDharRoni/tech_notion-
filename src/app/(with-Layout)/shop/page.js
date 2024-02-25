import Products from "@/ui/products/Products";
import React from "react";

const Shop = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
  });
  const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h1>{data.length}</h1>
      <div className="grid grid-cols-3 gap-3 w-[80%] p-10 mx-auto">
        {data.map((pro) => (
          <Products key={Products.id} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
