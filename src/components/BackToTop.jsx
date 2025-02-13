import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: visible ? "block" : "none",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "opacity 0.3s",
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
