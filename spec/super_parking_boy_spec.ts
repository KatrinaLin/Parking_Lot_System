import "jasmine";
import ParkingLot from "../src/parking_lot";
import {SuperParkingBoy} from "../src/super_parking_boy";

describe("parking_boy", () => {

    let superPB: SuperParkingBoy;

    beforeEach(() => {
        superPB = new SuperParkingBoy("Tom");
    });

    it("should have field id", () => {
        expect(superPB.id).toBe("Tom");
    });

    it("should park car to parking lot with the most available spots ratio", () => {
        const pl1 = new ParkingLot(6);
        const pl2 = new ParkingLot(3);
        const pl3 = new ParkingLot(20);
        const pl4 = new ParkingLot(20);

        pl1.occupied = 3;
        pl2.occupied = 1;
        pl3.occupied = 4;
        pl4.occupied = 18;

        superPB.assignParkingLot(pl1);
        superPB.assignParkingLot(pl2);
        superPB.assignParkingLot(pl3);
        superPB.assignParkingLot(pl4);

        superPB.park();

        expect(pl1.occupied).toBe(3);
        expect(pl2.occupied).toBe(1);
        expect(pl3.occupied).toBe(5);
        expect(pl4.occupied).toBe(18);
    });
})