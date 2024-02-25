import ProductDetails from "@/ui/products/ProductDetails";
import React from "react";

const page = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ProductDetails product={data} key={data.id}></ProductDetails>
    </div>
  );
};

export default page;
