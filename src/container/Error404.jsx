import React from "react";
import {Link} from "react-router-dom";
import Footer from "../component/Footer";
import HeaderHome from "../component/header/HeaderHome";
import "../index.css";

class Error404 extends React.Component{
    render(){
        return(
            <div className="md:w-1/2 lg:w-1/3 mx-auto bg-slate-300">
                <HeaderHome/>
                <div className="h-[70vh] flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <img src="/assets/error404.png" alt="Eror 404" className="w-64" />
                            {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
                        </div>
                        <h1 className="text-2xl font-bold">Halaman tidak ditemukan</h1>
                        <Link className="text-blue-500 hover:text-blue-700" to={"/"}>kembali ke halaman utama</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Error404;