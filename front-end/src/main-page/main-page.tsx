import Header from '../header/header.tsx';
import './main-page.css';
import micImage from '/mic.png';
import uploadImage from '/upload.png';
function MainPage() {


  return (
    <div className='main-page-container'>
      <Header />
      <div className='page-one-container'>
        <div>
          <div className='one-title-container'>
            <div className='one-title-one'>EXPLORE YOUR 14 DAYS FREE TRIAL</div>
            <div className='one-title-two'>Find Your ___Favourite Podcast Here</div>
            <div><button className='one-title-three'>START LISTENING</button></div>
          </div>
          <div className='one-feature-container'>
            <div className='one-feature-one'>
              <div className='one-feature-one-one'>120 Million +</div>
              <div className='one-feature-one-two'>World-wide podcast listeners 2023</div>
            </div>
          </div>
          <div className='one-bottom-container'>
            <div className='one-record'>
              <img className='mic-img' src={micImage}></img>
              <div>Record Your Podcast</div>
            </div>
            <div className='one-upload'>
              <img className='upload-img' src={uploadImage}></img>
              <div>Upload Your Podcast</div>
            </div>
          </div>
        </div>

      </div>
    </div>



  );
}
export default MainPage;