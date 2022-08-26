

function Home() {
    return <div>
        <div className="justify-around absolute bottom-0 w-full flex" >
            <div className="contents">
                <svg className="fixed " width="800" height="800" viewBox="0 0 707 707" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="purple-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
                        <feFlood result="flood" floodColor="#ff0000" floodOpacity="1"></feFlood>
                        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                        <feMorphology in="mask" result="dilated" operator="dilate" radius="1"></feMorphology>
                        <feGaussianBlur in="dilated" result="blurred" stdDeviation="20"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blurred"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <circle style={{ filter: `url(#purple-glow)` }} cx="353.5" cy="353.5" r="300" stroke="#E40037" strokeWidth="37" />
                </svg>
                <img className="z-10 relative" src="images/home/choosen-ones-home.png" alt="" />
            </div>

        </div>
        <div className="bottom- text-5xl rotate-90  top-1/3 pt-4 absolute left-full text-red-600 origin-top-left w-1/2">
            <p>WE ARE THE ONES WHO </p> <div className="h-5"></div>
            <p className="font-bold">&nbsp;&nbsp;&nbsp; REFUSED TO GIVE UP.</p>
        </div>
    </div >
}

export default Home;