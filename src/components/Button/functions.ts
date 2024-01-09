import { ButtonVariant } from ".";

export function buttonVariantStyles(variant?: ButtonVariant) {
  switch (variant) {
    case "outline":
      return "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-primary border-white border-2 hover:bg-white hover:border-white hover:text-darkPrimary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    case "outlineSecondary":
      return "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-secondary border-white border-2 hover:bg-white hover:border-white hover:text-darkSecondary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    case "unstyled":
      return "flex justify-center p-2 font-semibold bg-transparent text-secondary hover:text-white disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    case "filled":
    default:
      return "flex justify-center p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary disabled:border-transparent disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
  }
}
