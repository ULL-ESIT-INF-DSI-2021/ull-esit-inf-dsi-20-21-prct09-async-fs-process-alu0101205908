import { spawn } from "child_process";
import { watch } from "fs";

watch("./bbdd", () => {
    const ls = spawn('ls', ['-la', "./"]);
    let output = '';
    ls.stdout.on('data', chunk => output += chunk);
    ls.on('close', () => {
    const parts = output.split(/\s+/);
    console.log([parts[0], parts[4], parts[8]]);
    });
});
    