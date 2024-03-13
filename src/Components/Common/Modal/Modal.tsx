import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   onOptionClick: (option: string) => void;
   className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onOptionClick, className }) => {
   const combinedClassName = className
      ? `${styles["modal-style"]} ${className}`
      : styles["modal-style"];

   if (!isOpen) {
      return null;
   }

   return (
      <div>
         <div className={`${styles["button-style"]}`} onClick={() => onOptionClick("Transfer BSI")}>
            <img src="asd" />
            <span>Transfer BSI</span>
         </div>
         <div className={`${styles["button-style"]}`} onClick={() => onOptionClick("Transfer BRI")}>
            <img src="asd" />
            <span>Transfer BRI</span>
         </div>
         <button onClick={onClose}></button>
      </div>
   );
};

export default Modal;
