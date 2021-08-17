import './style.css'
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function CheckoutForm({total}) {

    const [userinfo, setUserInfo] = useState({
        email: '',
        phoneNumber: '',
        address: '',
        fullname: ''
    })
    let history = useHistory()

    

    const config = {
        public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
        tx_ref: "RX1",
        amount: total,
        currency: "NGN",
        country: "NG",
        payment_options: " ",
        customer: {
            email: userinfo.email,
            phone_number: userinfo.phoneNumber,
            name: userinfo.fullname,
        },
         customizations: {
            title: "Hive store",
            description: "Payment for items in cart",
            logo: "https://assets.piedpiper.com/logo.png",
        },
    }

    const handleFlutterPayment = useFlutterwave(config)

    const fwConfig = {
        ...config,
       text: 'Pay with Flutterwave!',
        callback: (response) => {
        console.log(response);
        },
        onClose: () => {},
    }

    const validateInput = () => {
        let email = document.getElementById("email")
        let phone = document.getElementById("phone-number") 
        let address = document.getElementById("address")
        let fullname = document.getElementById("fullname") 

        let emailError = document.getElementById("email-error")
        let phoneError = document.getElementById("phone-error")
        let addressError = document.getElementById("address-error")
        let fullnameError = document.getElementById("fullname-error")

        if(!email.value.includes("@") || email.value === ''){
            email.style.borderColor = "red"
            emailError.style.display = "block"
            email.addEventListener("keydown", ()=>{
                email.style.borderColor = '#eaeaea'
                emailError.style.display = 'none'
            })
        }

        if(phone.value === ''){
            phone.style.borderColor = "red"
            phoneError.style.display = "block"
            phone.addEventListener("keydown", ()=>{
                phone.style.borderColor = '#eaeaea'
                phoneError.style.display = 'none'
            })
        }
        if(fullname.value === ''){
            fullname.style.borderColor = "red"
            fullnameError.style.display = "block"
            fullname.addEventListener("keydown", ()=>{
                fullname.style.borderColor = '#eaeaea'
                fullnameError.style.display = 'none'
            })
        }
        if(address.value === ''){
            address.style.borderColor = "red"
            addressError.style.display = "block"
            address.addEventListener("keydown", ()=>{
                address.style.borderColor = '#eaeaea'
                addressError.style.display = 'none'
            })
        }

        if(fullname.value === '' || phone.value === '' || email.value === '' || address.value === '' || !email.value.includes('@')){
            return false
        }
        else{
            return true
        }

    }

    const checkOut = () => {
        if(validateInput()){
            handleFlutterPayment({
                callback:(response) => {
                    

                    if(response.status === "successful"){
                        setTimeout(() => {
                            history.push("/success")
                        }, 1000);
                    }
                    console.log(response);
                },
                onClose: () => {}
            })
        }
    }

    return (
        <div className="checkout-form">
            <div className="process">
                <h2>Account</h2>
                <p className="form-text">To place your order, please fill out the fields correctly</p>
                <div className="form-input">
                    <p>Fullname</p>
                    <input type="text" id="fullname" placeholder="Fullname" onChange={(e)=> setUserInfo({...userinfo, phoneNumber: e.target.value})} required name="fullname" />
                    <p style={{color: 'red', display: 'none'}} id="fullname-error">Please input a value</p>
                </div>
                <div className="form-input">
                    <p>Email address</p>
                    <input type="email" id="email" placeholder="Email" onChange={(e)=> setUserInfo({...userinfo, email: e.target.value})} required name="email" />
                    <p style={{color: 'red', display: 'none'}} id="email-error">Please input a valid email</p>
                </div>
                <div className="form-input">
                    <p>Phone Number</p>
                    <input type="number" id="phone-number" placeholder="Phone number" onChange={(e)=> setUserInfo({...userinfo, phoneNumber: e.target.value})} required name="phone-number" />
                    <p style={{color: 'red', display: 'none'}} id="phone-error">Please input a value</p>
                </div>
            </div>

            <div className="process">
                <h2>Delivery address</h2>
                <p className="form-text">Input your delivery address</p>
                <div className="form-input">
                    <p>Address</p>
                    <input type="text" id="address" placeholder="Address" onChange={(e)=> setUserInfo({...userinfo, address: e.target.value})} required name="address" />
                    <p style={{color: 'red', display: 'none'}} id="address-error">Please input a value</p>
                </div>
            </div>

            <div className="process">
                <h2>Payment</h2>
                <p className="form-text">Select your payment method</p>
                <div className="form-input">
                    <label htmlFor="payment">
                        <input type="radio" readOnly name="payment-method" checked />
                        <p>Card payment</p>
                    </label>
                    <input type="button" onClick={checkOut} className="btn btn-form" value="Place Order" name="place-order" />
                </div>
            </div>
        </div>
    )
}
