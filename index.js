class Polygon {

    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
       let sum = 0
        for(const num of this.sides) {
            sum += num
        }
        return sum 
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length !== 3) return;
      return (this.sides[0] + this.sides[1] >= this.sides[2]) && (this.sides[1] + this.sides[2] >= this.sides[0]) && (this.sides[2] + this.sides[0] >= this.sides[1])
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length !== 4) return;
        return (this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3])
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}