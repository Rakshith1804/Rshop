import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks = [
    {title: "Home",
    link: "/#",
    },
    {
        title: "About",
        link: "/#about",
        },
        {
            title: "Contacts",
            link: "/#contact",
            },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
    <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
            {/*Company details */}
            <div className='py-8 px-4'>
            <a href='#'
                className='text-primary font-semibold
                tracking-wedest text-2xl uppercase
                sm:text-3xl'
                >
                    Rshop
                    </a>

                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        Most assured products with damage free will be delivered
                    </p>
                    <p className='text-gray-500 mt-4'> Made with ❤️</p>
            </div>

            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left 
                    mb-3'> Important Links</h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link}
                                className='text-grey-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                    {data.title}

                                </a>
                            </li>
                        )
                        )}
                    </ul>

                </div>

                {/* Second col Links */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left 
                    mb-3'> Quick Links</h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link}
                                className='text-grey-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                    {data.title}

                                </a>
                            </li>
                        )
                        )}
                    </ul>

                </div>


                {/* Company Address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left 
                    mb-3'> Address</h1>
                    <div>
                        <div className='flex items-center gap-3'>
                        <FaLocationArrow />
                        <p> Bangalore, Karnataka</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt />
                            <p>+91 9876543210</p>

                        </div>

                        <div className='flex items-center gap-3 mt-6'>
                            <a href='#'>
                            <FaInstagram className='text-3xl 
                            hover:text-primary duration-300' />
                            </a>
                            <a href='#'>
                            <FaFacebook className='text-3xl 
                            hover:text-primary duration-200' />
                            </a>
                            <a href='#'>
                            <FaLinkedin className='text-3xl 
                            hover:text-primary duration-200' />
                            </a>
                            </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer