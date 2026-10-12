const MCPInfo = () => {
  return (
    <section id="mcp-info" className="relative z-10 h-screen w-full overflow-hidden bg-[#141414]">
      <div className="flex h-full w-full flex-col justify-center overflow-hidden rounded-b-4xl bg-white text-center">
        <div data-reveal className="text-black text-7xl justify-center text-center align-center w-150 mx-auto top-100 font-extrabold text-000">
          <h1>Find what works.</h1>
          <h1>Design what's next.</h1>
        </div>
        <div className="mt-10" data-reveal>
          <p>Mobbin started in 2018 as Jiho's Dropbox folder of screenshots. It's still that folder at heart, just 621,500 screens bigger.</p>
        </div>

        <div data-reveal="scale">
          <button className="rounded-full m-5 p-3 px-7 bg-black text-white text-xl font-normal cursor-pointer">Join for free</button>
          <button className="rounded-full p-3 px-7 bg-white text-black border text-xl font-medium cursor-pointer">See our plans →</button>
        </div>
      </div>
    </section>
    
  )
}

export default MCPInfo