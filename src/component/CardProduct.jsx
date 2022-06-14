import React from "react";
import { Link } from "react-router-dom";

const CardProduct= (props)=>{
    return(
        <div className={"w-" + props.width + " flex-none bg-white border-slate-300 border rounded-md mr-2 h-64 "}>
            <Link to={props.data.link}>
                <img src={props.data.img} alt="Gambar Produk" className="rounded-t-md object-cover w-full h-32" />
            </Link>
            <Link to={props.data.link}>
                <div className="p-2">
                    <h1 className="text-sm line-clamp-2">{props.data.name}</h1>
                    <div className="font-bold text-sm">Rp{props.data.price}</div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 mr-2" viewBox="0 0 384 512">
                            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                        </svg>
                        <div className="text-slate-500 text-xs">{props.data.location}</div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="fill-yellow-500 w-3 mr-1" viewBox="0 0 576 512">
                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                        </svg>
                        <div className="text-slate-500 text-xs">{props.data.rating} | Terjual {props.data.sold}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardProduct;