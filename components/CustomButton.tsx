"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  id,
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button
      id={id}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <img src={rightIcon} alt="right icon" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
