// @ts-ignore
import { Carousel } from '3d-react-carousal';
import ImageContainer from '../image-container/ImageContainer';
import './imageSlider.scss';

const ImageSlider = () => {
  let slides = [
    <ImageContainer />,
    <ImageContainer />,
    <ImageContainer />,
    <ImageContainer />,
    <ImageContainer />,
    <ImageContainer />,
    <ImageContainer />,
  ];
  return (
    <div>
      <Carousel slides={slides} autoplay={false} />
    </div>
  );
};
export default ImageSlider;
