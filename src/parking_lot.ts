export default class Parking_lot {
    constructor(public capacity:number) {
    }
    occupied: number = 0;

    addCar():string {
        if (this.occupied < this.capacity) {
            this.occupied++;
            return "The car has been parked.";
        }
        return "Sorry, the parking lot is full.";
    }


    removeCar(): string {
        if (this.occupied > 0) {
            this.occupied--;
            return "A car has been removed from the parking lot.";
        }
        return "There is no car in the parking lot";
    }
}