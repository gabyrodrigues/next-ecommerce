export interface Currency {
  readonly value: number;
  format(): string;
}
export class CurrencyBRL implements Currency {
  readonly value: number;

  constructor(value: number | string) {
    this.value = +value;
  }
  format(): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(this.value);
  }
}

export function handleConvertPriceToBRL(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price);
}

export function handleConvertPriceNumberToString(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2
  }).format(price);
}

export function handleFormatCurrencyToFloat(value: string) {
  const convertedValue = parseFloat(value.replace(/[^\d,]+/g, "").replace(",", "."));

  return convertedValue;
}

export function maskCurrency(value: string) {
  const onlyDigits = value
    .split("")
    .filter((s) => /\d/.test(s))
    .join("")
    .padStart(3, "0");
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);

  const Current = new CurrencyBRL(digitsFloat);

  value = Current.format();

  return value;
}

export function currencyToFloat(value: string) {
  const convertedValue = parseFloat(value.replace(/[^\d,]+/g, "").replace(",", "."));

  return convertedValue;
}
