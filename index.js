var assert = require('assert');

function isInside(a, b) {
  let segments = [];
  let filteredSegments = [];
  let count = 0;
  let onLine = false;
  for (let i=0; i<a.length; i++) {
    let b = (i == a.length - 1) ? a[0] : a[i+1];
    segments.push([a[i],b]);
  }
  segments.forEach((segment) => {
    segment.sort((a,b) => a[0] - b[0]);
  });
  segments.sort((a,b) => b[1][0] - a[1][0]);

  segments.forEach((segment) => {
    segment.sort((a,b) => a[1] - b[1]);
    if (((segment[0][0] >= b[0]) || (segment[1][0] >= b[0])) && 
      (((segment[0][1] <= b[1]) && (segment[1][1] >= b[1])))){
      if(filteredSegments.length > 0) {
        if (filteredSegments.filter(filterSegment => (segment[0]  || segment [1]) ).length !== 0 ) {
          let joint = filteredSegments.filter(filterSegment => (segment[0]  || segment [1]))[0];
          if ((joint[0][1] !== b[1]) && (joint[1][1] !== b[1])) {
            filteredSegments.push(segment);
          }
        }
      } else {
        filteredSegments.push(segment); 
      }
    }
  });
  

  function hasCrossed(segment) {
    segment.sort((a,b) => a[0]-b[0]);
    let y = Math.abs(segment[1][1] - segment[0][1]);
    let x = (segment[1][0] >= segment[0][0]) ?  segment[1][0]-segment[0][0] : segment[0][0]-segment[1][0];
    let bY = Math.abs(b[1] - segment[0][1]);
    // use ratios to determine x coordinate of the point and a segment
    let crossPoint = ((x*bY)/y + segment[0][0]);
    if (crossPoint === b[0]) {
      onLine = true;
    } 
    return crossPoint > b[0] ? true : false;
  }
  
  
  filteredSegments.forEach(segment => {
    if (hasCrossed(segment)) {
        count ++;
    };
  });
  
  
  if (onLine) {
    return true;   
  } else {
    return (count % 2 !== 0) ? true : false;
  }
}

console.log(isInside([[1,1],[1,3],[2,4],[4,4],[4,3],[2,1]],[2,3]));

assert.equal(isInside([[1, 1], [4, 1], [2, 3]], [3, 2]), true);
assert.equal(isInside([[4,2], [8,2], [10,5], [9,9], [6,8], [3,6], [1,3]], [8,4]), true);
assert.equal(isInside([[1, 1], [4, 1], [2, 3]], [3, 2]), true);
assert.equal(isInside([[1, 1], [4, 1], [1, 3]], [3, 3]), false);
