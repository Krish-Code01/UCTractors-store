"use client";
import Image from "next/image";
import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import { X } from "lucide-react";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-betweeen sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="flex justify-betweeen">
          <p className="text-lg font-semibold text-black">{data.name}</p>
        </div>
        <div className="mt-1 flex text-sm">
          <p className="text-gray-500">{data.model}</p>
          <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
            {data.condition}
          </p>
          <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
            {data.tyre}
          </p>
        </div>
        <Currency value={data.price} />
      </div>
    </li>
  );
};
export default CartItem;
