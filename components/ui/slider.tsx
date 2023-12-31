"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[5px] w-full grow overflow-hidden rounded-full bg-neutral-700">
      <SliderPrimitive.Range className="absolute h-full rounded bg-white transition-colors group-hover:bg-accent" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block aspect-square h-[13px] rounded-full bg-white opacity-0 transition  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 group-hover:opacity-100 " />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
