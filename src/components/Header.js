
import { Outlet, Link } from "react-router-dom";
function Header() {
    return <div className='dark:bg-black dark:text-slate-50 min-h-screen' >
        <header className="flex items-center py-4 justify-center w-5/6 pt-8">
            <img src="images/choosen-ones-logo.png" alt="" className='mr-auto ml-4' />
            <nav>
                <ul className='flex font-semibold text-2xl'>
                    <li className='mx-14 '><Link to='/'><div className="parent">
                        <span> HOME</span>
                        <div className="child rounded transition-all h-3 w-0  bg-red-600"></div>
                    </div></Link>
                    </li>
                    <li className='mx-14 '><Link to='/utility'> <div className="parent">
                        <span> UTILITY</span>
                        <div className="child rounded transition-all h-3 w-0  bg-red-600"></div>
                    </div></Link></li>
                    <li className='mx-14 '><Link to='/roadmap'> <div className="parent">
                        <span> ROADMAP</span>
                        <div className="child rounded transition-all h-3 w-0  bg-red-600"></div>
                    </div></Link></li>
                    <li className='mx-14 '><Link to='/team'> <div className="parent">
                        <span> TEAM</span>
                        <div className="child rounded transition-all h-3 w-0  bg-red-600"></div>
                    </div></Link></li>
                    <li className='mx-14 '><Link to='/about'> <div className="parent">
                        <span> ABOUT</span>
                        <div className="child rounded transition-all h-3 w-0  bg-red-600"></div>
                    </div></Link></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </div>
}

export default Header;