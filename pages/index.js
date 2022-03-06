import React, {  useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, [])
    
  
  return (
    <>
     <nav class=" mx-5 xl:mx-40 ">
        <div class="flex  justify-between">
            <div>
                <a href="#" class="flex items-center py-4 ">
                    <span class="font-semibold text-blue-400 text-lg font-prata">Johnathan Specter</span>
                </a>
            </div>
            
            <div class="hidden lg:flex items-center space-x-1">
                <a href="index.html" class="navbar-link">Articles</a>
                <a href="#chats" class="navbar-link">Chats</a>
                <a href="#rewards" class="navbar-link">Rewards</a>
                <a href="#about" class="navbar-link">About</a>
            </div> 
            <div class="hidden lg:flex items-center space-x-3 ">
                <a href="" class="p-2 text-black bg-[#FBE850] rounded hover:white transition duration-300 ">
                    Get Started
                </a>
            </div>
            
            <div class="lg:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                    <svg class=" w-6 h-6 text-black  hover:text-g-500 " x-show="!showMenu" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
     
        <div class="hidden mobile-menu m-auto bg-black">
            <ul class="">

                <li class="active">
                    <a href="index.html" class="block font-bold text-white text-sm px-2 py-4  ">
                        Articles
                    </a>
                </li>
                <li>
                    <a href="#chats" class="block text-sm px-2 py-4  font-bold text-white">
                        Chats
                    </a>
                </li>
                <li>
                    <a href="#rewards" class="block text-sm px-2 py-4  font-bold text-white">
                        Rewards
                    </a>
                </li>
                <li>
                    <a href="#about" class="block text-sm px-2 py-4  font-bold text-white">
                        About
                    </a>
                </li>
                <li class="py-4 px-2">
                    <a href="" class="p-2 text-black bg-[#FBE850] font-prata font-bold hover:text-gray-500 ">
                        Get Started
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}