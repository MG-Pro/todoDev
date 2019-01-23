export default function stringDate(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  let d = date.getDate() + '';
  let m = date.getMonth() + 1 + '';
  let y = date.getFullYear() + '';

  if (d.length < 2) {
    d = '0' + d;
  }
  if (m.length < 2) {
    m = '0' + m;
  }
  return `${d}.${m}.${y}`;
}
