const { expect } = require('expect');

const DaikinCloudController = require('../index.js');
const DaikinCloudDevice = require('../lib/device.js');

const testData = require('./test-data.js');

test.each([
	['Stylish', testData.stylish, 'dx23'],
	['Perfera', testData.perfera, 'dx4'],
	['Altherma', testData.altherma, 'Altherma'],
])('Get deviceModel from device %s', async (name, json, model) => {
	const device = new DaikinCloudDevice(json, new DaikinCloudController());
	expect(device.getDescription().deviceModel).toEqual(model);

});

test.each([
	['Stylish', testData.stylish, 'climateControl'],
	['Perfera', testData.perfera, 'climateControl'],
	['Altherma', testData.altherma, 'climateControlMainZone'],
])('Get name from device %s', async (name, json, climateControlEmbeddedId) => {
	const device = new DaikinCloudDevice(json, new DaikinCloudController());
	expect(device.getData(climateControlEmbeddedId, 'name').value).toEqual(name);
});
