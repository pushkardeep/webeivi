import React from "react";

const CONTENT = [
  {
    title: "Founder and\nagency Intro",
    subtitle: "what problems\nwe solve",
  },
  {
    title: "Founder and\nagency Intro",
    subtitle: "what problems\nwe solve",
  },
  {
    title: "Founder and\nagency Intro",
    subtitle: "what problems\nwe solve",
  },
  {
    title: "Founder and\nagency Intro",
    subtitle: "what problems\nwe solve",
  },
];

function TablesOfContent() {
  return (
    <div className="w-full h-fit pb-52 text-white">
      <div className="mx-auto max-w-[1700px]">
        {/* HEADING */}
        <h2 className="text-center text-[100px] font-[Poppins] font-medium leading-none tracking-[-0.04em]">
          <span className="bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 text-transparent">
            Table of Content
          </span>
        </h2>

        {/* TABLES OF CONTENT */}
        <div className="relative flex items-center justify-center gap-16 mt-18">
          {CONTENT?.map((section, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center gap-16">
                <h3 className="whitespace-pre-line text-center font-[Poppins] text-[30px] font-light leading-9">
                  {section.title}
                </h3>

                <h3 className="whitespace-pre-line text-center font-[Poppins] text-[30px] font-light leading-9">
                  {section.subtitle}
                </h3>
              </div>

              {index !== CONTENT.length - 1 && (
                <div className="h-[200px] w-[2.5px] rounded-full bg-[radial-gradient(circle,_#3C4BBF_0%,_#F4F6FC00_100%)]" />
              )}
            </React.Fragment>
          ))}

          {/* HORIZONTAL LINE */}
          <div className="absolute top-1/2 left-1/2 h-[2.5px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_#3C4BBF_0%,_#F4F6FC00_100%)]" />
        </div>
      </div>
    </div>
  );
}

export default TablesOfContent;
