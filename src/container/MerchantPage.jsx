import React,{Component, Fragment} from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import Footer from "../component/Footer";
import HeaderMerchant from "../component/header/HeaderMerchant";
import "../index.css";

class MerchantPage extends Component{
    render(){
        return(
            <Fragment>
                <HeaderMerchant />
                    {/* // <!-- content start --> */}
                    <section id="content" className="bg-white mt-14">
                        <div className="container mx-auto">
                            <div className="flex p-4 text-xs border-b border-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 mr-2" viewBox="0 0 384 512">
                                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path
                                        d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                                </svg>
                                <p className="text-slate-900">Dikirim ke <span className="font-bold">Alamat Rumah</span></p>
                            </div>
                            <div className="p-2 grid grid-cols-2 gap-2">
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                                <CardProduct width={"full"} data={{id:5,img:'/img/5.jpg',link:"trenddecoration/dekorasi-pernikahan-10m",name:'Dekorasi Pernikahan 10M',price:'5.999.999',rating:'4.5',location:'Sidoarjo',sold:1024
                                }}/>
                            </div>
                        </div>
                    </section>
                    {/* <!-- content end --> */}
                <Footer/>
            </Fragment>
        );
    }
}

export default MerchantPage;