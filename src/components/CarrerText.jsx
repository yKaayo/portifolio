import gsap from "gsap";
import { useRef, useEffect } from "react";
import SplitTextJS from "split-text-js";

export default function CarrerText() {
  const paragraphRefs = useRef(null);

  useEffect(() => {
    const titles = gsap.utils.toArray(paragraphRefs.current.children);
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 90,
          rotateX: -90,
          stagger: 0.022,
          duration: 3,
        },
        "<0.5"
      ).to(
        splitTitle.chars,
        {
          opacity: 1,
          y: -90,
          rotateX: 90,
          stagger: 0.022,
          duration: 3,
        },
        "<0.5"
      );
    });
  }, []);

  return (
    <div ref={paragraphRefs} className="text-wrapper mt-20">
      <p style={{ lineHeight: 0 }}>Desenvolvedor Web</p>
      <p style={{ lineHeight: 0 }}>Web Design</p>
      <p style={{ lineHeight: 0 }}>Programador Front-end</p>
      <p style={{ lineHeight: 0 }}>UX/UI Designer</p>
    </div>
  );
}
