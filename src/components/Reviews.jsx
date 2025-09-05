import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/Card"

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Jason Wardell",
      company: "Google",
      date: "2024-04-19",
      rating: 5,
      text: "What a great bunch of guys to work with. Advised me properly on the work I required and continue to support whenever required. Many thanks",
    },
    {
      name: "Wasim Ali",
      company: "Google",
      date: "2024-03-03",
      rating: 5,
      text: "We just wanted to let you know how happy we are with our water filter system we purchased it. Our water quality is much better. Before we bought your system we wouldn't...",
    },
    {
      name: "Syed Fazal",
      company: "Google",
      date: "2024-02-28",
      rating: 5,
      text: "Nice",
    },
    {
      name: "Jason Wardell",
      company: "Google",
      date: "2024-04-19",
      rating: 5,
      text: "What a great bunch of guys to work with. Advised me properly on the work I required and continue to support whenever required. Many thanks",
    },
    {
      name: "Wasim Ali",
      company: "Google",
      date: "2024-03-03",
      rating: 5,
      text: "We just wanted to let you know how happy we are with our water filter system we purchased it. Our water quality is much better. Before we bought your system we wouldn't...",
    },
    {
      name: "Syed Fazal",
      company: "Google",
      date: "2024-02-28",
      rating: 5,
      text: "Nice",
    },
  ]

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp current index
  useEffect(() => {
    if (current > testimonials.length - cardsPerView) {
      setCurrent(Math.max(0, testimonials.length - cardsPerView));
    }
  }, [cardsPerView, testimonials.length]);

  const canGoLeft = current > 0;
  const canGoRight = current < testimonials.length - cardsPerView;

  return (
    <>
      {/* Client Logos */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">EXCELLENT</h2>
            <div className="flex justify-center items-center gap-0">
              {/* 4.5 stars: 4 filled, 1 half */}
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              {/* Half star */}
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor"/>
                    <stop offset="50%" stopColor="white" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p className="text-sm">Based on <strong>117 reviews</strong></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" alt="Google" className="w-30 mx-auto mt-2" />
          </div>

          <div className="relative flex items-center">
            {/* Left Chevron */}
            <button
              className="absolute left-0 z-10 bg-white rounded-full shadow p-2 -translate-x-1/2 top-1/2 -translate-y-1/2 disabled:opacity-30"
              onClick={() => setCurrent(current - 1)}
              disabled={!canGoLeft}
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            {/* Carousel Cards */}
            <div className="flex w-full overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${current * (100 / cardsPerView)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-1 min-w-0 px-2"
                    style={{ minWidth: `calc(100% / ${cardsPerView})`, maxWidth: `calc(100% / ${cardsPerView})` }}
                  >
                    <Card>
                      <CardContent className="p-6 bg-white rounded-lg min-h-[340px] min-w-[260px] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                              <span className="text-gray-600 font-semibold">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{testimonial.name}</p>
                              <p className="text-sm text-gray-500">{testimonial.company}</p>
                              <p className="text-xs text-gray-400">{testimonial.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                            {/* Always 5 filled stars for cards */}
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                            {/* Verified icon to the right */}
                            <img src="https://thecloutmagazine.com/wp-content/uploads/2021/09/Legitly-Verified-Blue-Badge-top-page.png" alt="Verified" className="w-6 ml-4" />
                          </div>
                          <p className="text-gray-600 mb-4">
                            "{expanded[index] || testimonial.text.length <= 50
                              ? testimonial.text
                              : testimonial.text.slice(0, 50) + '...'}"
                          </p>
                          {testimonial.text.length > 50 && !expanded[index] && (
                            <button
                              className="text-blue-500 text-sm underline"
                              onClick={() => setExpanded(e => ({ ...e, [index]: true }))}
                            >
                              Read more
                            </button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Chevron */}
            <button
              className="absolute right-0 z-10 bg-white rounded-full shadow p-2 translate-x-1/2 top-1/2 -translate-y-1/2 disabled:opacity-30"
              onClick={() => setCurrent(current + 1)}
              disabled={!canGoRight}
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}