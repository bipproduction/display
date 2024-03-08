"use client"
import React from 'react';
import Webcam from "react-webcam";
function Page() {
  const WebcamComponent = () => <Webcam />;
  return (
    <>
      <WebcamComponent />
    </>
  );
}

export default Page;
