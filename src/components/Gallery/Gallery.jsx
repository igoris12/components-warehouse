import React from "react";
import "./Gallery.css";
import galleryIamges from "./img/images";

function Gallery() {
  return (
    <article className="grid-gallery">
      <img src={galleryIamges[0]} alt="description 1" />
      <img src={galleryIamges[1]} alt="description 2" />
      <img src={galleryIamges[2]} alt="description 3" />
      <img src={galleryIamges[3]} alt="description 4" />
      <img src={galleryIamges[4]} alt="description 5" />
      <img src={galleryIamges[5]} alt="description 7" />
      <img src={galleryIamges[6]} alt="description 6" />
      <img src={galleryIamges[7]} alt="description 8" />
    </article>
  );
}

export default Gallery;
