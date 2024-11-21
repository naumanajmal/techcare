import React, { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import Woman from '../assets/healthcare/senior-women.png'
import Logo from '../assets/healthcare/TestLogo.svg'
import HomeFillow from '../assets/healthcare/home_FILL0.svg'
import TwoUsers from '../assets/healthcare/group_FILL0.svg'
import MessageIcon from '../assets/healthcare/chat_bubble_FILL0.svg'
import CaledarIcon from '../assets/healthcare/calendar_today_FILL0.svg'
import CardIcon from '../assets/healthcare/credit_card_FILL0.svg'
import SettingIcon from '../assets/healthcare/settings_FILL0.svg'
import MoreIcon from '../assets/healthcare/more_vert_FILL0.svg'
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { icon: <img src={HomeFillow} />, label: 'Overview' },
        { icon: <img src={TwoUsers} />, label: 'Patients', active: true },
        { icon: <img src={CaledarIcon} />, label: 'Schedule' },
        { icon: <img src={MessageIcon} />, label: 'Message' },
        { icon: <img src={CardIcon} />, label: 'Transactions' }
    ];

    return (
        <div className='w-full p-5'>
            <header className="w-full px-4 lg:px-6 py-4 bg-white  relative rounded-full ">
                <div className=" mx-auto flex items-center justify-between px-5">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">

                        <img src={Logo} className='h-full w-full'></img>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-gray-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex flex-1 px-16  justify-center">
                        <ul className="flex items-center justify-center space-x-8">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className={`flex items-center space-x-2 text-darkGray hover:text-gray-900 
                    ${item.active ? 'bg-lightGreen px-3 py-2 rounded-full' : ''}`}
                                    >
                                        {item.icon}
                                        <span className='font-bold text-[14px]'>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop User Profile */}
                    <div className="hidden lg:flex items-center space-x-3 ">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                <img
                                    src={Woman}

                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <span className="text-sm font-medium text-gray-900">Dr. Jose Simmons</span>
                                <span className="text-sm text-gray-500">General Practitioner</span>
                            </div>
                        </div>
                        <div class="w-px h-10 bg-gray-300"></div>
                        <img src={SettingIcon} />
                        <img src={MoreIcon} />

                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full rounded-lg left-0 right-0 bg-white border-b shadow-lg lg:hidden">
                            <nav className="px-4 py-2">
                                <ul className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className={`flex items-center space-x-2 p-3 rounded-lg text-darkGray hover:bg-gray-50
                        ${item.active ? 'bg-lightGreen text-darkGray' : ''}`}
                                            >
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* Mobile User Profile */}
                                <div className="border-t mt-2 pt-2">
                                    <div className="flex items-center space-x-3 p-3">
                                        <div className="h-10 w-10 rounded-full overflow-hidden">
                                            <img
                                                src={Woman}
                                                alt="Doctor profile"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">Dr. Jose Simmons</span>
                                            <span className="text-sm text-gray-500">General Practitioner</span>
                                        </div>
                                        <img src={SettingIcon} />
                                        <img src={MoreIcon} />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;