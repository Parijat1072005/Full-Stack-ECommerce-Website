import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#1a1c2e] text-gray-300 py-10 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-4">
                        <div className="mb-6 md:mb-0">
                            <Link to='/'>
                                <img src='/Ekart.png' alt="" className='w-32' />
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Powering Your World with the Best in Electronics.
                        </p>
                        <div className="space-y-1">
                            <h4 className="text-white font-semibold pt-2">Brand Contact</h4>
                            <p className="text-xs">123 Electronics St, Style City, NY 10001</p>
                            <p className="text-xs">
                                Email: <a href="mailto:support@Zaptro.com" className="text-blue-400 hover:underline">support@Zaptro.com</a>
                            </p>
                            <p className="text-xs">Phone: (123) 456-7890</p>
                        </div>
                    </div>

                    {/* Column 2: Customer Service */}
                    <div className="lg:pl-8 border-l-0 lg:border-l border-gray-700">
                        <h3 className="text-white font-bold text-lg mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Column Title & Socials */}
                    <div className="lg:pl-8 border-l-0 lg:border-l border-gray-700">
                        <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-3">
                            <FaFacebook />
                            <FaTwitterSquare />
                            <FaInstagram />
                            <FaPinterest />
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Stay in the Loop</h3>
                        <p className="text-sm">
                            Subscribe to get special offers, free giveaways, and more
                        </p>
                        <div className="space-y-2">
                            <label className="text-white font-semibold text-sm block">Newsletter address</label>
                            <div className="flex">
                                <form action="" className="mt-2 flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="bg-white text-gray-800 px-3 py-2 text-sm w-full focus:outline-none"
                                    />
                                    <button type='submit' className="bg-[#e91e63] text-white px-4 py-2 text-sm font-semibold hover:bg-gray-700 transition">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <p className="text-[10px] mt-4">
                            &copy; {new Date().getFullYear()} <span className="text-pink-600">Ekart</span>. All rights reserved
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} <span className="text-pink-600">Ekart</span>. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;