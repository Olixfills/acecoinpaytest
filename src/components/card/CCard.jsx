
import './CCard.css'
import Chip from '../../assets/chip.png'
import Wifi from '../../assets/wifi.png'
import MasterCard from '../../assets/mastercard-2.svg'

const CCard = () => {
  return (
    <div className=''>
        <span className="blu"></span>
    <div className="credit-card">
        <div className="credit-card__head">
            <img src={Chip} alt="" className="chip" />
            <img src={Wifi} alt="" className="wifi" />
        </div>
        <div className="credit-card__body">
            <span className="holder">jonathan micheal</span>
            <div className="card-digits">
                <div className="hidden-digits">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <span className="visible-digits">3456</span>
            </div>
        </div>
        <div className="credit-card__footer">
            <span className="expiry">09/22</span>
            <img src={MasterCard} alt="" className="logo" />
        </div>
        <div className="card__design">
            <span className="inner"></span>
        </div>
    </div>
    </div>
  )
}

export default CCard