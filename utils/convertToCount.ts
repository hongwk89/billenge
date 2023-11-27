export default function convertToCount(count: number): string {
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
