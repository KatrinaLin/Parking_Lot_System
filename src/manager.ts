import {ParkingBoy} from "./parking_boy";

export class Manager extends ParkingBoy{

    parkingBoyList: ParkingBoy[] = [];

    assignParkingBoy(parkingBoy: ParkingBoy) {
        this.parkingBoyList.push(parkingBoy);
    }

    getSummary() {
        let summary = this.parkingBoyList.reduce((sum, pb) => {
            let pbSummary = pb.getSummary();
            sum.totalCapacity += pbSummary.totalCapacity;
            sum.totalOccupied += pbSummary.totalOccupied;
            return sum;
        }, {totalCapacity: 0, totalOccupied: 0});
        return summary;
    }

    getManagerRecord() {
        let summary = this.getSummary();
        let message = `M ${summary.totalOccupied} ${summary.totalCapacity}\n`;
        message += this.getParkingLotSummary();

        return this.parkingBoyList.reduce((msg, pb) => msg += pb.getParkingBoyRecord(), message);
    }
}