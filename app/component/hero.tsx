'use client';

import React, { useState } from 'react'

function Hero() {
    const [inputValue, setInputValue] = useState('')

    const suggestions = [
        'Reporting Dashboard',
        'Gaming Platform',
        'Onboarding Portal',
        'Networking App',
        'Room Visualizer'
    ]

    const handleSubmit = () => {
        if (inputValue.trim()) {
            console.log('Building:', inputValue)
            // Handle form submission here
        }
    }

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50' >
            {/* Main Heading */}
            <div className='text-center max-w-4xl mb-8 md:mb-12 mt-8 md:mt-15'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-2'>
                    Let's make your dream a{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
                        reality.
                    </span>
                    <br />
                    Right now.
                </h1>

                {/* Subtitle */}
                <p className='text-base sm:text-lg md:text-xl text-gray-600 mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto px-4'>
                    CodePup lets you build fully-functional apps in minutes with just your words.
                    <br className='hidden sm:block' />
                    <span className='sm:hidden'> </span>
                    No coding necessary.
                </p>
            </div>
       
            {/* Input Section with Purple Background */}
            <div className='w-full max-w-4xl mx-4 bg-purple-500/20 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 border border-purple-300/30 shadow-xl'>
                {/* Main Input Box */}
                <div className='mb-6 md:mb-8'>
                    <div className='bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-white/40 hover:shadow-3xl hover:bg-white/95 transition-all duration-300'>
                        <div className='flex items-center gap-2 md:gap-4'>
                            <input
                                type='text'
                                placeholder='What do you want to build?'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className='flex-1 text-base sm:text-lg md:text-xl text-gray-700 placeholder-gray-400 bg-transparent outline-none py-2 focus:placeholder-gray-300 transition-colors duration-200'
                            />
                            <button 
                                onClick={handleSubmit}
                                className={`bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white p-2.5 sm:p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300/50 flex-shrink-0 ${
                                    !inputValue.trim() ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                                }`}
                                disabled={!inputValue.trim()}
                            >
                                <svg
                                    className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Suggestions */}
                <div className='text-center'>
                    <p className='text-white/90 mb-4 md:mb-6 text-base md:text-lg font-medium px-2'>
                        Not sure where to start? Try one of these:
                    </p>
                    <div className='flex flex-wrap justify-center gap-2 md:gap-3 px-2'>
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => setInputValue(suggestion)}
                                className='px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full border border-white/60 hover:bg-white hover:shadow-lg hover:border-white hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white'
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Features Hint */}
            <div className='mt-8 md:mt-12 text-center max-w-2xl px-4'>
                <p className='text-xs sm:text-sm text-gray-500'>
                    ✨ Powered by AI • 🚀 Deploy instantly • 💯 No coding required
                </p>
            </div>
        </div>
    )
}

export default Hero