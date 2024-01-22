import { Select, Stack } from "@chakra-ui/react";
import React from "react";
import Card from "./components/cards";
import CarouselSec from "./components/carousel";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Choisissez la localité pour voir nos disponibilités
          </h1>
          <p className="mb-8 leading-relaxed">
            "Bienvenue sur notre site web ! Nous sommes ravis de vous proposer
            une large gamme d'options adaptées à vos besoins. Que vous
            recherchiez une location de vacances chaleureuse, un lieu
            d'événement élégant ou un espace de travail confortable, nous avons
            ce qu'il vous faut. Pour rendre votre expérience encore meilleure,
            nous vous invitons à choisir la localité qui vous convient le
            mieux."
          </p>
          <div className="container mx-auto pb-14">
            <Stack spacing={3}>
              <Select variant="outline" placeholder="Outline">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>
          </div>
        </div>

          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Nos offres
          </h1>
          <CarouselSec/>
      </div>
    </section>
  );
};

export default HeroSection;
