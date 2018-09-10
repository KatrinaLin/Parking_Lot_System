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
        expect(parking_lot.addCar()).toBe("The car has been parked.");
    });

    it("should not increase the occupied number when the parking lot is full", () => {
        parking_lot.occupied = 10;
        expect(parking_lot.occupied).toBe(10);
        expect(parking_lot.addCar()).toBe("Sorry, the parking lot is full.");
    })

    it("should decrease the occupied number when a car is removed from the parking lot", () => {
        parking_lot.occupied = 10;
        parking_lot.removeCar();
        expect(parking_lot.occupied).toBe(9);
        expect(parking_lot.removeCar()).toBe("A car has been removed from the parking lot.");
    });

    it("should not decrease the occupied number when the parking lot is empty", () => {
        parking_lot.occupied = 0;
        parking_lot.removeCar();
        expect(parking_lot.occupied).toBe(0);
        expect(parking_lot.removeCar()).toBe("There is no car in the parking lot.");
    });
})