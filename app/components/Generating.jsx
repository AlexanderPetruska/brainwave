import Image from "next/image";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 ${
        className || ""
      } text-base`}
    >
      <Image className="mr-4 h-5 w-5" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;