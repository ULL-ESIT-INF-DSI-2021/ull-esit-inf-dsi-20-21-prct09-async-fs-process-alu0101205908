"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
fs_1.watch("./bbdd", () => {
    const ls = child_process_1.spawn('ls', ['-la', "./"]);
    let output = '';
    ls.stdout.on('data', chunk => output += chunk);
    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
});
