import React, { useEffect } from "react";
import { fetchGreeting, selectGreeting } from "../reduxFeatures/greetingSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Greeting() {
    const dispatch = useDispatch();
    const message = useSelector(selectGreeting);
    useEffect(() => {
     dispatch(fetchGreeting());
    });

    return (
        <div>
            <div>this will show many greeting </div>
            <h1>Greeting: {message.greeting}</h1>
        </div>
    );
}