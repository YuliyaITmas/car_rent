import { ButtonClose } from "../Button/Button";
import Icons from "../../assets/images/icons.svg";
import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";
import { Overlay, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, isModalOpen, children }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    isModalOpen ? (
      <Overlay onClick={handleBackdropClick}>
        <ModalContent>
          <ButtonClose
            type="button"
            onClick={onClose}
            ariaLabel="Close Modal"
            iconHref={`${Icons}#icon-close`}
          />
          {children}
        </ModalContent>
      </Overlay>
    ) : null,
    modalRoot
  );
};
