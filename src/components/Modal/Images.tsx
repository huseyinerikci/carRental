import { FC } from "react";
import { Car } from "../../Types";
import generateImage from "../../utils/generateImage";
interface Props {
  car: Car;
}
const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      <div className="w-full h-40">
        <img
          src={generateImage(car, undefined, true)}
          className="w-full h-full mx-auto object-cover rounded-md"
          alt={`${car.make} ${car.model} ${car.year} - 360 derece görünüm`}
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "29")}
            className="mx-auto object-contain min-w-[140px]"
            alt={`${car.make} ${car.model} ${car.year} - Ön görünüm`}
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "33")}
            className="mx-auto object-contain min-w-[140px]"
            alt={`${car.make} ${car.model} ${car.year} - Üstten görünüm`}
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "13")}
            className="mx-auto object-contain min-w-[140px]"
            alt={`${car.make} ${car.model} ${car.year} - Arka görünüm`}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
