
import React, { useContext, useEffect, useRef } from "react";

import { MyContext } from "../Context/context";
export function Input(props) {

    const { onChange } = useContext(MyContext);
    const inputReference = useRef(null);



    useEffect(() => {
        if (props.name === props.invalid) {
            inputReference.current.focus()
        }

    }, [props.invalid, props.name])


    return (

        <div className={`flex flex-col ${props.ad ? " sm:col-span-2" : ""}   `} >
            <label htmlFor={props.name} className="font-semibold text-[.8rem] ">
                {props.label}
            </label>
            <input

                onChange={onChange}
                type={props.type}
                name={props.name}
                id={props.name}
                ref={inputReference}

                value={props.value}
                className={`border-[1.8px] rounded-lg pl-5 py-4 placeholder text-gray font-semibold mt-2 
                 ${props.error && props.name === props.invalid ? "border-red-600" : "border-stone-300"} `}
                placeholder={props.placeho}
            />
            <p className="text-[.7rem] text-red-600 font-semibold">{props.name === props.invalid ? props.error : ''}</p>
        </div>


    );
}