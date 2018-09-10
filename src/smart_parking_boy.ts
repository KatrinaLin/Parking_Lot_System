import {ParkingBoy} from "./parking_boy";

export class SmartParkingBoy extends ParkingBoy{

    park(): string {
        this.parkingLotList.sort((a, b) => a.occupied - b.occupied);
        let pl = this.parkingLotList.filter(pl => pl.occupied < pl.capacity);
        if (pl.length == 0) {
            return "Sorry, all my parking lots are full."
        }
        return pl[0].addCar();
    }

}