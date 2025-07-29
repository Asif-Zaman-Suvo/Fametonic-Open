import React from "react";
import Image from "next/image";
import { StarIcon } from "../StarIcon/StartIcon";

const Body = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Mobile Image - Top on mobile, right side on desktop */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2">
            <Image
              src="/assets/mobile.svg"
              alt="Mobile App Mockup"
              width={300}
              height={450}
              className="w-auto h-auto max-w-full max-h-[450px] lg:max-h-[600px]"
            />
          </div>

          {/* Content - Bottom on mobile, left side on desktop */}
          <div className="space-y-6 lg:space-y-8 w-full lg:w-auto order-2 lg:order-1">
            {/* Headline Section */}
            <div className="space-y-2 text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>

              {/* Sub-headline with gradient */}
              <p className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold sub-headline">
                Discover your way to success with Fametonic:
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-base lg:text-lg flex-shrink-0 mt-0.5">
                  <StarIcon />
                </span>
                <p className="text-white text-sm lg:text-base">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-base lg:text-lg flex-shrink-0 mt-0.5">
                  <StarIcon />
                </span>
                <p className="text-white text-sm lg:text-base">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-base lg:text-lg flex-shrink-0 mt-0.5">
                  <StarIcon />
                </span>
                <p className="text-white text-sm lg:text-base">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-base lg:text-lg flex-shrink-0 mt-0.5">
                  <StarIcon />
                </span>
                <p className="text-white text-sm lg:text-base">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>

            {/* Legal Text - Above button on mobile, below on desktop */}
            <div className="space-y-2 text-xs text-gray-400 text-center lg:text-left order-1 lg:order-3 lg:hidden">
              <p>
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
               {/* Copyright - Only show on mobile */}
            <div className="space-y-2 text-xs text-gray-400 text-center lg:hidden order-4">
              <p>Fametonic 2025 ©All Rights Reserved.</p>
            </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3 text-center lg:text-left order-2 lg:order-1">
              <button className="text-white font-bold py-3 lg:py-2 px-8 lg:px-32 rounded-lg text-base lg:text-lg transition-colors duration-200 cta-button w-full lg:w-auto">
                GET STARTED &gt;
              </button>
              <p className="text-white text-xs sm:pl-0 lg:text-sm lg:pl-16">
                1-minute quiz for personalized Insights
              </p>
            </div>

            {/* Desktop Legal Text - Below quiz text */}
            <div className="space-y-2 text-xs text-gray-400 text-center lg:text-left order-3 lg:order-2">
              <p className="hidden lg:block">
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="hidden lg:block">Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
