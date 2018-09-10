import "jasmine";
import {ParkingBoy} from "../src/parking_boy";
import ParkingLot from "../src/parking_lot";

describe("parking_boy", () => {

    let parkingBoy: ParkingBoy;

    beforeEach(() => {
        parkingBoy = new ParkingBoy("Tom");
    });

    it("should have field id", () => {
        expect(parkingBoy.id).toBe("Tom");
    });

    it("should be able to assign parking lot for a parking boy", () => {
        const parkingLot = new ParkingLot(5);
        parkingBoy.assignParkingLot(parkingLot);

        expect(parkingBoy.parkingLotList.indexOf(parkingLot)).toBeGreaterThan(-1);
    });

    it("should park car to first available parking lot", () => {
        const parkingLot = new ParkingLot(5);
        const pl2 = new ParkingLot(5);

        parkingBoy.assignParkingLot(parkingLot);
        parkingBoy.assignParkingLot(pl2);

        parkingBoy.park();

        expect(parkingLot.occupied).toBe(1);
        expect(pl2.occupied).toBe(0);
    });

    it("should be able to remove car from assigned parking lot", () => {
        const parkingLot = new ParkingLot(5);
        parkingBoy.assignParkingLot(parkingLot);

        parkingBoy.park();
        parkingBoy.remove(parkingLot);

        expect(parkingLot.occupied).toBe(0);
    });

})