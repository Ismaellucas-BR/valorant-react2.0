import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  imagesUrl?: React.ReactNode;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, imagesUrl } = props;

  return (
    <div
      className={"bg-black embla-thumbs__slideThumb".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}>
      <div onClick={onClick} className="xl:h-[7.5rem]! xl:w-full">
        {imagesUrl}
      </div>
    </div>
  );
};
