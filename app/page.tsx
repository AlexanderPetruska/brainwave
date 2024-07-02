"use client";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./components/Button";
import ButtonGradient from "../public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <Router>
      <ButtonGradient />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
    </Router>
  );
}
