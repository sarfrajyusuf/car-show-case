"use client";
import Image from "next/image";
import { ICostomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: ICostomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
        // disabled={"false"}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
