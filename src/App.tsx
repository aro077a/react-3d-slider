// @ts-ignore
import ImageSlider from './components/image-slider/ImageSlider';
import './App.scss';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className='App'>
      <div className='app-title'>
        <h1>WHAT WE DO</h1>
        <p className='app-info'>
          We develop successful apps for our clients who range from startup
          entrepreneurs to Fortune 500s
        </p>
      </div>
      <ImageSlider />
      <Button variant='contained'>
        <span>View all projects</span>
      </Button>
    </div>
  );
}

export default App;
