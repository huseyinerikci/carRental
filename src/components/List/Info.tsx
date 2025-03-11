import { FC } from "react";
import { Car } from "../../Types";
import { motion } from "motion/react";
interface Props {
  car: Car;
}
const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car.trany,
      alt: `Şanzıman tipi ikonu`,
    },
    {
      icon: "/tire.svg",
      text: car.drive,
      alt: `Sürüş sistemi ikonu`,
    },
    {
      icon: "/calendar.svg",
      text: car.year,
      alt: `Üretim yılı ikonu`,
    },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full flex justify-between">
      {arr.map(({ icon, text, alt }, i) => (
        <motion.div
          custom={i}
          variants={navVariants}
          initial="hidden"
          whileInView="visible"
          className="flex-center flex-col"
        >
          <img src={icon} alt={alt} className="size-[25px]" />
          <p className="text-center">{text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
