import React, {useState} from "react";
import Header from "../../../comps/Header";
import Tiers from "../../../comps/Tiers";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_GYUauDShkSZSJ0MAUEnMNaji00EvOPY0m8');


export default function Selection() {
    let [selectedOption, setSelectedOption] = useState(1);
    const tierOptions = [{
        name: "Basic",
        price: 49,
        features: ["<b>1</b> User", "Up to <b>2</b> projects per user", "Up to <b>5</b> vendors per project phase", "View lowest bid"],
        recommended: false
    },{
        name: "Small Business",
        price: 109,
        features: ["<b>2</b> Users", "Up to <b>10</b> projects per user", "Up to <b>15</b> vendors per project phase", "View all bids"],
        recommended: true
    },{
        name: "Enterprise",
        price: 199 ,
        features: ["<b>Unlimited</b> Users", "<b>Unlimited</b> projects per user", "<b>Unlimited</b> vendors per project phase", "View all bids"],
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
            />
            <InputField
                title={"Address Line 1"}
                placeholder={"Ex: 3700 Willingdon Ave"}
                star={true}
            />
            <InputField
                title={"Address Line 2"}
                placeholder={"Ex: Building SE14"}
            />
            <div className={"horizontal-input-3"}>
                <InputField
                    title="City"
                    placeholder="Ex: Burnaby"
                    star={true}
                />
                <InputField
                    title="Province"
                    placeholder="Ex: BC"
                    star={true}
                />
                <InputField
                    title="Postal Code"
                    placeholder="Ex: V5G 3H2"
                    star={true}
                    onChange={(e)=>{}}
                />
            </div>
        </FormContainer>
        <FormContainer
            formHeading={"Credit Card Information"}
            col={1}
            >
            <Elements stripe={stripePromise}>
                <StripeForm/>
            </Elements>
        </FormContainer>
    </div>
}

const style = {
    base: {
        color: "#FAB",
        border: "Solid 1px Black"
    }
};

function StripeForm(){
    const stripe = useStripe();
    const elements = useElements();
    const Pay = async (e) => {
        //Communicate to strip based on the card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if(error){
            console.log(error)
        } else {
            console.log("payment", paymentMethod);

            //Fetch the server to get the client secret
            const clientSecret = await fetch("http://localhost:8888/pay");

            //Use user server secret to communicate back to stripe
            const data = stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod
            });

            if (data.success){
                //Unlock features
            }
        }
    };
    return(
        <form onSubmit={Pay}>
            Just a form...
            <CardElement
                options={{
                    style: style
                }}
            />
            <button>Pay transaction</button>
        </form>
    )

}
