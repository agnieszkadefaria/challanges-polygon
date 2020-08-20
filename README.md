# challanges-polygon

My solution for https://js.checkio.org/en/mission/inside-block/ challenge

The challenge (taken from https://js.checkio.org/en/mission/inside-block/):
Determine whether the given point lies inside the polygon.

For example, on the left image you see a polygon which is described by ((2,1),(1,5),(5,7),(7,7),(7,2)) and the point at (2,7). The result is False.
For the right image the point lies on the edge and gets counted as inside the polygon, making the result True.

Input: Two arguments. Polygon coordinates as a tuple of tuples with two integers each. A checking point coordinates as a tuple of two integers.

Output: Whatever the point inside the polygon or not as a boolean.

How it is used: This concept is using for image recognizing. But as we said early it can be useful for topographical software and city planning.

Precondition:
all(x ≥ 0 and y ≥ 0 for x, y in polygon)
point[0] ≥ 0 and point[1] ≥ 0
