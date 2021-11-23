import { Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './imageContainer.scss';

const ImageContainer = () => {
  return (
    <div className='image__container'>
      <div className='image__container__img'>
        <img src='https://picsum.photos/800/300/?random' alt='1' />
      </div>
      <div className='image__container__info'>
        <h1>Curved EDGE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          quibusdam totam ea nulla modi sed atque, id voluptate sint
        </p>
      </div>
      <Button
        variant='contained'
        color='secondary'
        className='image__container__button'
      >
        <span>Read more</span>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default ImageContainer;
