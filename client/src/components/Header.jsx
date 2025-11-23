import React from 'react'
import 'boxicons/css/boxicons.min.css';
function Header() {
//function to help toggle the mobile menu
    function toggleMobilmenu() {
        //gets the menu element by its id
        const mobileMenu = document.getElementById('mobileMenu')

    //here we are checking to see if the classlist has hidden if it does we remove it, if not we add it
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden')
        }

        else{
            mobileMenu.classList.add('hidden')
        }
    }

    return (
        <header className='flex justify-between items-center py-4 px-4 lg:px-20'>

            <h1 data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
                A.RIMONEY
            </h1>

            {/* DESKTOP NAVIGATION */}

        <nav className='hidden md:flex items-center gap-12'>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>COMPANY</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>FEATURES</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>RESOURCES</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>ABOUT</a>
        </nav>
        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none
        font-medium transition-all duration-500 hover:bg-[white] cursor-pointer z-50'>
            SIGNIN
        </button>

        {/* Mobile menu button */}
        <button onClick={toggleMobilmenu} className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu'></i>
        </button>
        {/* Mobile menu hidden for mobile use only */}
        <div id='mobileMenu' className='hidden fixed top-16 right-0 bottom-0 left-0 p-5 md:hidden z-40 bg-black opacity-70 backdrop-blur-md'>
            <nav className='flex flex-col gap-6 items-center'>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>COMPANY</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>FEATURES</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>RESOURCES</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"href='#'>ABOUT</a>
            </nav>
        </div>
        </header>
    )
}

export default Header