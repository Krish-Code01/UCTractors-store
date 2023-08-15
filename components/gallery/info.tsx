"use client";

import { Product } from "@/types";
import Currency from "../ui/currency";
import Button from "../ui/button";
import { BookmarkPlus, HeartHandshake } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Model:</h3>
          <div>{data?.model}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tractor Condition:</h3>
          <div>{data?.condition}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tyre Condition:</h3>
          <div>{data?.tyre}</div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button onClick={onAddToCart} className="flex items-center gap-x-2">
            Add To Wishlist
            <BookmarkPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
