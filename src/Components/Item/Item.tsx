import React, { FC } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

type ItemProps = {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
};

const scrollToTop = (_event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    window.scrollTo(0, 0);
}

const Item:FC<ItemProps> = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="w-28 md:w-64">
      <Link to={`/product/${id}`}>
        <img onClick={scrollToTop} src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
