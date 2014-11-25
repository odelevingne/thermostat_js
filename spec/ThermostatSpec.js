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

    describe('when energy saving mode is off', function(){

      it('reduces the temperature by 1 degree if the current temperature is 16 or above', function(){
        thermostat.energySavingMode = false;
        thermostat.cooler();
        expect(thermostat.setPoint).toEqual(19)
      })

      it('cannot reduce the temperature if the current temperature is 15 or below', function(){
        thermostat.setPoint = 15;
        thermostat.energySavingMode = false;
        thermostat.cooler();
        expect(thermostat.setPoint).toEqual(15)
      })
    })
  });


  describe('warming the thermostat', function(){
    describe('when energy saving mode is on', function(){

      it('increases the temperature by 1 degree if the current temperature is 24 or below', function(){
        thermostat.setPoint = 23;
        thermostat.warmer();
        expect(thermostat.setPoint).toEqual(24)
      })

      it('cannot increase the temperature when the current temperature is 25 or above', function(){
        thermostat.setPoint = 25;
        thermostat.warmer();
        expect(thermostat.setPoint).toEqual(25)
      })
    })
    
    describe('when energy saving mode is off', function(){

      it('increases the temperature by 1 degree if the current temperature is 29 or below', function(){
        thermostat.energySavingMode = false;
        thermostat.setPoint = 29;
        thermostat.warmer();
        expect(thermostat.setPoint).toEqual(30);
      })

      it('cannot increase the temperature when the current temperature is 30 or above', function(){
        thermostat.energySavingMode = false;
        thermostat.setPoint = 30;
        thermostat.warmer;
        expect(thermostat.setPoint).toEqual(30)
      })
    })
  })

  describe('status', function(){

    it('is "good" if the current temperature is <= 18', function(){
      thermostat.setPoint = 18;
      expect(thermostat.status()).toEqual('good');
    })

    it('is "average" if the current temperature is <= 25', function(){
      thermostat.setPoint = 22;
      expect(thermostat.status()).toEqual('average');
    })


    it('is "poor" if the current temperature is > 25', function(){
      thermostat.setPoint = 26;
      expect(thermostat.status()).toEqual('poor');
    })
  })

  describe('reset button', function(){
    it('resets the temperature to 20 degrees', function(){
      thermostat.setPoint = 24;
      thermostat.reset();
      expect(thermostat.setPoint).toEqual(20);
    })
  })
});
