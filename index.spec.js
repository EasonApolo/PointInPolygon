const pointInPolygon = require('./index')

const result = []


const polygonM = [
  [0, 0],
  [2, 0],
  [2, 2],
  [1, 1],
  [0, 2],
]

// 0: inside, 1 intersection
result.push(pointInPolygon(polygonM,
  [0.5, 0.5]
) === true)

// 1: left, 2 intersections
result.push(pointInPolygon(
  polygonM,
  [-0.5, 0.5]
) === false)

// 2: on vertex
result.push(pointInPolygon(
  polygonM,
  [1, 1]
) === true)

// 3: on edge
result.push(pointInPolygon(
  polygonM,
  [0.5, 1.5]
) === true)

// 4: middle, 2 intersections
result.push(pointInPolygon(
  polygonM,
  [0.6, 1.5]
) === false)

// 5: 3 intersections
result.push(pointInPolygon(
  polygonM,
  [0.4, 1.5]
) === true)

const polygonReLU = [
  [0, 0],
  [2, 0],
  [2, 1],
  [1, 1],
  [0, 2],
]

// 6: overlap
result.push(pointInPolygon(
  polygonReLU,
  [0.5, 1]
) === true)


const failed = result.reduce((arr, c, i) => {
  return c ? arr : [...arr, i]
}, [])
console.log(`${100 - failed.length / result.length * 100}% passed`)
if (failed.length) { console.log(`failed cases: ${failed}`) }