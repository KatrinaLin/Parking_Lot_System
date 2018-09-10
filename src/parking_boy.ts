import ParkingLot from "./parking_lot";

export class ParkingBoy {
    constructor(public id: string) {};

    parkingLotList: ParkingLot[] = [];

    assignParkingLot(parkingLot: ParkingLot) {
        this.parkingLotList.push(parkingLot);
    }
}