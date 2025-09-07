import TestimonialMarquee from "../animations/TestimonialMarquee";
import TestimonialCard from "./TestimonialCard";

export default function Cards() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
        See What Our Users Say
      </h2>

      <TestimonialMarquee speed={40}>
        <TestimonialCard author="Sumeeta Kiran">
          The interface feels seamless and very easy to use. Made life a lot easier.
        </TestimonialCard>
        <TestimonialCard author="Rahul Sharma">
          An amazing platform that helped streamline my payments effortlessly.
        </TestimonialCard>
        <TestimonialCard author="Ananya Mehta">
          Super intuitive and smooth experience. Highly recommended!
        </TestimonialCard>
      </TestimonialMarquee>

      <div className="mt-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Become an Early Adopter. <br /> Join 1000+ community
        </h3>
      </div>
    </main>
  );
}
