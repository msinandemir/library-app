import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function WebLayout() {
  return (
    <>
      <NavBar />
      <main className='max-w-[1000px] mx-auto min-h-[calc(100vh-380px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default WebLayout;
