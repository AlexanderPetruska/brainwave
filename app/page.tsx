import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}
