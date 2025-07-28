import React from "react";
import Image from "next/image";
import { StarIcon } from "../StarIcon/StartIcon";

const Body = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-row gap-12 items-center">
          {/* Left Side Content */}
          <div className="">
           <div className="">
             {/* Main Headline */}
             <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Want to Turn Social Media Into a Profitable Career?
            </h1>

            {/* Sub-headline with gradient */}
            <p className="text-white text-3xl lg:text-4xl font-bold sub-headline">
              Discover your way to success with Fametonic:
            </p>
           </div>

            {/* Benefits List */}
            <div className="">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">
                  <StarIcon />
                </span>
                <p className="text-white">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">
                  <StarIcon />
                </span>
                <p className="text-white">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">
                  <StarIcon />
                </span>
                <p className="text-white">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">
                  <StarIcon />
                </span>
                <p className="text-white">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="">
              <button className="text-white font-bold py-2 px-32 rounded-lg text-lg transition-colors duration-200 cta-button">
                GET STARTED &gt;
              </button>
              <p className="text-white text-sm pl-18">
                1-minute quiz for personalized Insights
              </p>
            </div>

            {/* Legal Text */}
            <div className=" text-xs text-gray-400">
              <p>
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p>Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>

          {/* Right Side - Mobile SVG */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/mobile.svg"
              alt="Mobile App Mockup"
              width={400}
              height={600}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
