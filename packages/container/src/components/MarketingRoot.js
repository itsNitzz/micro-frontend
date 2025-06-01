import React, { useRef, useEffect } from "react";

import {mount} from 'marketing/marketing-module';

export default function MarketingRoot(){
    const ref = useRef(null)

    useEffect(()=>{
       ref.current&&mount(ref.current)
    }, [])

    return <div ref={ref} />
}