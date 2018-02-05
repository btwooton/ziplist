function zipList(l1, l2) {
  const result = [];
  let innerl1 = l1;
  let innerl2 = l2;
  let current = innerl1;

  while (innerl1.length > 0 && innerl2.length > 0) {
    if (current === innerl1) {
      result.push(innerl1[0]);
      innerl1 = innerl1.slice(1);
      current = innerl2;
    } else {
      result.push(innerl2[0]);
      innerl2 = innerl2.slice(1);
      current = innerl1;
    }
  }
  while (innerl1.length > 0) {
    result.push(innerl1[0]);
    innerl1 = innerl1.slice(1);
  }
  while (innerl2.length > 0) {
    result.push(innerl2[0]);
    innerl2 = innerl2.slice(1);
  }
  return result;
}

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
