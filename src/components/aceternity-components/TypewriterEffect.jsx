import { TypewriterEffect } from "../ui/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";

export function TypewriterEffectDemo() {
  const navigate = useNavigate();
  const words = [
    {
      text: "Real-time",
    },
    {
      text: "Intelligence",
    },
    {
      text: "for",
    },
    {
      text: "modern",
    },
    { text: "Threat" },
    { text: "with" },
    {
      text: "Satellite.",
      className: "text-amber-500 dark:text-amber-500",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center">
      <div
      className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />
      </div>
      <div className="flex flex-col items-center justify-center h-[40rem] w-1/2 ">
        <TypewriterEffect words={words} />
        <p className="my-10 text-center">Satellite empowers your security team to work on the most urgent and critical threats without being overwhelmed by noisy, low-priority alerts. We provide real-time, verifiable threat intelligence powered by a global network of proprietary sensors.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 relative">
        <button
            className="text-xs bg-transparent text-gray-50 px-5 h-10 mr-5"
            onClick={() => navigate("/contact", { replace: true })}
          >
            Book a Demo
          </button>
          <button
            className="text-xs px-5 h-10"
            onClick={() => navigate("/home", { replace: true })}
          >
            Search for Free
          </button>
        </div>
      </div>
    </div>

    </div>
  );
}
