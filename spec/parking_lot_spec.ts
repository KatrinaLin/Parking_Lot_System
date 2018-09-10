import "jasmine";

import Parking_lot from "../src/Parking_lot";

describe("parking_lot", () => {
    it("should have field capacity", () => {
       const parking_lot = new Parking_lot(10);
       expect(parking_lot.capacity).toBe(10);
    });
})