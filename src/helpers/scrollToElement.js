export default function scrollToElement(hash) {
  document.querySelector(`#${hash}`).scrollIntoView({ behavior: "smooth" });
}
