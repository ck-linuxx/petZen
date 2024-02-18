import { Blog } from "./components/blog";
import { CardPage } from "./components/cardPage";
import { Header } from "./components/header";
import { Initial } from "./components/initial";
import { Mobile } from "./components/mobile";
import { OurApp } from "./components/ourApp";

export default function App() {
  return (
    <>
      <div className="mx-[216px] mt-[60px] justify-center max-2xl:hidden ">
        <Header button/>
        <Initial />
        <CardPage />
        <OurApp />
        <Blog />
      </div>
      <div className="2xl:hidden">
        <Mobile />
      </div>
    </>
  )
}