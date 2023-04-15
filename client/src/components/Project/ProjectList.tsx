import React from "react";

type Props = {
  projectList: string[];
  selected: string;
  onClick: (title: string) => void;
};

export default function ProjectList({ projectList, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        PROJECT
      </h2>
      <ul>
        {projectList.map((title) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              title === selected && "text-sky-600"
            }`}
            key={title}
            onClick={() => onClick(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </section>
  );
}
