import { Blogs } from "@/data"
import { Button } from "./ui/button"
import { FaDev, FaMedium } from "react-icons/fa";

const Blog = () => {

    const handleClick = (url: string) => {
        window.open(url, '_blank');
      };

  return (
    <div>
      <h1 className="scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-4xl py-8 flex flex-row justify-center whitespace-nowrap my-6">
        Blogs
      </h1>
      <div className="flex flex-row gap-4 py-10 px-5 overflow-x-scroll custom-scrollbar">
        {Blogs.map((blog, index) => (
          <div key={index} className="w-48 md:w-80 lg:h-72 md:h-56 flex-none dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md">
            <div className="pt-3 flex flex-row">
              <p className="leading-7 [&:not(:first-child)]:pt-1 pl-2  font-semibold ">{blog.Title}</p>
            </div>
            <div className='lg:block hidden'>
              <div className='flex flex-row justify-center '>
                <img src={blog.illustration} className='h-40 w-72 px-2 py-1'/>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3 p-4">
              <div>
                {blog.devToLink && <Button onClick={() => handleClick(blog.devToLink)} className=''><FaDev  /></Button>}
              </div>
              <div>
                  {blog.mediumLink && <Button onClick={() => handleClick(blog.mediumLink)} className=''><FaMedium /></Button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
