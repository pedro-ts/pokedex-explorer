import React from 'react'

type Props = {
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    title: string;
    subtitle?: string;
    className?: string;
}

export default function TitleAndSubtitle({headerType, title, subtitle = "", className}: Props) {
    const HType = headerType;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="0"
      className={`2xl:mx-[20%] ${className}`}
    >
      <HType className="text-center text-2xl font-bold p-5">{title}</HType>
      {subtitle && (
        <p
          className="text-center text-red-200 pb-5"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}