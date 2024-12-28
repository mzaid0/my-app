import React from "react";

interface SectionParagraphProps {
  title?: string;
  content: string | React.ReactNode;
}

const SectionParagraph: React.FC<SectionParagraphProps> = ({
  title,
  content,
}) => {
  return (
    <div className="text-justify text-[19px] leading-loose space-y-2">
      {title && <h2 className="font-bold mb-2">{title}</h2>}
      <p>{content}</p>
    </div>
  );
};

export default SectionParagraph;
