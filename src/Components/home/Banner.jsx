
// import { styled } from '@mui/material';
// import { bannerData } from '../../constant/data';
// import Carousel from 'react-multi-carousel';

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 1,
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1,
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//     }
// };

// const Image = styled('img')(({ theme }) => ({
//     width: '100%',
//     height: 280,
//     [theme.breakpoints.down('sm')]: {
//         objectFit: 'cover',
//         height: 180
//     }
// }));

// const Banner = () => {
//     return (
//         <Carousel
//             swipeable={false}
//             draggable={false}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={4000}
//             keyBoardControl={true}
//             showDots={false}
//             slidesToSlide={1}
//             containerClass="carousel-container"
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//         >
//             {
//                 bannerData.map(image => (
//                     <Image src={image.url} alt="banner" id={image.id} />
//                 ))
//             }
//         </Carousel>
//     )
// }

// export default Banner;

// Import necessary libraries
import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles
import { bannerData } from '../../constant/data';

// Responsive configuration for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Styled component for the image
const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('sm')]: {
    objectFit: 'cover',
    height: 180,
  },
}));

// Banner component
const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map(image => (
        <Image key={image.id} src={image.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
