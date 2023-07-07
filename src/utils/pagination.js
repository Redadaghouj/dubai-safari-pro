export function paginate(toursList, currentPage, sortedTourList) {
  const TOUR_PER_PAGE = 6;
  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const finishedIndex = currentPage * TOUR_PER_PAGE;

  const orderToursList = sortedTourList.slice(startIndex, finishedIndex);

  return {
    pages,
    orderToursList,
  };
}
