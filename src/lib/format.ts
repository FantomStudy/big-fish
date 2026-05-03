export function toCurrency(number: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    ...options,
  }).format(number);
}
