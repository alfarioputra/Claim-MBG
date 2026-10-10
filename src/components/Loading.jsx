import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F1F7FF] flex items-center justify-center">
            <div className="relative">
                <div className="relative flex flex-col items-center gap-4 p-8">
                    <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#00236F] animate-spin"></div>
                    <div className="relative">
                        <p className="relative text-[#00236F] text-sm">Loading...</p>
                    </div>
                </div>
            </div>
        </div>
  )
}