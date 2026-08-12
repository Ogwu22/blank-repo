import os from 'os';
import { bytesToSize } from './FreeMemeory.mjs';

console.log('System Information:');
console.log(`Operation System: ${os.platform()} (${os.type()} ${os.release()})`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);