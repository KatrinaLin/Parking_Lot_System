import ParkingLot from "./parking_lot";

export class ParkingBoy {
    constructor(public id: string) {};

    parkingLotList: ParkingLot[] = [];

    assignParkingLot(parkingLot: ParkingLot) {
        this.parkingLotList.push(parkingLot);
    }

    park(): string {
        let pl = this.parkingLotList.filter(pl => pl.occupied < pl.capacity);
        if (pl.length == 0) {
            return "Sorry, all my parking lots are full."
        }
        return pl[0].addCar();
    }


    remove(parkingLot: ParkingLot) {
        if (this.parkingLotList.indexOf(parkingLot) == -1) {
            return "Sorry, this is not my parking lot.";
        }
        return parkingLot.removeCar();
    }
}