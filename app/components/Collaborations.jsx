import Image from "next/image";
import { collabApps, collabContent, collabText } from "../constants";
import Section from "./Section";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaborations = () => {
  return (
    <Section crosses id="collaborations">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="mb-10 max-w-[22rem] md:mb-12">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="mt-6 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>

          <div className="relative left-1/2 mt-6 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-n-6 md:scale-100">
            <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
              <div className="m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-n-8">
                  <Image
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7 -rotate-${index * 45}`}
                  >
                    <Image
                      src={app.icon}
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaborations;
