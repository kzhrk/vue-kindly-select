export const getParents = dom => {
  let result = [];
  let currentDom = dom;

  if (currentDom) {
    while (currentDom.parentNode) {
      result.push(currentDom.parentNode);
      currentDom = currentDom.parentNode;
    }
  }
  return result;
};

export const isSp = /iphone|ipod|ipad|android/.test(
  navigator.userAgent.toLowerCase()
);
