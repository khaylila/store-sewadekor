import React from "react";
import "../../index.css";

const HeaderMerchant = ()=>{
    return(
        // <!-- header start -->
        <header className="bg-[#00c2cb] top-0 left-0 w-full md:left-1/2 md:w-1/2 lg:left-1/3 lg:w-1/3 flex items-center z-10 border-b border-slate-300 fixed">
            <div className="container mx-auto p-2 pb-2">
                <div className="flex items-center">
                    <div className="w-1/12 pr-2 flex justify-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white" viewBox="0 0 448 512">
                                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                <path
                                    d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-9/12">
                        <div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="fill-gray-500 sm:text-sm"><svg className="w-3"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                            <path
                                                d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                                        </svg></span>
                                </div>
                                <input type="text" name="price" id="price"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-2 sm:text-sm border-gray-300 rounded-md py-1"
                                    placeholder="Cari dekorasi pelaminan"></input>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <div className="flex items-center justify-between px-2">
                            <div className="w-5 h-5 relative">
                                <span
                                    className="w-5 h-[18px] text-white text-[10px] bg-red-600 rounded-md absolute -right-[10px] -top-[10px] text-center">
                                    1
                                </span>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white" viewBox="0 0 576 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                        <path
                                            d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                    </svg>
                                </button>
                            </div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white" viewBox="0 0 448 512">
                                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path
                                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // <!-- header end -->
        );
};

export default HeaderMerchant;