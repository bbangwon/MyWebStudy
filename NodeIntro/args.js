console.log("args.js");
console.log(process.argv);

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(`arg[${i}]: ${args[i]}`);
}