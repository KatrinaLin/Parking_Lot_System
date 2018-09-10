import {ParkingBoy} from "./parking_boy";

export class Manager extends ParkingBoy{

    parkingBoyList: ParkingBoy[] = [];

    assignParkingBoy(parkingBoy: ParkingBoy) {
        this.parkingBoyList.push(parkingBoy);
    }

}