import { BsBoxes } from "react-icons/bs";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { IoRestaurant } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Categories = [
  {
    id: 1,
    name: "ALL",
    icon: <BsBoxes  className="w-[60px] h-[60px] text-green-400"/>,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-green-400"/>,
  },
  {
    id: 3,
    name: "soups",
    icon: <TbSoup  className="w-[60px] h-[60px] text-green-400"/>,
  },
  {
    id: 4,
    name: "pasta",
    icon: <CiBowlNoodles  className="w-[60px] h-[60px] text-green-400"/>,
  },
  {
    id: 5,
    name: "main_course",
    icon: <IoRestaurant className="w-[60px] h-[60px] text-green-400" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-400" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <GiHamburger  className="w-[60px] h-[60px] text-green-400"/>,
  },
];

export default Categories;