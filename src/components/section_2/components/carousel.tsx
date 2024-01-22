import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./cards";

const CarouselSec = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box maxWidth="100%" mx="auto">
      <Slider {...settings}>
        <Box mx="auto" >
          <Card />
        </Box>
        <Box mx="auto">
          <Card />
        </Box>
        <Box mx="auto">
          <Card />
        </Box>
        <Box mx="auto">
          <Card />
        </Box>
      </Slider>
    </Box>
  );
};

export default CarouselSec;

// import { ChakraProvider, Box } from "@chakra-ui/react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "chakra-ui-carousel";
// import Card from "./cards";

// const CarouselSec = () => {
//   return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//         isPlaying={true}
//         infinite={true}
//       >
//         <Slider>
//           <Slide>
//             <Box mx="auto">
//               <Card />
//             </Box>
//           </Slide>
//           <Slide>
//             <Box mx="auto">
//               <Card />
//             </Box>
//           </Slide>
//           <Slide>
//             <Box mx="auto">
//               <Card />
//             </Box>
//           </Slide>
//         </Slider>

//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//   );
// };

// export default CarouselSec;

// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import Card from './cards';

// // const CarouselSec = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //   };

// //   return (
// //     <Slider {...settings}>
// //       <div className="container mx-auto flex">
// //         <Card />
// //       </div>
// //       <div className="container mx-auto flex">
// //         <Card />
// //       </div>
// //       <div className="container mx-auto flex">
// //         <Card />
// //       </div>
// //     </Slider>
// //   );
// // };

// export default CarouselSec;
