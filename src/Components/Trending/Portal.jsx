import { useState } from "react";
import { createPortal } from "react-dom";
import Trending from "../Search/Trending";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <Trending onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
