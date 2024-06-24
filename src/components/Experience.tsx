import { experiences } from "@/data";

const Experience = () => {
  return (
    <div className="md:my-24 md:16 lg:px-24">
        <h1 className="scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-4xl py-8 flex flex-row justify-center whitespace-nowrap my-6">
          Experience
        </h1>
      <div className="flex flex-col items-center relative">
        <div className="absolute w-0.5 bg-gray-400 top-0 bottom-0 left-1/2"></div>
        {experiences.map((experience, index) => (
          <div key={index} className={`relative w-full flex ${index % 2 === 0 ? 'justify-start text-left pr-6' : 'justify-end text-left pl-6'} mb-8 items`}>
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-2 border-black dark:border-white rounded-full"></div>
            <div className="w-1/2 md:px-4">
              <h2 className="text-sm md:text-lg font-bold">{experience.company}</h2>
              <h3 className="mt-1 text-xs md:text-sm font-semibold text-gray-500">{experience.role}</h3>
              <h3 className="mt-1 text-xs md:text-sm font-semibold text-gray-400">{experience.timePeriod}</h3>
              <ul className="list-disc list-inside mt-4 md:mt-2 text-xs md:text-sm text-gray-500">
                {experience.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
