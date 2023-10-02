export function formatDate(date: string): string {
  const splits = date.split("-");
  if (splits.length === 3) {
    const day = splits[2];
    const month = splits[1];
    const year = splits[0];
    return `${day}/${month}/${year}`;
  }
  return "Fecha no válida";
}
