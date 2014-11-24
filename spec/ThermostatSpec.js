describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.setPoint).toEqual(20);
  })

  it('starts in energy saving mode', function(){
    expect(thermostat.energySavingMode).toEqual(true)
  })

  describe('maximum temperature', function(){
    it('is 25 degrees if energy saving mode is enabled', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 30 degrees if energy saving mode is disabled', function(){
      thermostat.energySavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(30);
    })
  })

});
