export function handleConvertPriceToBRL(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}

export function handleConvertPriceNumberToString(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(price)
}

export function handleFormatCurrencyToFloat(value: string) {
  const convertedValue = parseFloat(value.replace(/[^\d,]+/g, "").replace(",", "."));

  return convertedValue;
}
