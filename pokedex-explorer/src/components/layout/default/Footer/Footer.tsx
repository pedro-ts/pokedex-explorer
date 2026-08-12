import React from 'react'

type Props = {}

export default function Footer({}: Props) {
    return (
        <div
            id="footer-container"
            className=" bg-neutral-900 px-5 py-10
            lg:flex lg:justify-between lg:px-10 lg:items-center
        ">
            <div 
                id="footer-info-container"
                className=" mb-5
                ">
                <h2
                    className="text-neutral-300 font-bold text-2xl flex flex-col text-center pb-2
                    lg:text-left
                    "
                >
                    PokeDex Pro
                </h2>

                <p
                    className=" text-red-300 text-center
                    "
                >
                    © 2024 PokéDex Pro. All rights reserved. Built for Advanced Trainers.
                </p>
            </div>
            
            <div 
                id="footer-links-container" 
                className="
            ">
                <ul className=" grid grid-cols-2 justify-center items-center text-center
                lg:grid-cols-3
                ">
                    <li><a className="block px-4 py-1 text-neutral-500/50 hover:text-red-300" href="">Privacy Policy</a></li>
                    <li><a className="block px-4 py-1 text-neutral-500/50 hover:text-red-300" href="">Terms of Service</a></li>
                    <li><a className="block px-4 py-1 text-neutral-500/50 hover:text-red-300" href="">Support</a></li>
                </ul>
            </div>
        </div>
    );
}