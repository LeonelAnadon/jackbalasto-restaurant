export function formatCurrency(num: number) {
  if(!num) num = 0;
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS',  minimumFractionDigits: 2 }).format(num);
}