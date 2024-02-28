const experiences = [
  {
    company : 'GeeksforGeeks',
    role : 'Student Coordinator',
    timePeriod : 'April 2022 - March 2023',
    points : [
      "Orchestrated and coordinated marketing events, contributing significantly to the success of the college's technical fest, Digi Fiesta.",
      "Played a key role in securing sponsorship for the event and successfully invited Sandeep Jain Sir to deliver an insightful tech talk at the university",
      " Established connections with a diverse range of tech enthusiasts and industry experts, enhancing networking opportunities and contributing to the dynamic tech community."

    ]
  },
  {
    company : 'Training & Placement Cell,YMCA',
    role : 'Student Coordinator',
    timePeriod : 'December-2022 - Present',
    points : [
      "Coordinated and supervised the orchestration of multiple companies' placement drives.",
      "Developed an in-house test-taking platform in collaboration with IT team members, offering assistance to peers in their placement preparation based on past drives.",
      "Responsible for the design and creation of posters and social media content for placement notifications and updates."
    ]
  },
  {
    company : 'United by Music for Charity',
    role : 'Video Editor',
    timePeriod : 'January 2023 - July 2023',
    points : [
      "Spearheaded the creation and management of compelling content across the organization's social media platforms, ensuring a cohesive and engaging online presence.",
      "Facilitated global collaborations by connecting with multiple artists for the annual album release on December 8, fostering a diverse and inclusive creative community.",
      ". Played a pivotal role in curating and showcasing the organization's identity on social media, contributing to increased visibility and resonance with a global audience."
    ]
  },
  { 
    company: 'SimplifyNote',
    role: 'Full-Stack Developer Intern',
    timePeriod: 'July 2023 - September 2023',
    points: [
      "Revamped the product's landing page, providing it with a contemporary aesthetic and an enhanced user interface for a more modern appeal.",
      "Spearheaded the incorporation of a speech-to-text feature, significantly improving the product's user-friendliness and robustness.",
      "Orchestrated the integration of Stripe & RazorPay using MongoDB & Node.js, into the product's functionality, establishing an optimized payment gateway and initiating a consistent revenue stream.",
    ]
  },
];

const Experience = () => {
  return (
    <div className='px-24'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row justify-center">
          Experience
        </h1>
      <div className="flex flex-col items-center relative">
        <div className="absolute w-0.5 bg-gray-400 top-0 bottom-0 left-1/2"></div>
        {experiences.map((experience, index) => (
          <div key={index} className={`relative w-full flex ${index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-left pl-6'} mb-8`}>
            <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-2 border-black dark:border-white rounded-full"></div>
            <div className="w-1/2 px-4">
              <h2 className="text-lg font-bold">{experience.company}</h2>
              <h3 className="mt-1 text-sm font-semibold text-gray-600">{experience.role}</h3>
              <h3 className="mt-1 text-sm font-semibold text-gray-400">{experience.timePeriod}</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
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