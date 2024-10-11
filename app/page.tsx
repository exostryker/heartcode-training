// export default function Home() {
//   return (
//     <div className="bg-[url('/landscape.png')] bg-cover bg-center bg-no-repeat h-screen overflow-hidden">
//       <div className="flex flex-col justify-center items-center h-dvh">
//         <p className="font-bold text-5xl text-center text-red-500">
//           Drugs are bad for you
//         </p>
//         <p className="text-6x1 text-center">
//           Do the quiz to test your knowledge
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation"; // Ensure this path is correct
import Image from "next/image";

export default function HeroScrollDemo() {
  // Change to default export
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Drug abuse is <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                DANGEROUS
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/drug1.png`} // Ensure this path is correct
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
