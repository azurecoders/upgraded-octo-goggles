import { Suspense } from "react";

interface VideoComponentProps {
  fileName: string;
}

interface ContentSectionProps {
  title: string;
  description: string;
  videoFile: string;
  reverse?: boolean;
}

const VideoComponent = async ({ fileName }: VideoComponentProps) => {
  return (
    <div className="w-full h-full lg:min-h-[300px] rounded-md overflow-hidden shadow-lg">
      <video
        muted
        autoPlay
        aria-label="Video player"
        className="w-full h-full object-cover"
      >
        <source src={fileName} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const ContentSection = ({
  title,
  description,
  videoFile,
  reverse = false,
}: ContentSectionProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center w-full max-w-7xl mx-auto mb-16 last:mb-0`}
    >
      <div className="w-full md:w-1/2">
        <Suspense
          fallback={
            <div className="w-full h-[300px] bg-accent animate-pulse rounded-lg" />
          }
        >
          <VideoComponent fileName={videoFile} />
        </Suspense>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-secondary dark:text-dark-primary-text">
          {title}
        </h2>
        <p className="text-text leading-relaxed dark:text-indigo-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function VideoComponentPage() {
  return (
    <section
      id="stats"
      className="py-20 dark:bg-dark-custom-dark-blue text-text"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16 dark:text-indigo-100">
          Interactive Video Tutorials
        </h1>

        <ContentSection
          title="Getting Started with Text Chat"
          description="Learn the fundamentals of our text chat interface. This comprehensive guide walks you through all the essential features and functionality you need to know to get started. Master the basics of messaging, file sharing, and more in this easy-to-follow tutorial."
          videoFile="/TextChat.mp4"
        />

        <ContentSection
          title="Advanced Chat Features"
          description="Discover advanced features and pro tips to enhance your chat experience. This tutorial covers advanced topics like message formatting, keyboard shortcuts, and power user features that will help you communicate more effectively and efficiently."
          videoFile="/TextChat.mp4"
          reverse
        />
      </div>
    </section>
  );
}
