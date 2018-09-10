import "jasmine";
import {ParkingBoy} from "../src/parking_boy";

describe("parking_boy", () => {

    it("should have field id", () => {
        const parkingBoy = new ParkingBoy("Tom");
        expect(parkingBoy.id).toBe("Tom");
    })
})