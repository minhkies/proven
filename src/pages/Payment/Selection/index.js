import React, {useState} from "react";
import Header from "../../../comps/Header";
import Tiers from "../../../comps/Tiers";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import BottomBtnBar from "../../../comps/BottomBtnBar";

const stripePromise = loadStripe('pk_test_GYUauDShkSZSJ0MAUEnMNaji00EvOPY0m8');


export default function Selection({setNextStep, completedStep, setCompletedStep, setStepRefresh, stepRefresh, data, setData}) {
    let [selectedOption, setSelectedOption] = useState(1);
    let [name, setName] = useState("Laurence Hoang");
    let [cardNumber, setCardNumber] = useState(["0000","0000","0000","0000"]);
    let [expMonth, setExpMonth] = useState(11);
    let [expYear, setExpYear] = useState(20);
    let [cvv, setCvv] = useState(123);
    let [card, setCard] = useState({
        name: "Laurence Hoang",
        number: ["0000","0000","0000","0000"],
        expMonth: 11,
        expYear: 20,
        cvv: 123
    });
    let [billing, setBilling] = useState({
        name: "",
        address_1: "",
        address_2 : "",
        city: "",
        province: "",
        zip: ""
    });
    const tierOptions = [{
        name: "Basic",
        price: 49,
        des: "Best way to get started for individual user",
        features: ["<b>1</b> User", "Up to <b>2</b> projects per user", "Up to <b>5</b> vendors per project phase", "View <b>lowest</b> bid"],
        recommended: false
    },{
        name: "Small Business",
        price: 109,
        des: "Built for small businesses to streamline their projects",
        features: ["<b>2</b> Users", "Up to <b>10</b> projects per user", "Up to <b>15</b> vendors per project phase", "View <b>all</b> bids"],
        recommended: true
    },{
        name: "Enterprise",
        price: 199 ,
        des: "Perfect for large teams with unlimited features",
        features: ["<b>Unlimited</b> Users", "<b>Unlimited</b> projects per user", "<b>Unlimited</b> vendors per project phase", "View <b>all</b> bids"],
        recommended: false
    }
    ];


    return <div className={"payment-selection-container"}>
        <Header
            headingTxt={"Payment"}
            subTxt={"Choose a plan that fits your needs"}
            marginTop={false}
        />
        <Tiers
            options={tierOptions}
            selected={selectedOption}
            onclick = {setSelectedOption}
        />
        <FormContainer
            formHeading={"Billing Information"}
        >
            <InputField
                title={"Full Name"}
                placeholder={"Ex: Lawrence Smith"}
                star={true}
                onChange={(e)=>{setBilling({...billing, name: e.target.value})}}

            />
            <InputField
                title={"Address Line 1"}
                placeholder={"Ex: 3700 Willingdon Ave"}
                star={true}
                onChange={(e)=>{setBilling({...billing, address_1: e.target.value})}}
            />
            <InputField
                title={"Address Line 2"}
                placeholder={"Ex: Building SE14"}
                onChange={(e)=>{setBilling({...billing, address_2: e.target.value})}}
            />
            <div className={"horizontal-input-3"}>
                <InputField
                    title="City"
                    placeholder="Ex: Burnaby"
                    star={true}
                    onChange={(e)=>{setBilling({...billing, city: e.target.value})}}
                />
                <InputField
                    title="Province"
                    placeholder="Ex: BC"
                    star={true}
                    onChange={(e)=>{setBilling({...billing, province: e.target.value})}}
                />
                <InputField
                    title="Postal Code"
                    placeholder="Ex: V5G 3H2"
                    star={true}
                    onChange={(e)=>{setBilling({...billing, zip: e.target.value})}}
                />
            </div>
        </FormContainer>
        <FormContainer
            formHeading={"Credit Card Information"}
            col={1}
            >
            {/*<Elements stripe={stripePromise}>*/}
            {/*    <StripeForm/>*/}
            {/*</Elements>*/}
            <div className={"cc-container"}>
                <div className={"simulated-card-container"}>
                    <div className={"simulated-card"}>
                        <div className={"top-card"}>
                            <img src={require("../../../media/img/logo-regular.png")} alt="Logo" className={"card-logo"}/>
                        </div>
                        <div className={"bottom-card"}>
                            <div className={"card-number-container"}>
                                <p className={"card-number"}>{card.number[0]}</p>
                                <p className={"card-number"}>{card.number[1]}</p>
                                <p className={"card-number"}>{card.number[2]}</p>
                                <p className={"card-number"}>{card.number[3]}</p>
                            </div>
                            <div className={"card-cardholder-name-container"}>
                                <p className={"txt-card-name"}>Cardholder's name</p>
                                <p className={"card-name"}>{card.name.toUpperCase()}</p>
                            </div>
                            <div className={"card-expiry-container"}>
                                <p className={"txt-card-expiry"}>Expiry</p>
                                <p className={"card-expiry"}>{card.expMonth}/{card.expYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"card-inp-container"}>
                    <InputField
                        title={"Name on Card"}
                        placeholder={"Laurence Hoang"}
                        star={true}
                        marginTop={false}
                        onChange={(e)=>{setCard({...card, name: e.target.value})}}
                    />
                    <InputField
                        title={"Card Number"}
                        placeholder={"0000 0000 0000 0000"}
                        star={true}
                        onChange={(e)=>{ setCard({...card, number: e.target.value.match(/.{1,4}/g)})}}
                    />
                    <div className={"card-inp-3-cols"}>
                        <InputField
                            title={"Expiry Month"}
                            placeholder={"11"}
                            star={true}
                            onChange={(e)=>{setCard({...card, expMonth: e.target.value})}}
                        />
                        <InputField
                            title={"Expiry Year"}
                            placeholder={"20"}
                            star={true}
                            onChange={(e)=>{setCard({...card, expYear: e.target.value})}}
                        />
                        <InputField
                            title={"CVV"}
                            placeholder={"123"}
                            star={true}
                            onChange={(e)=>{setCard({...card, cvv: e.target.value})}}
                        />
                    </div>
                </div>
            </div>
        </FormContainer>
        <div className={"bottom-bar-container"}>
            <div className={"term-container"}>
                <input type="checkbox"/>
                <p className={"term"}>I accept terms & conditions<span className={"term-required"}>*</span></p>
            </div>
            <BottomBtnBar
                rightBtn1Txt={"Cancel"}
                rightBtn1OnClick={()=>{}}
                rightBtn2Txt={"Review Other"}
                rightBtn2OnClick={()=>{
                    setNextStep(2);
                    setCompletedStep(completedStep.concat(1));
                    setStepRefresh(!stepRefresh);
                    setData({
                        plan: tierOptions[selectedOption],
                        billing: billing,
                        card: card
                    })
                }}
                nextStep={"./Review"}
            />
        </div>
    </div>
}

// const style = {
//     base: {
//         color: "#FAB",
//         backgroundColor: "black"
//     }
// };

// function StripeForm(){
//     const stripe = useStripe();
//     const elements = useElements();
//     const Pay = async (e) => {
//         //Communicate to strip based on the card info
//         e.preventDefault();
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             // card: elements.getElement(CardElement),
//         });
//
//         if(error){
//             console.log(error)
//         } else {
//             console.log("payment", paymentMethod);
//
//             //Fetch the server to get the client secret
//             const clientSecret = await fetch("http://localhost:8888/pay");
//
//             //Use user server secret to communicate back to stripe
//             const data = stripe.confirmCardPayment(clientSecret, {
//                 payment_method: paymentMethod
//             });
//
//             if (data.success){
//                 //Unlock features
//             }
//         }
//     };
//     return(
//         <form onSubmit={Pay}>
//             Just a form...
//             {/*<CardElement*/}
//             {/*    options={{*/}
//             {/*        style: style*/}
//             {/*    }}*/}
//             {/*/>*/}
//             <CardNumberElement/>
//             <CardExpiryElement/>
//             <CardCvcElement/>
//             <button>Pay transaction</button>
//         </form>
//     )
//
// }
