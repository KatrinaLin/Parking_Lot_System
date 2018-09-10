import "jasmine";
import {SmartParkingBoy} from "../src/smart_parking_boy";
import ParkingLot from "../src/parking_lot";

describe("parking_boy", () => {

    let smartPB: SmartParkingBoy;

    beforeEach(() => {
        smartPB = new SmartParkingBoy("Tom");
    });

    it("should have field id", () => {
        expect(smartPB.id).toBe("Tom");
    });

    it("should park car to parking lot with the most available spots", () => {
        const pl1 = new ParkingLot(5);
        const pl2 = new ParkingLot(5);
        const pl3 = new ParkingLot(5);

        pl1.occupied = 3;
        pl2.occupied = 1;
        pl3.occupied = 4;

        smartPB.assignParkingLot(pl1);
        smartPB.assignParkingLot(pl2);
        smartPB.assignParkingLot(pl3);

        smartPB.park();

        expect(pl1.occupied).toBe(3);
        expect(pl2.occupied).toBe(2);
        expect(pl3.occupied).toBe(4);
    });
})