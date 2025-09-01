import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      y: 100, // drop in from below
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)", // springy animation
      stagger: 0.07, // delay between each letter
    });

    gsap.from(
      paragraphSplit.lines,
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.9,
        ease: "back.out(1.7)",
        stagger: 0.01,
      },
      "+=0.003"
    );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-left", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Cript. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Our non-alcoholic creations blend natural ingredients, vibrant
                flavors, and timeless recipes—crafted to nourish, refresh, and
                delight with every sip.
              </p>
              <a href="#cocktails"> Views Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
