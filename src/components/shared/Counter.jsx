"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  end,
  suffix = "",
  duration = 1800,
}) {
  const [val, setVal] = useState(0);

  const ref = useRef(null);

  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !started.current
        ) {
          started.current = true;

          const start = performance.now();

          const tick = (t) => {
            const p = Math.min(
              (t - start) / duration,
              1
            );

            setVal(
              Math.floor(
                end * (1 - Math.pow(1 - p, 3))
              )
            );

            if (p < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.3,
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}