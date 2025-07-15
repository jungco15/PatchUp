import './LoadingScreen.css'
import googleIcon from '../assets/googleIcon.svg'
import fbIcon from '../assets/fbIcon.svg'



function LoadingScreen() {
  return (
    <div className="loadingscreen_body">
    <div className="loadingscreen_container">
      <div className="loadingscreen_logo">
        <div className='loadingscreen_logo_container'>
        <span className="title-1">patch</span>
        <span className="title-2">up</span>
        </div>
      </div>
            <div className='loadingscreen_buttons'>
            <a href=''><button className='loadingscreen_button1'>Login</button></a>
            <a href=''><button className='loadingscreen_button2'>Sign Up</button></a>
        </div>
        <div className='loadingscreen_divider'>
            <span className='loadingscreen_or'>or</span>
        </div>
        <div className='loadingscreen_socials'>
            <a href=''><button className='loadingscreen_socials_button1'>
                <img src={googleIcon} alt='Google'></img>Continue with Google</button></a>
            <a href=''><button className='loadingscreen_socials_button2'>
                <img src={fbIcon} alt='Facebook'></img>Continue with Facebook</button></a>
        </div>
        <div className='loadingscreen_footer'>
            <h4>Vulcanize Anytime, Anywhere</h4>
        </div>
      </div>
    </div>
  )
}


export default LoadingScreen