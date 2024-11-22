import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const Features = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        AI Habit Buddy
                    </h2>
                    <p className="text-gray-500 sm:text-xl">
                        AI Habit Buddy helps you build lasting habits with personalized insights and smart recommendations to boost productivity and well-being.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Personalized Habit Recommendation</h3>
                        <p className="text-gray-500">AI-powered suggestions for personalized habit goals based on user preferences and history.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Habit Dashboard</h3>
                        <p className="text-gray-500">A dynamic dashboard that displays all habits, progress, and analytics, giving users a clear overview of their habits.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faChartSimple} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Progress Tracking & Visualizations</h3>
                        <p className="text-gray-500">Visual representation of progress using charts, graphs, and streaks to motivate users.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">AI-based Daily Planning</h3>
                        <p className="text-gray-500">AI-driven recommendations for daily planning to improve time management and habit performance.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faBell} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Push Notifications & Reminders</h3>
                        <p className="text-gray-500">Reminders and push notifications to keep users on track with their habits and goals.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-[#e5e9f1]">
                            <FontAwesomeIcon icon={faUser} className="text-xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">User Registration & Authentication</h3>
                        <p className="text-gray-500">Secure user sign-up and login system with JWT authentication to personalize the habit tracker.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
