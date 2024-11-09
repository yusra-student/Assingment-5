import Image from "next/image";
import NavBar from "@/app/components/Navebar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="bg-background ">
        {/* Responsive container for flexbox layout */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[80%] p-4 lg:p-0">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-8 lg:mb-0 lg:m-20">
            <h1 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px] text-secondary font-bodoni">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] w-full lg:w-[571px] mt-4 text-primary font-bodoni">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className="font-bodoni mt-4 sm:mt-6 lg:mt-10 text-accent bg-primary w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] h-[40px] sm:h-[50px] rounded-lg hover:bg-[#b8aa75]">
              Explore Now
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center lg:items-start">
            <div className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[362px] h-auto mt-8 lg:mt-10 lg:ml-10">
              <Image
                src="/image.jpg"
                alt="hero image"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}