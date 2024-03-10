import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaBehance } from 'react-icons/fa';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [(e.target as HTMLTextAreaElement).name]: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formRef.current) {
      emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  
      setForm({ name: '', email: '', message: '' });
    }
  };


  return (
    <div className='px-32'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row">
        Contact
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col justify-center  items-center'>
        <div className='flex flex-col md:flex-row gap-5 justify-center'>
          <Textarea
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className='my-5 w-full lg:w-64'
          />
          <Textarea
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className='my-5 w-64'
          />
        </div>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className='my-5 w-[375px] lg:w-[675px] h-[200px]'
        />
        <Button type="submit" className="flex flex-row mt-4 mb-6" >Submit</Button>
      </form>
      <div className='flex flex-row gap-3 py-2 justify-center'>
        <a href="https://github.com/dfordp" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/dilpreet-grover-17726b224" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/_dfordp_" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/FreakAnimated" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.youtube.com/@dfordp" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.behance.net/redjohn8" target="_blank" rel="noopener noreferrer">
          <FaBehance size={24} />
        </a>
      </div>
      <h3 className="scroll-m-20 font-semibold tracking-tight px-1 py-4 flex flex-row justify-center whitespace-nowrap"> © Dilpreet Grover 2024</h3>
    </div>
  );
};

export default Contact;