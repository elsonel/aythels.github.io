export interface IGallerySortable {
  date: Date;
  title: string;
}

export function sortByDate(arr: IGallerySortable[], decending: boolean = true) {
  const copy = [...arr];

  decending
    ? copy.sort((a, b) => b.date.valueOf() - a.date.valueOf())
    : copy.sort((a, b) => a.date.valueOf() - b.date.valueOf());

  return copy;
}

export function sortByName(arr: IGallerySortable[], decending: boolean = true) {
  const copy = [...arr];

  decending
    ? copy.sort((a, b) => a.title.localeCompare(b.title))
    : copy.sort((a, b) => b.title.localeCompare(a.title));

  return copy;
}
