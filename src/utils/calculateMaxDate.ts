export function calculateMaxDate(max: number) {
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + max);

  const year = maxDate.getFullYear();
  const month = String(maxDate.getMonth() + 1).padStart(2, '0');
  const day = String(maxDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
