import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star, User } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Nelson",
      title: "5-year subscriber",
      image: "path-to-image1", // Replace with the actual image path
      quote:
        "I used to take a very unstructured approach to my investments. The Stockopedia service has become an integral component of my investment decisions. I feel more confident in my investing and my results have been spectacular!",
      rating: "Excellent",
      stars: 5, // Assuming a 5-star rating
    },
    {
      name: "John Bradley",
      title: "5-year subscriber",
      image: "path-to-image2", // Replace with the actual image path
      quote:
        "As a non-financial user, I would not have the time. My investing is now much more structured and it gives me much more confidence. This tool is key to my research and has revolutionized the structure of my portfolio.",
      rating: "Excellent",
      stars: 5, // Assuming a 5-star rating
    },
    {
      name: "John Miller",
      title: "5-year subscriber",
      image: "path-to-image3", // Replace with the actual image path
      quote:
        "I try to keep up with market hype, I often ended up following companies that were outside of my focus area. Since subscribing to this service, I have produced consistently good returns. My focus is better and my returns are stable.",
      rating: "Excellent",
      stars: 5, // Assuming a 5-star rating
    },
  ];

  return (
    <div className="bg-gradient-to-r mt-12  from-black via-gray-800 to-black py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          Learn how these subscribers transformed their investment results
        </h2>
        <p className="text-lg mb-8 text-white">
          Join more than{" "}
          <span className="font-semibold">15,000 subscribers</span> managing
          their portfolios with Stockopedia help
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-white bg-gradient-to-r  from-black via-gray-800 to-black rounded-lg shadow-lg p-6 text-left max-w-sm mx-auto"
            >
              {/* <User /> */}
              <p className="text-sm italic mb-4 text-white">
                {testimonial.quote}
              </p>
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-white mb-2">{testimonial.title}</p>
              <div className="flex items-center justify-center mt-4">
                <span className="text-yellow-200 font-bold mr-2">
                  {testimonial.rating}
                </span>
                <div className="flex">
                  {[...Array(testimonial.stars)].map((star, i) => (
                    <StarFilledIcon key={i} className="text-yellow-100" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
