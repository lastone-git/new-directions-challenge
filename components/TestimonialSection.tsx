import TestimonialCarousel from "./TestimonialCarousel";

const testimonials = [
    { text: "Working with New Directions has been fantastic for our school's staffing needs. They always provide us with great candidates who fit right in and make a difference from day one. Their team understands exactly what we need and makes the whole hiring process easy and stress-free. If you're looking for reliable staff, I highly recommend New Directions!", clientName: "Sarah J., Principal", date: "January 1, 2024" },
    { text: "New Directions was a game-changer for my career shift into social care. From day one, they were supportive and really knew how to help me land the perfect job. Thanks to them, I found an amazing position as a support worker in no time. I couldn't be happier and totally recommend their services!", clientName: "Emily D., Support Worker", date: "February 14, 2024" },
];

const TestimonialSection = () => {
    return <TestimonialCarousel testimonials={testimonials} speed={7500} />
}

export default TestimonialSection;