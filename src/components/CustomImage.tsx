import { Image } from "@chakra-ui/react";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
export default function CustomImage({ imageUrl, ...props }) {
  return (
    <>
      <Image
        shadow={"md"}
        borderRadius={"8px"}
        height={"400px"}
        width="100%"
        objectFit="cover"
        src={imageUrl}
        {...props}
      />
    </>
  );
}
