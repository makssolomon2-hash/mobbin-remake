import React from 'react'
import '../App.css';
import {scrollImages} from "../constants/index.js";


const InfiniteScroll = () => {
    return (
        <section className="infinite-scroll h-[100%] w-full flex justify-center flex-col text-center">
            <div className="text-center mt-30">
                <h1 className="text-6xl w-1/3 mx-auto  font-extrabold text-black">Find design patterns in seconds.</h1>

                {/*ADD MAP FOR LINKS TOO - !!!*/}

                <nav className="inf-nav relative mb-20 w-1/3 mx-auto flex items-center justify-between
                 text-black text-[1.1rem] font-semibold mt-10 px-1.5 py-1 bg-gray-100 rounded-full ">
                    <button className="bg-white p-1 rounded-full px-4">Screens</button>
                    <button className="text-gray-400">UI Elements</button>
                    <button className="text-gray-400">Flows</button>
                    <button className="text-gray-400">Text in Screenshots</button>
                </nav>
            </div>
            <div className=" w-full overflow-x-auto overflow-y-hidden flex flex-nowrap gap-6 px-4 no-scrollbar">
                    <div className="flex flex-nowrap gap-6 px-4">
                        {scrollImages.map((image) => (
                            <div key={image.index} className="flex flex-col items-center flex-shrink-0">
                                <h2 className="font-semibold text-lg mb-5" >{image.h2}</h2>
                                <img
                                    src={image.src}
                                    alt={`Screenshot ${image.index + 1}`}
                                    className="h-[600px] w-auto rounded-4xl shadow-lg object-cover"
                                    style={{ flexShrink: 0, maxWidth: "none" }}
                                />
                            </div>

                        ))}
                    </div>
            </div>
            <div className="mt-50">
                <h1>Welcome</h1>
            </div>

        </section>
    )
}
export default InfiniteScroll
