function Person(attrs) {
    this.weight = attrs.weight;
    this.height = attrs.height;
    
};

Person.prototype.calculate_bmi = function () {
    // this.bmiValue = 26.01;
    // this.bmiMessage = 'Overweight'
    const calculator = new BMICalculator();
    calculator.metric_bmi(this)
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
}