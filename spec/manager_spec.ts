import "jasmine"
import {Manager} from "../src/manager";
import ParkingLot from "../src/parking_lot";

describe("manager", () => {

    let manager: Manager;

    beforeEach(() => {
        manager = new Manager("David");
    });

    it("should have field id", () => {
        expect(manager.id).toBe("David");
    });

    it("should park car to first available parking lot", () => {
        const pl1 = new ParkingLot(5);
        const pl2 = new ParkingLot(5);

        manager.assignParkingLot(pl1);
        manager.assignParkingLot(pl2);

        manager.park();

        expect(pl1.occupied).toBe(1);
        expect(pl2.occupied).toBe(0);
    });
})