const eps = 1e-6

const dcmp = x => {
  if (Math.abs(x) < eps) {
    return 0
  }
  return x < 0 ? -1 : 1
}

const onSegment = ([x1, y1], [x2, y2], [x, y]) => {
  return (
    dcmp((x1 - x) * (x2 - x) - (y1 - y) * (y2 - y)) === 0 &&
    dcmp((x1 - x) * (x2 - x) + (y1 - y) * (y2 - y)) <= 0
  )
}

const pointInPolygon = (polygon, point) => {
  const n = polygon.length
  const p = point
  let flag = false
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const p1 = polygon[i]
    const p2 = polygon[j]
    if (onSegment(p1, p2, p)) {
      return true
    }
    if (
      dcmp(p1[1] - p[1]) > 0 != dcmp(p2[1] - p[1]) > 0 &&
      dcmp(
        p[0] - ((p[1] - p1[1]) * (p1[0] - p2[0])) / (p1[1] - p2[1]) - p1[0]
      ) < 0
    ) {
      flag = !flag
    }
  }
  return flag
}

module.exports = pointInPolygon