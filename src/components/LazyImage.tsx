"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

export function LazyImage(props: ImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "160px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {visible ? <Image {...props} alt={props.alt ?? ""} /> : null}
    </div>
  );
}
