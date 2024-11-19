import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const PlaceBento: React.FC = () => {
  return (
    <MaxWidthWrapper className="py-12 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        The first section and main header for placeholder
      </h2>
      <p className="text-center mb-8 sm:mb-12 text-gray-600 px-4 sm:px-0">
        LangFlow is designed to redefine the boundaries of AI development in
        experimentation and real-world scenarios.
      </p>

      <div className="grid grid-cols-1 gap-10">
        {/* Row 1 */}
        <div className="flex gap-6">
          <BentoItem
            videoSrc="/1.webm"
            title="Prompt Variables"
            description="Dynamic inputs are introduced using easily trackable [...]"
            aspect="boxy" 
          />
          <BentoItem
            videoSrc="/2.webm"
            title="Fine-Tuning"
            description="Harness the full potential of LLMs by easily fine-tuning them from spreadsheets."
            aspect="full" 
          />
        </div>

        {/* Row 2 */}
        <div className="flex gap-6">
          <BentoItem
            videoSrc="/4.webm"
            title="Group Components"
            description="Higher-level components naturally emerge from AI building blocks. Store and share your creations."
            aspect="full"
          />
          <BentoItem
            videoSrc="/3.webm"
            title="Custom Components"
            description="Go beyond the surface and code your own components."
            aspect="boxy"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

interface BentoItemProps {
  videoSrc: string;
  title: string;
  description: string;
  aspect?: "boxy" | "full"; // Add aspect prop
}

const BentoItem: React.FC<BentoItemProps> = ({
  videoSrc,
  title,
  description,
  aspect = "full", // Default to "full"
}) => {
  return (
    <div className="rounded-lg mx-auto">
      <div className="relative w-full  mb-4">
        {/* Video Aspect Ratio Control */}
        {aspect === "boxy" && (
          <video
            src={videoSrc}
            autoPlay
            controls
            loop
            muted
            playsInline
            className="h-[340px] object-cover rounded-2xl"
            style={{ aspectRatio: "1/1" }} // Adjust aspect ratio as needed
          />
        )}
        {aspect === "full" && (
          <video
            src={videoSrc}
            autoPlay
            controls
            loop
            muted
            playsInline
            className="h-[340px] object-cover rounded-2xl"
          />
        )}

      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default PlaceBento;