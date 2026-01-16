'use client'

import { useState } from 'react'

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Simplify your security',
      description: 'Comprehensive security suite'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Customer identity',
      description: 'Manage user authentication'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Adaptable authentication',
      description: 'Flexible auth methods'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl pointer-events-none opacity-20" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}} />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Label */}
        <p className="text-purple-400 text-sm mb-3">
          The security first platform
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
          Simplify your security with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            authentication services
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base mb-12 max-w-xl">
          Define access roles for the end-users, and extend your authorization capabilities 
          to implement dynamic access control.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Tabs */}
          <div className="space-y-3">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === index ? 'bg-purple-500/20' : 'bg-gray-700/50'
                  }`}>
                    <div className={activeTab === index ? 'text-purple-400' : 'text-gray-400'}>
                      {tab.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{tab.title}</h3>
                    <p className="text-gray-400 text-sm">{tab.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Visual */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="relative">
              {/* Outer Glow Rings */}
              <div className="absolute inset-0 w-64 h-64 -left-32 -top-32">
                <div className="w-full h-full rounded-full bg-purple-500/20 blur-2xl animate-pulse-glow" />
              </div>

              {/* Grid Lines */}
              <svg className="absolute -left-32 -top-32 w-64 h-64" viewBox="0 0 200 200">
                <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              </svg>

              {/* Center Icon */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Corner Markers */}
              {[
                { top: '-40px', left: '-40px' },
                { top: '-40px', right: '-40px' },
                { bottom: '-40px', left: '-40px' },
                { bottom: '-40px', right: '-40px' }
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 border-2 border-purple-500 rounded-sm animate-pulse"
                  style={{ ...pos, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}