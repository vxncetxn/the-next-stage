import { useLayoutEffect } from "react";

export function range(size, start = 0) {
  return [...Array(size).keys()].map((i) => i + start);
}

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

export function getMonthName(monthNum) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[monthNum];
}
