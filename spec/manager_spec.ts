import "jasmine"
import {Manager} from "../src/manager";

describe("manager", () => {

    let manager: Manager;

    beforeEach(() => {
        manager = new Manager("David");
    });

    it("should have field id", () => {
        expect(manager.id).toBe("David");
    });
})