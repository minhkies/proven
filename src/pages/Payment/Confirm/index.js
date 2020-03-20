import React from "react";
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import BottomBtnBar from "../../../comps/BottomBtnBar";
import braintree from "braintree";
import {Link} from "react-router-dom";
// import express from "express";
// import bodyParser from "body-parser";
// import pino from "express-pino-logger";

import Stripe from 'stripe';


export default function Confirm({setNextStep, completedStep, setCompletedStep, setStepRefresh, stepRefresh, sdata, setData}) {


    let data = {
        plan: {
            name: "Small Business",
            price: 109,
            des: "Built for small businesses to streamline their projects",
            features: ["<b>2</b> Users", "Up to <b>10</b> projects per user", "Up to <b>15</b> vendors per project phase", "View <b>all</b> bids"],
            recommended: true
        },
        bill: {
            name: "Laurence Hoang",
            address_1: "431 Ewen Ave    ",
            address_2: "",
            city: "New Westminster",
            province: "BC",
            zip: "V3M 5B9"
        },
        card: {
            name: "Laurence Hoang",
            number: ["4242", "4242", "4242", "4242"],
            expMonth: 11,
            expYear: 20,
            cvv: 123
        }
    };

    let stripe = require('stripe-client')("pk_test_GYUauDShkSZSJ0MAUEnMNaji00EvOPY0m8");

    let information = {
        card: {
            number: String(data.card.number.join("")),
            exp_month: data.card.expMonth,
            exp_year: data.card.expYear,
            cvc: String(data.card.cvv),
            name: data.card.name,
            address_line1: data.bill.address_1,
            address_line2: data.bill.address_2,
            address_city: data.bill.city,
            address_state: data.bill.province,
            address_zip: data.bill.zip,
            address_country: "Canada"
        },
    };

    // const stripe = new Stripe('pk_test_GYUauDShkSZSJ0MAUEnMNaji00EvOPY0m8');
    // const onTokens = async () => {
    //     const tokens = await stripe.tokens.create(information);
    //     console.log(tokens);
    // };
    //
    // onTokens();

    // const onTokens = async () => {
    //
    //     console.log("huhuhu");
    //
    //     const tokens = await stripe.tokens.create(information, function (status, response) {
    //         console.log("hhaha", status);
    //         console.log("hihi", response);
    //     });
    //
    //     console.log("hehe", tokens)
    // };
    //
    // onTokens();


    // const onPayment = () => {
    //     stripe.createToken(information).then((response)=>{
    //         console.log(response);
    //         if (response.error){
    //             console.log("error", response.error)
    //         } else {
    //             console.log("token", response.id)
    //         }
    //     });
    //
    // };

    // onPayment();


    const onPayment = async () => {
        let card = await stripe.createToken(information);
        console.log("hihihihi", card)
    };

    onPayment();

    const changeTier = () => {
        let currentTier = 0;
        let profile = JSON.parse(localStorage.getItem("profile"));
        if (data.plan.name==="Small Business"){
            currentTier=2
        } else if (data.plan.name==="Basic"){
            currentTier=1
        } else {
            currentTier=3
        }
        profile.tier = currentTier;
        localStorage.setItem("profile", JSON.stringify(profile));
    };

    changeTier();

    return <div className={"confirm-container"}>
        <div className={"light-box"}/>
        <div className={"confirm-popup-container"}>
            <p className={"thanks"}>Thank You, <span className={"name"}>Laurence!</span></p>
            <img src={require("../../../media/img/confirmed-check.svg")} alt={"Confirmed"} className={"confirm-img"}/>
            <p className={"confirm-des"}>Your payment has been processed successfully.<br/>A confirmation email has been sent to<br/><span className={"confirm-email"}>laurenchoang@gmail.com</span></p>
            <Link to={"../Dashboard"} className={"go-to-dash"}>Back to Dashboard</Link>
        </div>

    </div>
}
