export function sorting(sortType, toursList) {
  return sortType === 'low'
    ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
    : sortType === 'high'
    ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a, b) => b.rating - a.rating);
}
