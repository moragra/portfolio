import { useState, useEffect } from "react";
import "./Contact.scss";

export default function Contact() {
  const [copy, setCopy] = useState("");
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText("moragraa@gmail.com");
    setCopy("Copied to clipboard!");

  };

  const handleMouseEnter = () => {
    console.log('in')
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    console.log('out')
    setIsHovering(false);
  };

  useEffect(() => {
    const moveCursor = (e) => {
      const rect = document.querySelector('.contact__right').getBoundingClientRect();
      const x = e.clientX - rect.left - 16;
      const y = e.clientY - rect.top - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="contact">
      <div className="contact__left">
        <h2 className="contact__h2">Hello.</h2>
        <p className="contact__p">
          Have some big idea or brand to develop and need help? Then reach out
          I'd love to hear about your project and provide help
        </p>
      </div>
      <div className="contact__right">
        <div className="contact__space"></div>
        <h3
          onClick={clickHandler}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="contact__h3"
        >
          moragraa@gmail.com
        </h3>
        {isHovering && ( 
          <div className="contact__circle" 
          style={{
            position: "absolute",
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
            zIndex: 1000
          }}>
            <h4 className="contact__circle-t">Copy</h4>
          </div>
        )}
        {copy? (<h4 className="contact__copy-s">Success!</h4>) : (<h4 className="contact__copy">Click email to copy</h4>)}
      </div>
    </div>
  );
}