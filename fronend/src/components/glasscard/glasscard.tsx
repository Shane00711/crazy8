import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./glasscard.scss"
export const GlassCard = (props: any) => {
    const {options, ...rest} = props;
    const card = useRef({} as any);
    useEffect(() => {
         VanillaTilt.init(card.current, options);
    }, [options])
    return(
        <div className="glasscard" ref={card}>
            <div className="glasscontent">
                {rest.image}
                {rest.header}
                {rest.para}
                {rest.anchor}
            </div>
        </div>
    );
}