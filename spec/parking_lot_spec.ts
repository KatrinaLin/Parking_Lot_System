import "jasmine";

import ParkingLot from "../src/Parking_lot";

describe("parking_lot", () => {
    let parkingLot: ParkingLot;

    beforeEach(() => {
        parkingLot = new ParkingLot(10);
    })

    it("should have field capacity", () => {
       expect(parkingLot.capacity).toBe(10);
    });

    it("should be able to set occupied", () => {
        parkingLot.occupied = 3;
        expect(parkingLot.occupied).toBe(3);
    });

    it("should increase the occupied number when a spot is available and a car is added", () => {
        parkingLot.addCar();
        expect(parkingLot.occupied).toBe(1);
        expect(parkingLot.addCar()).toBe("The car has been parked.");
    });

    it("should not increase the occupied number when the parking lot is full", () => {
        parkingLot.occupied = 10;
        expect(parkingLot.occupied).toBe(10);
        expect(parkingLot.addCar()).toBe("Sorry, the parking lot is full.");
    })

    it("should decrease the occupied number when a car is removed from the parking lot", () => {
        parkingLot.occupied = 10;
        parkingLot.removeCar();
        expect(parkingLot.occupied).toBe(9);
        expect(parkingLot.removeCar()).toBe("A car has been removed from the parking lot.");
    });

    it("should not decrease the occupied number when the parking lot is empty", () => {
        parkingLot.occupied = 0;
        parkingLot.removeCar();
        expect(parkingLot.occupied).toBe(0);
        expect(parkingLot.removeCar()).toBe("There is no car in the parking lot.");
    });
})