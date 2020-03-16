import React from "react";
import Header from "../../../comps/Header";
import BottomBtnBar from "../../../comps/BottomBtnBar";
import {FiLock} from "react-icons/fi";


export default function Review({setNextStep, completedStep, setCompletedStep, setStepRefresh, stepRefresh, data, setData}) {
    return <div className={"review-container"}>
        <Header
            headingTxt={"Review Order"}
            subTxt={"Selected plan: " + data.plan.name}
            margin={false}
        />
        <div className={"preview-card-container"}>
            <div className={"left-card-container"}>
                <p className={"plan-name"}>{data.plan.name}</p>
                <p className={"plan-price"}>${data.plan.price}<span className={"monthly"}>/month</span></p>
                <p className={"des"}>Become a proven user to unlock these features:</p>
                {data.plan.features.map((o,i)=>{
                    return(
                        <div className={"features-container"}>
                            <img src={require("../../../media/img/feature-tick.svg")} alt={"Tick"} className={"feature-tick"}/>
                            <p className={"feature-txt"} dangerouslySetInnerHTML={{__html: o}}/>
                        </div>
                    )
                })}
                <a className={"promo"} href={"#"}>Add promo code</a>
            </div>
            <div className={"right-card-container"}>
                <p className={"order-summary"}>Order Summary</p>
                <div className={"plan-container"}>
                    <p className={"txt-plan"}>Proven {data.plan.name} Subscription (1 Month)</p>
                    <p className={"plan-amount"}>${data.plan.price}</p>
                </div>
                <div className={"tax-container"}>
                    <p className={"txt-tax"}>Taxes & Fees</p>
                    <p className={"tax-amount"}>${data.plan.price*0.05}</p>
                </div>
                <div className={"subtotal-container"}>
                    <p className={"txt-subtotal"}>Subtotal</p>
                    <p className={"subtotal-amount"}>${data.plan.price + data.plan.price*0.05}</p>
                </div>
                <div className={"total-container"}>
                    <p className={"txt-total"}>Total billed today</p>
                    <p className={"total-amount"}>${data.plan.price + data.plan.price*0.05}</p>
                </div>
            </div>
        </div>
        <div className={"bottom-bar-container"}>
            <div className={"term-container"}>
                <FiLock className={"lock-icon"}/>
                <p className={"term"}>All transactions are secured and SSL encrypted</p>
            </div>
            <BottomBtnBar
                rightBtn1Txt={"Go back"}
                rightBtn1OnClick={()=>{}}
                rightBtn2Txt={"Confirm Payment"}
                rightBtn2OnClick={()=>{
                    setNextStep(3);
                    setCompletedStep(completedStep.concat(2));
                    setStepRefresh(!stepRefresh);
                    setData(data)
                }}
                nextStep={"./Confirm"}
            />
        </div>

    </div>
}

