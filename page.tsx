"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

export default function Home() {
  const targetDate = new Date('April 29, 2024 18:34:00 EST');
  return (
    <main className="hero">
      <section className="h-screen">
        <Navbar />
        <div className="w-full place-items-center flex flex-col lg:mb-[14rem]">
          <div className="bg-black rounded-xl px-[4rem] py-2 text-white mt-[4rem] w-full max-w-[600px]">
            <div className="lg:max-w-[600px] text-center font-semibold">
              <p>
                First Round of Presale | 20% Off
              </p>  
              <span>
                Price Increase In <Countdown targetDate={targetDate} />
              </span>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl px-[4rem] py-2 text-black my-4 w-full max-w-[600px]">
            <div className="lg:max-w-[600px] text-center">
              <p> 🌩️ 168,867,834.75 $FERDY Left⚡️ </p>
            </div>
          </div>
          <div className="card bg-white text-black w-full max-w-[600px] flex flex-col items-center">
            <Image src="/images/qrcode.jpg" alt="qrcode" width={220} height={90} />
            <p className="text-[12px] lg:text-base">8jh8JyvoHtCWk3YoQaGVLf1oLNiNKeBYGQcHezDnYwVp</p>
          </div>
        </div>
        <div className="footer hidden lg:flex">
          <Footer />
        </div>
      </section>
      <div className="flex lg:hidden lg:bottom-0">
        <Footer />
      </div>
    </main>
  );
}
