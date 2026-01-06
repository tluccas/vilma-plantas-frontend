"use client";

type SubtitleProps = {
  text: string;
  highlight?: string;
  className?: string;
};

export function SubTitle({ text, highlight, className }: SubtitleProps) {
  return (
    <h2
      className={`subtitle mt-2 mb-10 text-xl sm:text-2xl font-semibold text-heading text-center ${
        className ?? ""
      }`}  
    >
      {text}{" "}
      {highlight && (
        <span className="relative">
          <span style={{ color: "#6cc24a" }}>{highlight}</span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-3"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,8 Q25,2 50,6 T100,4"
              stroke="#92d050"
              strokeWidth="3"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </span>
      )}
    </h2>
  );
}
