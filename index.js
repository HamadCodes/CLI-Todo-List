#! /usr/bin/env node
import inqirer from "inquirer";
let list = [];
let isrunning = true;
while (isrunning) {
    const task = await inqirer.prompt([
        { message: "What task do you want to add to the list?", type: "input", name: "tsk" },
    ]);
    list.push(task.tsk);
    console.log(list);
    const again = await inqirer.prompt([
        { message: "Do you want to add more tasks to the list?", type: "confirm", name: "confirm" },
    ]);
    if (!again.confirm) {
        isrunning = false;
    }
}
