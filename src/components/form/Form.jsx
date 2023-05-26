// import React from "react";
import './Form.css'

import PencilIcon from '../../assets/edit-pencil.svg'
import Verified from '../../assets/verified-badge.svg'
import McIcon from '../../assets/mc_symbol.svg'
import DotsIcon from '../../assets/dots.svg'

const Form = () => {
  return (
    <section className="main-form-body">
    <div>
        <div className="input-group">
            <div className="header">
                <div className="description-div">
                    <h2 className="title">Card Number</h2>
                    <p className="description">Enter the 15-digit card number on the card</p>
                </div>
                <button className="edit">
                    <img src={PencilIcon} alt="" style={{height: '0.9em', color: "#1da1f2"}} />
                    <span className="btn-desc">Edit</span>
                </button>
            </div>
            <div className="main">
                <img src={McIcon} alt="" className="leading-icon" />
                <input type="text" placeholder="2412 - 7512 - 3412 - 3456" id='first-input' />
                <img src={Verified} alt="" className="trailing-icon1" />
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description-div">
                    <h2 className="title">CVV Number</h2>
                    <p className="description">Enter the 3 or 4 digit number on the card</p>
                </div>
            </div>
            <div className="main">
                <input type="text" placeholder="327" />
                <img src={DotsIcon} alt="" className="trailing-icon" />
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description-div">
                    <h2 className="title">Expiry Date</h2>
                    <p className="description">Enter the expiration date of the card</p>
                </div>
            </div>
            <div className="grp">
                <div className="main __date">
                    <input type="text" placeholder="09" />
                </div>
                <span className="divider">/</span>
                <div className="main __date">
                    <input type="text" placeholder="22" />
                </div>
            </div>
        </div>
        <div className="input-group __col">
            <div className="header">
                <div className="description-div">
                    <h2 className="title">Password</h2>
                    <p className="description">Enter your dynamic password</p>
                </div>
            </div>
            <div className="main">
                <input type="password" placeholder="******" />
                <img src={DotsIcon} alt="" className="trailing-icon" />
            </div>
        </div>
        <button type="submit" className="btn-submit">Pay Now</button>
    </div>
</section>
  );
};

export default Form;
