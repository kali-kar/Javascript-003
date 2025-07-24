export function formatCurrency(priceCents) {
    return (((Math.round(priceCents) * 83.2) /100)*0.28).toFixed(2);
}