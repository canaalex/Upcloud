import React from "react";
import loc from "../assets/images/current-location.png";
import map from "../assets/images/map.png";

function Dashboard(){
    return(
            <div class="flex h-screen">
                <div class="flex-1 flex flex-col">
                    <div class="flex h-full">
                        <nav class="flex w-1/3 h-full">
                            <div class="w-full flex mx-auto">
                                <div class="w-full h-full bg-white bg-opacity-70 text-gray-800 shadow-lg p-5 overflow-y-auto">
                                    <div class="flex flex-row pt-9">
                                        <div class="flex w-full rounded-full bg-white border-black border">
                                            <button>
                                                <span class="w-auto flex justify-end items-center text-grey p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 p-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                    search</svg>
                                                </span>
                                            </button>
                                            <input class="w-full rounded mr-4 placeholder-black placeholder-opacity-70" type="text" placeholder="Search"/>
                                        </div>   
                                        <div class="flex w-2/12">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-1.5" viewBox="0 0 20 20" fill="currentColor">
                                                     <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                                                
                                        </div> 
                                    </div>
                                    <div class="flex p-0.5 h-4">
                                        <div class="flex p-2">
                                            <img src={loc} alt="location" class="h-2 w-2 align-baseline "></img>
                                                <div class="text-tiny h-2 pl-1.5">
                                                    Current Location
                                                </div>
                                        </div>
                                    </div>
                                    <div class="relative bg-white py-0.5 px-6 rounded-3xl w-80 my-8 shadow-2xl">
                                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gray-400 left-4 -top-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div class="mt-8">
                                            <p class="text-xl font-semibold my-2">Dr.Gouri Kannukar</p>
                                            <div class="flex space-x-2  text-black-400 text-xs">
                                                <p>Cardio-Thorrasic Surgeon | 4.7</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 align-bottom" viewBox="0 0 20 20"  fill="currentColor">
                                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                    </svg> 
                                            </div>
                                            <div class="flex space-x-2 text-pink-400 text-sm my-3">
                                                <p>Sadannad Ayurvedic Clinic</p> 
                                            </div>
                                            <div class="border-t-2"></div>
                                            <div class="flex justify-between">
                                                <div class="my-2">
                                                    <div class="flex space-x-10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                            </svg>
                                                    </div>
                                                </div>
                                                <div class="my-2">
                                                    <p class="font-semibold text-base text-green-500 mb-2">RS 750</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative bg-white py-0.5 px-6 rounded-3xl w-80 my-8 shadow-2xl">
                                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gray-400 left-4 -top-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div class="mt-8">
                                            <p class="text-xl font-semibold my-2">Dr.Gouri Kannukar</p>
                                            <div class="flex space-x-2  text-black-400 text-xs">
                                                <p>Cardio-Thorrasic Surgeon | 4.7</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 align-bottom" viewBox="0 0 20 20"  fill="currentColor">
                                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                    </svg> 
                                            </div>
                                            <div class="flex space-x-2 text-pink-400 text-sm my-3">
                                                <p>Sadannad Ayurvedic Clinic</p> 
                                            </div>
                                            <div class="border-t-2"></div>
                                            <div class="flex justify-between">
                                                <div class="my-2">
                                                    <div class="flex space-x-10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                            </svg>
                                                    </div>
                                                </div>
                                                <div class="my-2">
                                                    <p class="font-semibold text-base text-green-500 mb-2">RS 750</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="relative bg-white py-0.5 px-6 rounded-3xl w-80 my-8 shadow-2xl">
                                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-gray-400 left-4 -top-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div class="mt-8">
                                            <p class="text-xl font-semibold my-2">Dr.Gouri Kannukar</p>
                                            <div class="flex space-x-2  text-black-400 text-xs">
                                                <p>Cardio-Thorrasic Surgeon | 4.7</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 align-bottom" viewBox="0 0 20 20"  fill="currentColor">
                                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                    </svg> 
                                            </div>
                                            <div class="flex space-x-2 text-pink-400 text-sm my-3">
                                                <p>Sadannad Ayurvedic Clinic</p> 
                                            </div>
                                            <div class="border-t-2"></div>
                                            <div class="flex justify-between">
                                                <div class="my-2">
                                                    <div class="flex space-x-10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                            </svg>
                                                    </div>
                                                </div>
                                                <div class="my-2">
                                                    <p class="font-semibold text-base text-green-500 mb-2">RS 750</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <main class="flex flex-col w-full bg-white overflow-x-hidden mb-14">
                            <div class="flex w-full mx-auto">
                                <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                                    <img src={map} alt="map"/>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
         );
    }
export default Dashboard;