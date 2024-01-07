import { ButtonVariant } from ".";

export function buttonVariantStyles(variant?: ButtonVariant) {
  switch (variant) {
    case "filled":
      return "p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary";
    case "outline":
      return "p-2 rounded-lg font-semibold bg-transparent text-primary border-white border-2 hover:bg-white hover:border-white hover:text-darkPrimary disabled:bg-transparent disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-30";
    case "outlineSecondary":
      return "p-2 rounded-lg font-semibold bg-transparent text-secondary border-white border-2 hover:bg-white hover:border-white hover:text-darkSecondary disabled:bg-transparent disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-30";
    default:
      return "p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary";
  }
}
