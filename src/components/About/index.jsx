import React, { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Hathaway",
    text:
      "Great experience! The booking was smooth and the doctor was very professional.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    text:
      "Clean UI and clear pricing. Loved the video consultation feature!",
  },
  {
    id: 3,
    name: "Meera Nair",
    text:
      "Found a specialist quickly and got an appointment the same day.",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800">About Amrutam</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Amrutam helps you find trusted doctors across specialties with transparent
              fees and seamless booking. Choose in‑clinic visits or remote sessions—
              whatever fits your schedule. We focus on a clean, simple experience so
              you can focus on your health.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-gray-100 p-4">
                <div className="text-green-700 font-semibold">5000+ Patients</div>
                <div className="text-gray-500">booked appointments</div>
              </div>
              <div className="rounded-xl border border-gray-100 p-4">
                <div className="text-green-700 font-semibold">100+ Doctors</div>
                <div className="text-gray-500">verified specialists</div>
              </div>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
            <div className="overflow-hidden">
              <div className="transition-all duration-500">
                <blockquote className="text-gray-700 text-base sm:text-lg">
                  “{reviews[index].text}”
                </blockquote>
                <div className="mt-4 font-semibold text-green-800">
                  — {reviews[index].name}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button onClick={prev} className="rounded-full border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50">
                Prev
              </button>
              <div className="flex gap-2">
                {reviews.map((r, i) => (
                  <span
                    key={r.id}
                    className={`h-2 w-2 rounded-full ${i === index ? "bg-green-700" : "bg-green-200"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="rounded-full bg-green-700 px-4 py-2 text-white hover:bg-green-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


