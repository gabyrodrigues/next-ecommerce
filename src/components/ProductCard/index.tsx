import * as React from "react";

import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("block rounded-xl overflow-hidden bg-lightGray text-black", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

interface CardImageProps extends ImageProps {
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
}

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, src = "", height = 256, width = 300, alt = "Card Image", ...props }, ref) => (
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        ref={ref}
        height={height}
        width={width}
        className={cn("w-full h-64 object-cover object-center", className)}
        {...props}
      />
    </div>
  )
);
CardImage.displayName = "CardImage";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-bold text-xl leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm mt-1 text-darkGray truncate line-clamp-3 whitespace-normal", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-5 min-w-0", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardImage, CardFooter, CardTitle, CardDescription, CardContent };
