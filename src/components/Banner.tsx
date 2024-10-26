import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=" bg-gray-100 py-2 flex items-center justify-center gap-10">
      <FaChevronLeft />
      <span className="text-gray-700">Get 10% off on business sign up</span>
      <FaChevronRight />
    </div>
  );
};

export default Banner;
