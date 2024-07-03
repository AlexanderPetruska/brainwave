import Image from "next/image";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content
      </h5>
      <ul className="grid grid-cols-2 lg:flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex h-[8.5rem] flex-1 items-center justify-center"
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
