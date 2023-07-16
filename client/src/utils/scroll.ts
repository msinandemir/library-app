export const scrollToTop = (
  value: number,
  behavior: "smooth" | "auto" | "instant"
) => {
  window.scrollTo({
    top: value,
    behavior: behavior,
  });
};
