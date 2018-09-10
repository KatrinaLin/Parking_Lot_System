export default class Parking_lot {
    constructor(public capacity:number) {
    }
    occupied: number = 0;

    addCar():void {
        if (this.occupied < this.capacity) {
            this.occupied++;
            return;
        }
        console.log("Sorry, the parking lot is full.");
    }

}