import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "flex justify-center p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary disabled:border-transparent disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        filled:
          "flex justify-center p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary disabled:border-transparent disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-primary border-white border-2 hover:bg-white hover:border-white hover:text-darkPrimary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        secondary:
          "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-secondary border-white border-2 hover:bg-white hover:border-white hover:text-darkSecondary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        ghost:
          "flex justify-center p-2 font-semibold bg-transparent text-secondary hover:text-white disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
