const Contact = () => {

  return (
    <div className='md:my-24 md:px-24'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row">
        Contact
      </h1>
      <div className='md:my-8 md:px-20'>
        <p className="leading-7 [&:not(:first-child)]:mt-4 text-xs md:text-base dark:text-gray-400">
            Whether you're looking to collaborate, have questions about my work, or just want to say hello — feel free to reach out at 
            <a href="mailto:dilpreetgrover2@gmail.com" className="text-blue-400 hover:underline"> dilpreetgrover2@gmail.com</a>. 
            You can also check out my <a href="https://docs.google.com/document/u/0/d/1tJE6b6cyczan_LsaVxeK19GE_V2ne-dK/mobilebasic" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">resume </a> 
            or <a href="https://cal.com/ce-61-dilpreet-grover-3037-4mmahp/let-s-jump-on-call" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">schedule a call</a> — I'd love to connect!
        </p>
       </div>
      <h3 className="scroll-m-20 font-semibold tracking-tight px-1 py-4 flex flex-row justify-center whitespace-nowrap"> © Dilpreet Grover 2025</h3>
    </div>
  );
};

export default Contact;