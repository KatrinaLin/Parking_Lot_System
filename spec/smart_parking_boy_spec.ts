import "jasmine";
import {Smart_parking_boy} from "../src/smart_parking_boy";

describe("parking_boy", () => {

    let smartPB: Smart_parking_boy;

    beforeEach(() => {
        smartPB = new Smart_parking_boy("Tom");
    });

    it("should have field id", () => {
        expect(smartPB.id).toBe("Tom");
    });


})