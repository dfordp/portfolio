//import individual1 from "@/assets/individual1.png"
//import individual2 from "@/assets/individual2.png"
// import individual3 from "@/assets/individual3.png"
//import individual4 from "@/assets/individual4.png"
// import individual5 from "@/assets/individual5.png"
import individual6 from "@/assets/individual6.png"

const reviews = [
  //{
    //image: individual1,
    //name: "Ankan Bhattacharaya",
    //review: "His work & experience is //exceptional"
  //},
 // {
    //image: individual2,
    //name: "Manpreet Grover",
    //review: "His ability to bring new //Ideas to the table & implement changes is //truely mindblowing"
  //},
  // {
  //   image: individual3,
  //   name: "Sanskar",
  //   review: "Truly a team player"
  // },
  //{
   // image: individual4,
    //name: "Manpreet Kaur",
    //review: "His simple, ergonomic & minimalistic approach to things opens up new paths in problem solving"
  //},
  // {
  //   image: individual5,
  //   name: "Emma Stone",
  //  review: "Is this the start of something wonderful or new?"
  // },
   {
     image: individual6,
     name: "Julia Robert",
     review: "His ability to mentor inexperienced individuals is truely unmatched"
 },
];

const Reviews = () => {
  return (
    <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row">
          Reviews
        </h1>
        <div className="flex flex-row gap-4 animate-slide space-x-4">
        {reviews.concat(reviews).map((review, index) => (
          <div key={index} className="w-80 h-40 flex-none dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md">
            <div className="pt-3 flex flex-row">
              <img src={review.image} className="w-10 h-10 ml-4 rounded-full"/>
              <p className="leading-7 [&:not(:first-child)]:pt-1 pl-2 font-bold text-xs">{review.name}</p>
            </div>
            <p className="leading-7 [&:not(:first-child)]:pt-2 pl-5 pr-2 font-medium text-xs">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
