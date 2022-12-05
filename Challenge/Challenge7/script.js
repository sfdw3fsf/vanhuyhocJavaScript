const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
  }
}


mark.calBMI();
john.calBMI();

console.log(john.BMI);
console.log(mark.BMI);
console.log(`${john.BMI > mark.BMI ? `John's BMI${john.BMI} is higher than Mark's BMI(${mark.BMI}) `
  : `Mark's BMI(${mark.BMI}) is higher than John's BMI(${john.BMI}) `}`);


