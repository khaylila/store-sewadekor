import React, { Fragment } from "react";
import LinkShare from "./LinkShare";
import { Link } from "react-router-dom";

const SectionShare= (props)=>{
    return(
        <Fragment>
            <div className="w-full md:w-1/2 lg:w-1/3 h-screen bg-black z-10 fixed top-0 left-0 md:left-1/4 lg:left-1/3 opacity-30"></div>
            <section id="share" className="w-full md:w-1/2 lg:w-1/3 h-5/6 fixed bottom-0 left-0 md:left-1/4 lg:left-1/3 bg-white p-4 rounded-t-lg z-20">
                <div className="flex flex-nowrap text-slate-900">
                    <button className="w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </button>
                    <h1 className="text-2xl font-bold ml-2">Bagikan produk ini</h1>
                </div>

                <div className="mt-4 border border-slate-300 rounded-md p-2">
                    <div className="flex items-center">
                        <div className="w-1/3 border border-slate-300 mr-2 rounded-md">
                            <img src="/img/1.jpg" className="rounded-md aspect-square object-cover" alt="imgThumbnail" />
                        </div>
                        <div className="w-2/3">
                            <h1 className="text-base font-bold text-slate-900">Dekorasi Pernikahan 6M</h1>
                            <p className="text-xs text-slate-500">Trend Decoration</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-4 px-5 flex flex-wrap justify-center items-start">
                    <LinkShare title="Whatsapp" link={"https://api.whatsapp.com/send?text=Coba%20cek%20ini%2C%20deh%3A%20%22Samsung%20Tab%20A8%202022%204%2F128GB%20LTE%20-%20silver%22%20Rp4.242.600%20di%20toko%20Hyperion%20Mobile%27s%20Tokopedia.%20Bisa%20Bebas%20Ongkir%2C%20lho.+https%3A%2F%2Ftokopedia.link%2FKl4bL0jWSqb"} svg={<svg role="img" viewBox="0 0 24 24" className="fill-[#25D366] w-8 aspect-square" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>}></LinkShare>

                    <LinkShare title="Facebook" link={"https://m.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftokopedia.link%2F2y4yA3OWSqb&quote=Coba+cek+ini%2C+deh%3A+%22Samsung+Tab+A8+2022+4%2F128GB+LTE+-+silver%22+Rp4.242.600+di+toko+Hyperion+Mobile%27s+Tokopedia.+Bisa+Bebas+Ongkir%2C+lho."} svg={<svg role="img" viewBox="0 0 24 24" className="fill-[#1877F2] w-8 aspect-square" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}></LinkShare>

                    <LinkShare title="Line" link={"https://line.me/R/msg/text/?Coba%20cek%20ini,%20deh:%20%22Samsung%20Tab%20A8%202022%204/128GB%20LTE%20-%20silver%22%20Rp4.242.600%20di%20toko%20Hyperion%20Mobile%27s%20Tokopedia.%20Bisa%20Bebas%20Ongkir,%20lho.%20https://tokopedia.link/EWxnADVWSqb"} svg={<svg role="img" viewBox="0 0 24 24" className="fill-[#00C300] w-8 aspect-square" xmlns="http://www.w3.org/2000/svg"><title>LINE</title><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>}></LinkShare>

                    <LinkShare title="Twitter" link={"https://twitter.com/intent/tweet?url=https%3A%2F%2Ftokopedia.link%2Fb8OX4Y1WSqb&text=Coba+cek+ini%2C+deh%3A+%22Samsung+Tab+A8+2022+4%2F128GB+LTE+-+silver%22+Rp4.242.600+di+toko+Hyperion+Mobile%27s+Tokopedia.+Bisa+Bebas+Ongkir%2C+lho.&via=Tokopedia&original_referer=https%3A%2F%2Fwww.tokopedia.com%2Fhyperionmobiles%2Fsamsung-tab-a8-2022-4-128gb-lte-silver&hashtags=Tokopedia"} svg={<svg role="img" viewBox="0 0 24 24" className="w-7 aspect-square fill-[#1DA1F2]" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}></LinkShare>

                    <LinkShare title="Telegram" link={"https://t.me/share/url?text=Coba%20cek%20ini,%20deh:%20%22Samsung%20Tab%20A8%202022%204/128GB%20LTE%20-%20silver%22%20Rp4.242.600%20di%20toko%20Hyperion%20Mobile%27s%20Tokopedia.%20Bisa%20Bebas%20Ongkir,%20lho.&url=https://tokopedia.link/OXrDj9aXSqb"} svg={<svg role="img" viewBox="0 0 24 24" className="w-8 aspect-square fill-[#26A5E4]" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>}></LinkShare>

                    <LinkShare title="Copy Link" link={"https://telegram.org"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-slate-700 aspect-square" viewBox="0 0 640 512"><path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/></svg>}></LinkShare>

                    <LinkShare title="Message" link={"sms:?body=hello%20world"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-slate-700 aspect-square" viewBox="0 0 512 512"><path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/></svg>}></LinkShare>

                    <LinkShare title="Email" link={"mailto:?body=hello%20world&subject=hello%20world"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-slate-700 aspect-square" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>}></LinkShare>
                </div>
            </section>
        </Fragment>
    );
};

export default SectionShare;