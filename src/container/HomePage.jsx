import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import Footer from "../component/Footer";
import HeaderHome from "../component/header/HeaderHome";
import ProductLine from "../component/ProductLine";
import "../index.css";

class HomePage extends React.Component{
    render(){
        return(
            <Fragment>
                <HeaderHome />
                    <section id="content">
                        <div className="container mx-auto">
                            <div className="m-2 flex justify-between rounded-md bg-slate-200">
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-800 w-8" viewBox="0 0 512 512">
                                            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                            <path
                                                d="M480 32C497.7 32 512 46.33 512 64C512 81.67 497.7 96 480 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H480zM32 128H480V416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H352V352C352 298.1 309 256 256 256C202.1 256 160 298.1 160 352V480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416V128z" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Dekorasi Pelaminan</p>
                                </div>
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM80.72 256H79.63c-9.078 0-16.4-8.011-15.56-17.34C72.36 146 146.5 72.06 239.3 64.06C248.3 63.28 256 70.75 256 80.09c0 8.35-6.215 15.28-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4C95.4 249.6 88.77 256 80.72 256zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96s96 43 96 96S309 351.1 256 351.1zM256 224C238.3 224 224 238.2 224 256s14.3 32 32 32c17.7 0 32-14.25 32-32S273.7 224 256 224z"/></svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Alat-alat Pesta</p>
                                </div>
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path d="M492.7 42.75C517.7 67.74 517.7 108.3 492.7 133.3L436.3 189.7L322.3 75.72L378.7 19.32C403.7-5.678 444.3-5.678 469.3 19.32L492.7 42.75zM44.89 353.2L299.7 98.34L413.7 212.3L158.8 467.1C152.1 473.8 143.8 478.7 134.6 481.4L30.59 511.1C22.21 513.5 13.19 511.1 7.03 504.1C.8669 498.8-1.47 489.8 .9242 481.4L30.65 377.4C33.26 368.2 38.16 359.9 44.89 353.2zM249.4 103.4L103.4 249.4L16 161.9C-2.745 143.2-2.745 112.8 16 94.06L94.06 16C112.8-2.745 143.2-2.745 161.9 16L181.7 35.76C181.4 36.05 181 36.36 180.7 36.69L116.7 100.7C110.4 106.9 110.4 117.1 116.7 123.3C122.9 129.6 133.1 129.6 139.3 123.3L203.3 59.31C203.6 58.99 203.1 58.65 204.2 58.3L249.4 103.4zM453.7 307.8C453.4 308 453 308.4 452.7 308.7L388.7 372.7C382.4 378.9 382.4 389.1 388.7 395.3C394.9 401.6 405.1 401.6 411.3 395.3L475.3 331.3C475.6 330.1 475.1 330.6 476.2 330.3L496 350.1C514.7 368.8 514.7 399.2 496 417.9L417.9 496C399.2 514.7 368.8 514.7 350.1 496L262.6 408.6L408.6 262.6L453.7 307.8z"/></svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Rias Pengantin</p>
                                </div>
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path d="M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"/></svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Foto & Video</p>
                                </div>
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/></svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Catering</p>
                                </div>
                                <div className="w-16 flex flex-col p-2">
                                    <div className="flex justify-center h-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-800 w-6" viewBox="0 0 384 512">
                                            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                            <path
                                                d="M256 0v128h128L256 0zM288 256H96v64h192V256zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM320 440c0 4.375-3.625 8-8 8h-80C227.6 448 224 444.4 224 440v-16c0-4.375 3.625-8 8-8h80c4.375 0 8 3.625 8 8V440zM320 240v96c0 8.875-7.125 16-16 16h-224C71.13 352 64 344.9 64 336v-96C64 231.1 71.13 224 80 224h224C312.9 224 320 231.1 320 240z" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] text-center mt-1">Undangan</p>
                                </div>
                            </div>
                            <div className="flex whitespace-nowrap overflow-x-auto scrollbar-hide">
                                <div className="flex-none w-96 m-2 rounded-lg bg-slate-300">
                                    <Link to="/promo/1">
                                        <img src="/img/2.jpg" alt="Promo1" className="rounded-lg w-full h-36 object-cover" />
                                    </Link>
                                </div>
                                <div className="flex-none w-96 m-2 rounded-lg bg-slate-300">
                                    <Link to="/promo/2">
                                        <img src="/img/14.jpg" alt="Promo2" className="rounded-lg w-full h-36 object-cover" />
                                    </Link>
                                </div>
                            </div>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                            <ProductLine kelas={"my-5"} name="Terakhir Dipesan"/>
                        </div>
                    </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;