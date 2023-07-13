const args = process.argv.slice(2);
let delay = 1000;

for (const arg of args) {
  let secBeep = Number(arg);  

  if (Number.isNaN(arg) || secBeep < 0) {
    console.log(`invalide: ${arg}`);
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
  delay += (secBeep * 1000);
};