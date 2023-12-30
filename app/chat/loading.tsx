import { Loader } from "@mantine/core";
import React from "react";

function Loading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Loader />
    </div>
  );
}

export default Loading;
