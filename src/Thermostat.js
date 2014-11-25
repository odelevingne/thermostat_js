function Thermostat() {
	this.setPoint = 20;
	this.energySavingMode = true;
};

Thermostat.prototype.maximumTemperature = function() {
	if(this.energySavingMode) return 25;
	return 30;
};

Thermostat.prototype.minimumTemperature = function() {
	if(this.energySavingMode) return 10;
	return 15;
}

Thermostat.prototype.cooler = function() {
  if(this.setPoint <= this.minimumTemperature()) return; 
  	this.setPoint -= 1;
};

Thermostat.prototype.warmer = function() {
	this.setPoint += 1;
}