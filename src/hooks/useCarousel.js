import { useRef, useState } from "react";

export function useCarousel() {
  const ref = useRef(null);
  const [dot, setDot] = useState(0);

  const onScroll = (e) => {
    const el = e.currentTarget;
    if (el) setDot(Math.round(el.scrollLeft / el.clientWidth));
  };

  const step = (direction) => {
    const el = ref.current;
    if (el) {
      el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
    }
  };

  const goTo = (index) => {
    const el = ref.current;
    if (el) el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return { ref, dot, onScroll, step, goTo };
}
