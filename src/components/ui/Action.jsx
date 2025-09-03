import { useEffect } from "react";

export default function SAction({ click, setClick }) {
  // If modal not active, don’t render it
  if (!click) return null;

  return (
    <section
      onClick={() => setClick(false)} // ✅ hide on click outside
      className="w-screen h-screen bg-black/65 top-0 fixed z-70 flex items-center justify-center"
    >
      <iframe
        width="860"
        height="515"
        src="https://www.youtube.com/embed/EOC-9YFMwAk?si=1H1kFkWzY9fDFQyZ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="z-80"
        onClick={(e) => e.stopPropagation()} // prevent closing inside
      ></iframe>
    </section>
  );
}
