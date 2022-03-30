function viewPlayers() {
    let show = prompt("Do you want to show the players? (y/n) ");
    if (show === "y") {
        // print names from mafiaObj
        console.log("Mafia: ");
        for (let key in mafiaObj) {
            console.log(mafiaObj[key].name);
        }

        console.log(" ");

        console.log("Vilagers: ");
        for (let key in villagerObj) {
            console.log(villagerObj[key].name);
        }
        console.log("Doctors: ");
        for (let key in doctorObj) {
            console.log(doctorObj[key].name);
        }
        console.log("Cops: ");
        for (let key in copObj) {
            console.log(copObj[key].name);
        }
    }}