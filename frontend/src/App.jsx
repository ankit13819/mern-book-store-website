import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet /> {/* This will render child components like Home and About */}
      </main>
      <Footer />
    </>
  );
}
