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

  describe('minimumTemperature', function(){
    it('is 10 degrees if energy saving mode is enabled', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    })

    it('is 15 degrees if energy saving mode is disabled', function(){
      thermostat.energySavingMode = false;
      expect(thermostat.minimumTemperature()).toEqual(15);
    })
  })

  describe('cooling the thermostat', function(){

    describe('when energy saving mode is on', function(){

      it('reduces the temperature by 1 degree if the current temperature is above 10', function() {
        thermostat.setPoint = 18;
        thermostat.cooler();
        expect(thermostat.setPoint).toEqual(17);
      });

      it('cannot reduce the temperature if the current temperature is 10 or below', function(){
        thermostat.setPoint = 10;
        thermostat.cooler();
        expect(thermostat.setPoint).toEqual(10);
      });
    });
  });


  describe('warming the thermostat', function(){
    it('increases the temperature by 1 degree', function(){
      thermostat.setPoint = 23;
      thermostat.warmer();
      expect(thermostat.setPoint).toEqual(24)
    })
  })

});
