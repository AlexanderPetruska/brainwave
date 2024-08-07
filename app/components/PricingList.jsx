import Image from "next/image";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8/60 px-6 backdrop-blur odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
          key={item.id}
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 mb-3 min-h-[4rem] text-n-1/50">
            {item.description}
          </p>
          <div
            className={`mb-6 flex h-[5.5rem] items-center lg:my-0 ${!item.price ? "-my-28" : ""}`}
          >
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="mb-6 text-[5.5rem] font-bold leading-none">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="mb-6 w-full"
            href={(item.price && "/pricing") || "mailto:contact@brainwave.com"}
            white={item.price}
          >
            {(item.price && "Get started") || "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start border-t border-n-6 py-5"
              >
                <Image src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
