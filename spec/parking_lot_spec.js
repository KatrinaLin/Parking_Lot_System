"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var Parking_lot_1 = require("../src/Parking_lot");
describe("parking_lot", function () {
    it("should have field capacity", function () {
        var parking_lot = new Parking_lot_1.default(10);
        expect(parking_lot.capacity).toBe(10);
    });
});
