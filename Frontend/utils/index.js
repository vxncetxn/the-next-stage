import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export function range(size, start = 0) {
  return [...Array(size).keys()].map((i) => i + start);
}

export function useURLQuery() {
  const router = useRouter();
  return new URLSearchParams(router.asPath.slice(router.pathname.length));
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

export function validateEmail(email) {
  const [emailBeforeAt, emailAfterAt] = email.split("@");
  const emailRegex = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (email.length > 254) {
    return false;
  } else if (!emailRegex.test(email)) {
    return false;
  } else if (emailBeforeAt.length > 64) {
    return false;
  } else if (emailAfterAt.split(".").some((segment) => segment.length > 63)) {
    return false;
  }

  return true;
}
