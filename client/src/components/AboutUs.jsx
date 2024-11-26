import React from 'react';
import AboutImg from '../assets/About-Us.jpg';

const AboutUs = () => {
  return (
    <section className="bg-[#ecf1f9] py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Empowering Your Journey Through Collaboration and Personal Growth
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At AI Habit Buddy, we believe in the power of habits to transform lives. Our mission is to empower individuals to build meaningful routines and achieve their goals through smart planning, personalized insights, and collaborative growth.
                By harnessing cutting-edge AI, we provide tailored suggestions and actionable insights to help you stay on track and unlock your full potential. Together, we strive to build a supportive community where progress is celebrated, and every step forward brings us closer to a healthier, more productive lifestyle.
                Join us, and let's grow stronger, one habit at a time!
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
            </button>
          </div>
          <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={AboutImg} alt="about Us image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
