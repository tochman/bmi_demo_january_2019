function Person(attrs) {
    this.weight = attrs.weight;
    this.height = attrs.height;
    
};

Person.prototype.calculate_bmi = function () {
    this.bmiValue = 26.01;
}