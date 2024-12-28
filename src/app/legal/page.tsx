import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Legal = () => {
  return (
    <>
      <Header />
      <div className="bg-black">
        <main className="bg-[#e9ffff] py-[120px] rounded-b-[200px]">
          <div className="max-w-[700px] mx-auto">
            <h1 className="text-[46px] font-[500] text-center mb-6">Legal</h1>
            <p className="text-[20px]  leading-loose space-y-2 text-center font-[450]">
              This website and application are published by VRESCO, S.A.S. with
              a share <br /> capital of €500, whose registered office is located
              at 9 Rue Anatole France, <br /> 94140 Alfortville, and registered
              with the Créteil Trade and Companies Register <br />
              under number 984 550 863.‍
              <br />
              <br />
              For any inquiries related to the Invoic&apos;App application, you
              can contact us at contact@invoic-vsc.com.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
