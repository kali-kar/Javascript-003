export function formatCurrency(priceCents) {
    return ((priceCents * 83.2) /100).toFixed(2);
}