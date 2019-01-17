require('../spec.helper')

describe('BMICalculator', () => {
    // Setup
    let bmi_calculator
    let person

    beforeEach(() => {
        // assign values to your variables
        person = new Person({weight: 90, height: 186});
        bmi_calculator = new BMICalculator();
    });

    it('calculates BMI for a person using metric method', () => {
        // Execute code if needed
        bmi_calculator.metric_bmi(person)
        // add an assertion using the `expect` keyword
        expect(person.bmiValue).to.eql(26.01)
    })
})