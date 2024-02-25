import React from "react";

const page = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is signle blog page ::::::::::: {params.slug}</h1>
    </div>
  );
};

export default page;
