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

    getSummary() {
        let summary = this.parkingLotList.reduce((sum, cur) => {
            sum.totalCapacity += cur.capacity;
            sum.totalOccupied += cur.occupied;
            return sum;
        }, {totalCapacity: 0, totalOccupied: 0});
        return summary;
    }

    getParkingLotSummary() {
        return this.parkingLotList.reduce((msg, parkingLot) => {
            msg += `\t\tP ${parkingLot.occupied} ${parkingLot.capacity}\n`;
            return msg;
        }, "");
    }

    getParkingBoyRecord() {
        let summary = this.getSummary();
        let message = `\tB ${summary.totalOccupied} ${summary.totalCapacity}\n`;
        return message + this.getParkingLotSummary();
    }
}