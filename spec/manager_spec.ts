import "jasmine"
import {Manager} from "../src/manager";
import ParkingLot from "../src/parking_lot";
import {ParkingBoy} from "../src/parking_boy";
import {SmartParkingBoy} from "../src/smart_parking_boy";
import {SuperParkingBoy} from "../src/super_parking_boy";

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

    it("should manage a list of parking boys", () => {
        const pb1 = new ParkingBoy("PBTom");
        const pb2 = new SmartParkingBoy("SmartKavin");
        const pb3 = new SuperParkingBoy("SuperMario");

        manager.assignParkingBoy(pb1);
        manager.assignParkingBoy(pb2);
        manager.assignParkingBoy(pb3);

        expect(manager.parkingBoyList.indexOf(pb1)).toBeGreaterThan(-1);
        expect(manager.parkingBoyList.indexOf(pb2)).toBeGreaterThan(-1);
        expect(manager.parkingBoyList.indexOf(pb3)).toBeGreaterThan(-1);
    });

    it("should print summary", () => {
        const pb1 = new ParkingBoy("PBTom");
        const pb2 = new SmartParkingBoy("SmartKavin");
        const pb3 = new SuperParkingBoy("SuperMario");

        pb1.assignParkingLot(new ParkingLot(5));
        pb2.assignParkingLot(new ParkingLot(5));
        pb3.assignParkingLot(new ParkingLot(5));
        manager.assignParkingBoy(pb1);
        manager.assignParkingBoy(pb2);
        manager.assignParkingBoy(pb3);

        let message = manager.getManagerRecord();
        expect(message).toBe("M 0 15\n\tB 0 5\n\t\tP 0 5\n\tB 0 5\n\t\tP 0 5\n\tB 0 5\n\t\tP 0 5\n");
    });
})