import Link from "next/link";
import { socials } from "../constants";
import Section from "./Section";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={16}
                height={16}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
