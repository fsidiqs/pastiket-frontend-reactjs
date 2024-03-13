import React from "react";
import styles from "./ButtonOptionsArrow.module.css";

interface ButtonComponentProps {
   onButtonClick: () => void;
   placeholder?: string;
   className?: string;
}

const ButtonOptionsArrow: React.FC<ButtonComponentProps> = ({
   onButtonClick,
   placeholder,
   className
}) => {

   const combinedClassName = className
   ? `${styles["button-style"]} ${className}`
   : styles["button-style"];


   return (
      <>
         <div
            className={combinedClassName}
            onClick={onButtonClick}
         >
            <span>{placeholder}</span>
            <span>&gt;</span>
         </div>
      </>
    );
};

export default ButtonOptionsArrow;
