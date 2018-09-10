import "jasmine";

import Parking_lot from "../src/Parking_lot";

describe("parking_lot", () => {
    let parking_lot: Parking_lot;

    beforeEach(() => {
        parking_lot = new Parking_lot(10);
    })

    it("should have field capacity", () => {
       expect(parking_lot.capacity).toBe(10);
    });

    it("should be able to set occupied", () => {
        parking_lot.occupied = 3;
        expect(parking_lot.occupied).toBe(3);
    });

    it("should increase the occupied number when a spot is available and a car is added", () => {
        parking_lot.addCar();
        expect(parking_lot.occupied).toBe(1);
    })

})