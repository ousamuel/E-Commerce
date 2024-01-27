import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Sidebar from "../components/Sidebar";
import { Link } from "@nextui-org/react";

export default function FlowerPage() {
  return (
    <>
      <Header />
      <div className="subheader">
        <h2 className="font-bold">Flower</h2>
        <h5 className="">
          <Link href="/">Home</Link>
        </h5>
      </div>
      <div className="main-body">
        <Sidebar />
        <PageContent />
      </div>
      {/* <h3>333</h3>
      <h4>444</h4>
      <h5>555</h5> */}
    </>
  );
}
