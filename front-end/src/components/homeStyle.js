import homeImage from './images/homeImage.jpeg'
import mobileBackground from './images/homeMobileSize.jpeg'

 const welcome = {
    'font-family': 'Monoton',
    'font-size': '60px',
    'letter-spacing': '10px',
    color: '#FFFFFF',
    'text-shadow': '0px 2px black'
  } 

const buttonsAlign = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    'margin-top': '50px'
  }

const centerPieceFullSize = {
  width: '100%',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${homeImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderBottom: '10px solid #D7A000' 
}

const homeTextFullSize = {
  height: '30vh',
  width: '40%',
  textAlign: 'center',
  fontSize: '1.5em',
  marginTop: '150px',
  fontFamily: 'Montserrat',
  fontWeight:'500'
}

const homeFunctionsFullSize = {
  marginTop: '200px',
  width: '100%',
  height: '90vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#EAEAEA'
}

 const resumeFullSize = {
  height: '500px'
}

 const homeContentFullSize = {
  width: '100%',
  display: 'flex',
  marginTop: '100px',
  justifyContent: 'space-around'
}

const mobileContainer = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
}

const mobileCenterPiece = {
	height: '80vh',
	width: '100%',
	backgroundImage: `url(${mobileBackground})`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	borderBottom: '10px solid #D7A000'
}

const homeTextMobile = {
	marginTop: '100px',
	padding: '20px',
	letterSpacing: '3px',
	textAlign: 'center',
	fontWeight: 'bold'
}

const resumePicMobile = {
	height: '350px',
	marginTop: '100px'
}

const mobileButton = {
	height: '50px',
	width: '200px',
	border: '4px solid #D7A000',
	backgroundColor: '#F3F3F3'
}

export const style = {
	welcome: welcome,
	buttonsAlign: buttonsAlign,
	centerPieceFullSize: centerPieceFullSize,
	homeTextFullSize: homeTextFullSize,
	homeFunctionsFullSize: homeFunctionsFullSize,
	resumeFullSize: resumeFullSize,
	homeContentFullSize: homeContentFullSize,
	mobileContainer: mobileContainer,
	mobileCenterPiece: mobileCenterPiece,
	homeTextMobile: homeTextMobile,
	resumePicMobile: resumePicMobile,
	mobileButton: mobileButton
}

