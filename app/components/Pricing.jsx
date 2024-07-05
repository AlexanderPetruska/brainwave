import Image from "next/image";
import Section from "./Section";
import PricingList from "./PricingList";
import Heading from "./Heading";
import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing.jsx";
import Link from "next/link";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="absolute left-1/2 top-1/2 -z-5 mb-[6.5rem] hidden -translate-x-[50%] justify-center lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="border-b font-code text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#AC6AFF] hover:text-[#AC6AFF]"
            href="/pricing"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
