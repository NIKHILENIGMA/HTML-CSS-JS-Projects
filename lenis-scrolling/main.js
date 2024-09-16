import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initializeLenisScrolling } from "./lenis";


gsap.registerPlugin(ScrollTrigger);

function imageAnimation() {
  // Get all the images
  let images = document.querySelectorAll(".element");

  // Loop through all the images
  images.forEach((ele, index) => {
    let image = ele.querySelector("img");
    // Create a timeline
    let tl = gsap.timeline();

    let xTransform = gsap.utils.random(-100, 100);
    tl.set(
      image,
      {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      },
      "image"
    ).to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "image"
    );
  });
}

function splitTextAnimation() {
  const splitTypes = document.querySelectorAll(".reveal-type");
  console.log(splitTypes);

  splitTypes.forEach((char, index) => {
    const text = new SplitType(char);

    gsap.from(text.chars, {
      duration: 1,
      opacity: 0,
    //   y: 50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: char,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
        // markers: true,
      },
    });
  });
}

initializeLenisScrolling(1.4);
imageAnimation();
splitTextAnimation();
