import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LinkShare= (props)=>{
    return(
        <Fragment>
            <a className="m-2 p-2" href={props.link}>
                <div className="border rounded-full w-14 flex justify-center aspect-square">
                    {props.svg}
                </div>
                <p className="text-xs text-center text-slate-500">{props.title}</p>
            </a>
        </Fragment>
    );
};

export default LinkShare;