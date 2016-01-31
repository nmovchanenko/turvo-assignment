var navBar = require('../../../pages/components/nav.tabs')();
var flightsForm = require('../../../pages/components/flights.form')();
var utils = require("../../../test_data/data.utils.js")();
var labels = require("../../../test_data/data.enum.js").labels;

/**
 * 1. Open Flights form
 * 2. Check flights specific labels
 *
 * expected result: Flights specific labels: From, To
 */
describe("Flights form: " , function() {

    it("should contain specific labels 'From' and 'To'", function() {
        browser.get("/");
        navBar.openFlights();

        var flightLabels = flightsForm.getDisplayedLabels();
        expect(flightLabels).toEqual(labels.FLIGHTS);
    });
});