import "jasmine";

import Parking_lot from "../src/Parking_lot";

describe("parking_lot", () => {
    it("should have field capacity", () => {
       const parking_lot = new Parking_lot(10);
       expect(parking_lot.capacity).toBe(10);
    });


    it("should be able to set occupied", () => {
        const parking_lot = new Parking_lot(10);
        parking_lot.occupied = 3;
        expect(parking_lot.occupied).toBe(3);
    });



})