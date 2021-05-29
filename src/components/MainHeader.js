import React from "react";

import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";


function MainHeader(){
    return(
        <header className="bg-gray-100 bg-opacity-70">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
             <div class="h-10 w-10 rounded bg-gray-400">
            
             </div>
             <div class="font-medium text-black pl-2">
                  With Me<br></br>
                  DOC'S
              </div>
              <div class="font-medium text-black pl-10">
                  For Doctors
              </div>
            </div>
            <div className="ml-10 pb-4 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class=" inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <a
                href="#"
                className="inline-block  text-base align-middle font-medium text-black pr-7"
              >
                Search and Book
              </a>




            <svg xmlns="http://www.w3.org/2000/svg" class=" inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
              <a
                href="#"
                className="inline-block  text-base align-middle text-black pr-7"
              >
                Nearby
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" class=" inline-block h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <a
                href="#"
                className="inline-block text-base align-middle font-medium text-black pr-7"
              >
                Notifications
            </a>
            <div class="inline-block h-10 w-10 align-middle rounded-full bg-gray-400">
            
             </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {/* {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))} */}
          </div>
        </nav>
      </header>

        
    );
}
export default MainHeader;