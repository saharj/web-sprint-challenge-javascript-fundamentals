// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(l, w, h) {
    this.length = l;
    this.width = w;
    this.height = h;
  }
  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboidC = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidC.volume()); // 100
console.log(cuboidC.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(props) {
    super(props);
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSurface() {
    return Math.pow(this.length, 2) * 6;
  }
}

// Cube only works with `length` so we don't need to pass more arguments for width or height
const cube = new CubeMaker(2);

console.log(cube.cubeVolume());
console.log(cube.cubeSurface());
