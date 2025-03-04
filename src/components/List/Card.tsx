import { FC, useState } from "react";
import { Car } from "../../Types";
import calcPrice from "../../utils/calcPrice";
import Info from "./Info";
import Button from "../Button";
import { motion } from "motion/react";
import Modal from "../Modal";
import generateImage from "../../utils/generateImage";
interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      <h2 className="car-card-content-title">
        {car.make} {car.model}
      </h2>
      {/* araba fiyatı */}
      <div className="flex text-[19px] mt-6">
        <span className="text-[32px]">{calcPrice(car)}</span>
        <span className="font-semibold self-center text-[26px]">₺</span>
        <span className="font-semibold self-center">/gün</span>
      </div>
      {/* araba resmi */}
      <div>
        <img
          src={generateImage(car)}
          alt={car.model}
          className="w-full h-full object-contain min-h-[200px]"
        />
      </div>
      {/* buttons */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="hidden group-hover:block"
        >
          <Button
            fn={() => setIsOpen(true)}
            text="Daha Fazla"
            designs="w-full text-white mt-[0.5px]"
          />
        </motion.div>
      </div>

      <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Card;
