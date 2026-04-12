import React from 'react';

const NotFoundApp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4">

            <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-lg w-full">

                {/* Image */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                    alt="not found"
                    className="w-28 mx-auto mb-6 opacity-90"
                />

                {/* Title */}
                <h1 className="font-bold text-2xl md:text-4xl text-white mb-4">
                    OPPS!! APP NOT FOUND 🚫
                </h1>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm md:text-base mb-6 leading-relaxed">
                    The app you are looking for doesn’t exist or may have been removed.
                    Please try exploring other apps.
                </p>

                {/* Button */}
                <button
                    onClick={() => window.history.back()}
                    className="bg-[#6366f1] hover:bg-[#4f46e5] transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105"
                >
                    ⬅ Go Back
                </button>

            </div>
        </div>
    );
};

export default NotFoundApp;