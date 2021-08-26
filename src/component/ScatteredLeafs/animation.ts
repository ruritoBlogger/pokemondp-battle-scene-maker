import { gsap } from "gsap";
import { MutableRefObject } from "react";

interface IScatteredLeafsAnimationProps {
  startTime: number;
  duration: number;
}

export const ScatteredLeafsAnimation = (
  target: MutableRefObject<null>,
  animationProps: IScatteredLeafsAnimationProps
) => {
  const tl = gsap.timeline({ repeat: 1, delay: 0 });
};
