import "jasmine";
import {ParkingBoy} from "../src/parking_boy";
import ParkingLot from "../src/parking_lot";

describe("parking_boy", () => {

    let parkingBoy: ParkingBoy;

    beforeEach(() => {
        parkingBoy = new ParkingBoy("Tom");
    })

    it("should have field id", () => {
        expect(parkingBoy.id).toBe("Tom");
    })

    it("should be able to assign parking lot for a parking boy", () => {
        const parkingLot = new ParkingLot(5);
        parkingBoy.assignParkingLot(parkingLot);

        expect(parkingBoy.parkingLotList.indexOf(parkingLot)).toBeGreaterThan(-1);
    })
})