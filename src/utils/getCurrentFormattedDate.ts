export function getCurrentFormattedDate(): string {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${today.getFullYear()}-${month}-${day}`;
  return formattedDate;
}
