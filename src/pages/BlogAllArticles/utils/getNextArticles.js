export const getNextArticles = (currentArticleId, articleList = []) => {
  const currentIndex = articleList.findIndex(
    ({ _id }) => _id === currentArticleId
  );

  if (currentIndex === -1 || !articleList.length) {
    return [];
  }

  let nextIndex1 = currentIndex + 1;
  let nextIndex2 = currentIndex + 2;

  // last one
  if (currentIndex === articleList.length - 1) {
    nextIndex1 = currentIndex - 2;
    nextIndex2 = currentIndex - 1;
  }

  // one before the last
  if (currentIndex === articleList.length - 2) {
    nextIndex1 = currentIndex - 1;
    nextIndex2 = currentIndex + 1;
  }

  return [articleList[nextIndex1], articleList[nextIndex2]];
};
