import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Footer from "../component/Footer";
import "../index.css";
// theme SplideJs
import '@splidejs/react-splide/css';
import HeaderDetail from "../component/header/HeaderDetail";
import ProductLine from "../component/ProductLine"

class DetailPage extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="overflow-y-hidden max-h-screen">
                    <HeaderDetail />
                    <section id="content">
                        <div className="container mx-auto">
                            <div className="bg-white">
                                <Splide aria-label="Product Image">
                                    <SplideSlide>
                                        <img className="aspect-square object-cover" src="/img/3.jpg" alt="ImageProduct1"/>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img className="aspect-square object-cover" src="/img/4.jpg" alt="ImageProduct2"/>
                                    </SplideSlide>
                                </Splide>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h1 className="font-bold text-3xl">Rp5.999.999</h1>
                                        </div>
                                        <button className="w-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                                        </button>
                                    </div>
                                    <p className="text-sm">Dekorasi Pernikahan 6M</p>
                                    <div className="flex items-center text-xs">
                                        <p className=" mr-1">Terjual <span>23</span></p>
                                        <button className="flex items-center border border-white rounded-md p-2 mr-1 "><svg className="w-4 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><b className="mr-1">5</b>(4)</button>
                                        <button className="bg-transparent p-2 rounded-md flex items-center border border-white mr-1">
                                        <b className="mr-1">Foto Pembeli</b>
                                        <span className="text-slate-600">(50)</span></button>
                                        <button className="flex items-center border border-white rounded-md p-2 mr-1 "><b className="mr-1">Diskusi</b>(4)</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 mt-2 bg-white">
                                <div className="flex justify-between items-center text-sm">
                                    <div>
                                        <span className="font-bold mr-1">Pilih varian:</span><span className="text-slate-500">6 warna</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2" viewBox="0 0 256 512">
                                            {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                                            <path
                                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex text-xs mt-2 overflow-x-auto scrollbar-hide">
                                    <button className="border rounded-md bg-blue-200 border-blue-700 p-2 text-blue-700 mr-2">
                                        Putih
                                    </button>
                                    <button className="border rounded-md border-blue-700 p-2 text-blue-700 mr-2">
                                        Hitam
                                    </button>
                                    <button className="border rounded-md border-blue-700 p-2 text-blue-700 mr-2">
                                        Hijau
                                    </button>
                                    <button className="border rounded-md border-blue-700 p-2 text-blue-700 mr-2">
                                        Coklat
                                    </button>
                                    <button className="border rounded-md border-blue-700 p-2 text-blue-700 mr-2">
                                        Biru
                                    </button>
                                    <button className="border rounded-md border-blue-700 p-2 text-blue-700">
                                        Orange
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-4 mt-2">
                                <div className="flex items-center">
                                    <div className="pr-2">
                                        <img src="../img/trenddecoration.png" alt="Logo Nama Toko" className="rounded-full w-16 border border-slate-300"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-base font-bold">Trend Decoration</div>
                                        <div className="text-xs text-slate-600 flex flex-nowrap"><svg className="w-1 fill-green-500 mr-1"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                                <path
                                                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                                            </svg><span className="font-bold text-green-500 mr-1">Online</span><svg
                                                className="w-1 fill-slate-500 mr-1" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                                <path
                                                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                                            </svg>Sidoarjo
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="flex flex-wrap items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-700 mr-2 w-4"
                                                    viewBox="0 0 576 512">
                                                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                                    <path
                                                        d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                                                </svg>
                                                <div className="mr-1">4.6</div>
                                                <span className="text-slate-500 text-sm">rata-rata ulasan</span>
                                            </div>
                                            <div className="flex flex-wrap items-center">
                                                <div className="w-4 flex justify-center mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3/4 fill-slate-700"
                                                        viewBox="0 0 512 512">
                                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                                        <path
                                                            d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                                                    </svg>
                                                </div>
                                                <div className="mr-1">11</div>
                                                <span className="text-slate-500 text-sm">pesanan diproses</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className="text-green-500 rounded-md p-2 border border-green-500 font-bold text-xs">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 mt-2">
                                <h1 className="font-bold">Detail Produk</h1>
                                <h2 className="text-slate-500 text-xs line-clamp-1">Dekorasi Pelaminan 6M Baru</h2>
                                <div className="text-xs mt-3">
                                    <div className="flex border-b leading-7">
                                        <div className="text-slate-600 w-1/2">Kondisi</div>
                                        <div className="text-slate-800 w-1/2">Bekas</div>
                                    </div>
                                    <div className="flex border-b leading-7">
                                        <div className="text-slate-600 w-1/2">Min. Pemesanan</div>
                                        <div className="text-slate-800 w-1/2">1 Buah</div>
                                    </div>
                                    <div className="flex border-b leading-7">
                                        <div className="text-slate-600 w-1/2">Etalase</div>
                                        <div className="text-slate-800 w-1/2">
                                            <Link className="font-bold text-blue-500" to="#">
                                                Dekorasi Gebyok
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex border-b leading-7">
                                        <div className="text-slate-600 w-1/2">Kategori</div>
                                        <div className="text-slate-800 w-1/2">
                                            <Link className="font-bold text-blue-500" to="#">
                                                Dekorasi Pelaminan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs line-clamp-3 mt-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit illo sunt repudiandae fuga, ad
                                    quibusdam non officia assumenda, fugiat asperiores neque maiores, nam velit aperiam quam! Rem
                                    tempora ipsam repudiandae odio perspiciatis quisquam error et tenetur in voluptates qui quo
                                    reprehenderit nihil nemo, possimus corporis debitis fugit consequatur aut, ab repellat sed optio
                                    odit! Molestias eaque totam esse voluptatibus perferendis quod itaque dolorem repellat, quia ipsa?
                                    Sed adipisci consequuntur enim assumenda porro tenetur! Quaerat, est. Distinctio id voluptate vero,
                                    tempora sint nisi aspernatur ex natus asperiores veniam enim atque quo at, dolorem dolor itaque.
                                    Possimus deleniti libero pariatur sequi doloremque?
                                </div>
                                <span><Link to="#" className="text-xs text-blue-500 hover:text-blue-700">Selengkapnya</Link></span>
                            </div>
                            <ProductLine class={"bg-white p-4 mt-2"} name={"Lainnya di sini"}/>
                            <div className="bg-white p-4 mt-2">
                                <div className="flex justify-between">
                                    <h1 className="font-bold">Ulasan pembeli</h1>
                                    <a href="#" className="font-bold text-xs text-blue-500 hover:text-blue-700">Lihat semua</a>
                                </div>
                                <h2 className="text-slate-500 text-xs line-clamp-1">Dekorasi Pelaminan 6M Baru</h2>
                                <div className="flex mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 mr-1 fill-yellow-500" viewBox="0 0 576 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                        <path
                                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span className="font-bold mr-1">4.6</span>
                                    <div className="flex items-center">
                                        <span className="text-slate-500 text-xs mr-1">75 rating</span>•<span
                                            className="text-slate-500 text-xs ml-1">44
                                            ulasan</span>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className={"rounded-md mr-1 bg-no-repeat bg-cover w-14 aspect-square"} style={{backgroundImage: `url("/img/1.jpg")`}}>
                                    </div>
                                    <div className="rounded-md mr-1 bg-no-repeat bg-cover w-14 aspect-square" style={{backgroundImage: `url("/img/2.jpg")`}}>
                                    </div>
                                    <div className="rounded-md mr-1 bg-no-repeat bg-cover w-14 aspect-square" style={{backgroundImage: `url("/img/3.jpg")`}}>
                                    </div>
                                    <div className="rounded-md mr-1 bg-no-repeat bg-cover w-14 aspect-square" style={{backgroundImage: `url("/img/4.jpg")`}}>
                                    </div>
                                    <div className="relative rounded-md mr-1 bg-no-repeat bg-cover w-14 aspect-square" style={{backgroundImage: `url("/img/5.jpg")`}}>
                                        <div className="rounded-md mix-blend-multiply h-full w-full bg-slate-400">
                                        </div>
                                        <span className="left-1/3 top-1/3 mx-auto absolute text-white text-xs font-bold">+37</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white mt-2">
                                <div className="px-4 pt-4">
                                    <h1 className="font-bold">Diskusi</h1>
                                    <h2 className="text-slate-500 text-xs line-clamp-1">Dekorasi Pelaminan 6M Baru</h2>
                                </div>
                                <div className="text-xs">
                                    <div className="border-b border-slate-300 p-4">
                                        <div>
                                            <div className="flex items-center">
                                                <img src="/img/logo.png" alt="discuss1" className="rounded-full border border-slate-300 w-8 mr-1 aspect-square"/>
                                                <div><span className="font-bold">Sewadekor.id</span> • <span className="text-slate-700">2
                                                        Jun</span>
                                                </div>
                                            </div>
                                            <p className="mt-1 text-slate-900 line-clamp-2">Lorem ipsum dolor sit amet consectetur
                                                adipisicing
                                                elit. Voluptatum, delectus.</p>
                                        </div>
                                        <div className="ml-4 mt-2 pl-4 border-l-2 border-slate-300">
                                            <div>
                                                <div className="flex items-center">
                                                    <img src="/img/trenddecoration.png" alt="discuss1" className="rounded-full border border-slate-300 w-8 mr-1 aspect-square"/>
                                                    <div><span className="font-bold">Trend Decoration</span> • <span
                                                            className="text-slate-700">2
                                                            Jun</span>
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-slate-900 line-clamp-2">Lorem ipsum dolor sit amet consectetur
                                                    adipisicing
                                                    elit. Voluptatum, delectus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-slate-300 p-4">
                                        <div>
                                            <div className="flex items-center">
                                                <img src="/img/logo.png" alt="discuss1" className="rounded-full border border-slate-300 w-8 mr-1 aspect-square"/>
                                                <div><span className="font-bold">Sewadekor.id</span> • <span className="text-slate-700">2 Jun</span>
                                                </div>
                                            </div>
                                            <p className="mt-1 text-slate-900 line-clamp-2">Lorem ipsum dolor sit amet consectetur
                                                adipisicing
                                                elit. Voluptatum, delectus.</p>
                                        </div>
                                        <div className="ml-4 mt-2 pl-4 border-l-2 border-slate-300">
                                            <div>
                                                <div className="flex items-center">
                                                    <img src="/img/trenddecoration.png" alt="discuss1" className="rounded-full border border-slate-300 w-8 mr-1 aspect-square"/>
                                                    <div><span className="font-bold">Trend Decoration</span> • <span
                                                            className="text-slate-700">2
                                                            Jun</span>
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-slate-900 line-clamp-2">Lorem ipsum dolor sit amet consectetur
                                                    adipisicing
                                                    elit. Voluptatum, delectus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <a href="#" className="font-bold text-xs text-blue-500 hover:text-blue-700">Lihat Semua (25)</a>
                                </div>
                            </div>
                            <ProductLine class={"bg-white p-4 mt-2"} name={"Produk terkait"}/>
                            <ProductLine class={"bg-white p-4 mt-2"} name={"Rekomendasi buat kamu"}/>
                        </div>
                    </section>
                    <Footer/>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 h-screen bg-black z-10 fixed top-0 left-0 md:left-1/4 lg:left-1/3 opacity-30"></div>
                <section id="share" className="w-full md:w-1/2 lg:w-1/3 h-5/6 fixed bottom-0 left-0 md:left-1/4 lg:left-1/3 bg-white p-4 rounded-t-lg z-20">
                    <div className="flex flex-nowrap">
                        <button className="w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                        <h1 className="text-2xl font-bold ml-2">Bagikan produk ini</h1>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default DetailPage;