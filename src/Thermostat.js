function Thermostat() {
	this.setPoint = 20;
	this.energySavingMode = true;
};

Thermostat.prototype.maximumTemperature = function() {
	if(this.energySavingMode) return 25;
	return 30;
};