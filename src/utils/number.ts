export function formatAmount(amount: number, currency: string) {
  return `${amount.toLocaleString("en-US")} ${currency}`;
}
