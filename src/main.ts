import {Manager} from "./manager";

function printStatement(manager: Manager) {
    console.log(`M ${manager.getSummary().totalOccupied} ${manager.getSummary().totalCapacity}\n`)

    
}