import './Home.css'
import img from './Landing.png'
import Apple from './Apple.svg'

function Home() {

    return (
      <div className="Home">
        <img src={img} alt='logo' className='logo'/>
        <div className='play-store'>
          <a href='http://play.google.com/store/diverr.world?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className='google'/></a>
          <img src={Apple} alt='apple' className='apple' />
        </div>
      </div>
    );
  }
  
  export default Home;