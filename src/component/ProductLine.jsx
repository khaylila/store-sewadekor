import React from "react";
import CardProduct from "../component/CardProduct";
import { Link } from "react-router-dom";

const data = [
    {
        id:1,
        img:'/img/1.jpg',
        link:"trenddecoration/dekorasi-pernikahan-6m",
        name:'Dekorasi Pernikahan 5M Dekorasi Pernikahan 5M Dekorasi Pernikahan 5M Dekorasi Pernikahan 5M Dekorasi Pernikahan 5M Dekorasi Pernikahan 5M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
    {
        id:2,
        img:'/img/3.jpg',
        link:"trenddecoration/dekorasi-pelaminan-6m",
        name:'Dekorasi Pelaminan 5M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
    {
        id:3,
        img:'/img/3.jpg',
        link:"trenddecoration/gebyok-pelaminan-6m",
        name:'Gebyok Pernikahan 5M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
    {
        id:4,
        img:'/img/4.jpg',
        link:"trenddecoration/dekorasi-dimensi-6m",
        name:'Dimensi Pernikahan 5M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
    {
        id:5,
        img:'/img/5.jpg',
        link:"trenddecoration/dekorasi-pernikahan-10m",
        name:'Dekorasi Pernikahan 10M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
    {
        id:6,
        img:'/img/6.jpg',
        link:"trenddecoration/dekorasi-pelaminan-10m",
        name:'Dekorasi Pelaminan 10M',
        price:'5.999.999',
        rating:'4.5',
        location:'Sidoarjo',
        sold:1024
    },
];

const ProductLine = (props)=>{
    return(
        <div className={props.class}>
            <div className="px-2 flex justify-between items-center">
                <div className="text-base font-bold text-slate-600">
                    {props.name}
                </div>
                <div>
                    <Link className="text-xs font-bold text-blue-500 hover:text-blue-700" to="/detail">Lihat Semua</Link>
                </div>
            </div>
            <div className="flex flex-nowrap ml-2 overflow-x-auto scrollbar-hide">
                {
                    data.map(data =>{
                        return <CardProduct key={data.id} width={36} data={data}/>
                    })
                }
            </div>
            {/* delete if production */}
            <div className="w-36 hidden"></div>
        </div>
    );
};

export default ProductLine;