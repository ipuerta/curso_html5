describe("throwDice",function(){
  it("Evidence 1 - it does not return null", function() {
      expect(throwDice()).not.toBeNull();
  });

  it("Evidence 2 - it does return an integer", function() {
      var dice = throwDice();
      var value = dice % 1;

      expect(value).toEqual(0);
  });

  it("Evidence 3 - it returns a number greater than zero", function() {
      expect(throwDice()).toBeGreaterThan(0);
  });

  it("Evidence 4 - it returns a number less than six", function() {
      expect(throwDice()).toBeLessThan(7);
  });

  it("Evidence 5 - it returns a number", function() {
      expect(isNaN(throwDice())).toEqual(false);
  });
});
