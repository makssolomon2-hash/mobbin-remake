import React from 'react'

const InfiniteScroll = () => {
    return (
        <section className="infinite-scroll h-[1000px] w-full flex justify-center flex-col text-center ">
            <div className="text-center">
                <h1 className="text-6xl w-1/3 mx-auto  font-extrabold text-black">Find design patterns in seconds.</h1>
                <nav className="relative w-1/3 mx-auto flex items-center justify-between
                 text-black text-[1.1rem] font-semibold mt-10 px-1.5 py-1 bg-gray-100 rounded-full ">
                    <button className="bg-white p-1 rounded-full px-4">Screens</button>
                    <button className="text-gray-400">UI Elements</button>
                    <button className="text-gray-400">Flows</button>
                    <button className="text-gray-400">Text in Screenshots</button>
                </nav>
                <div className="loop">

                </div>
            </div>

        </section>
    )
}
export default InfiniteScroll
