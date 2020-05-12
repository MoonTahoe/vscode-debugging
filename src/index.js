console.log("welcome to the sample application");

process.stdin.on("data", (input) => {
  const d = input.toString().trim();
  console.log(`echo: ${d}`);
  if (d === "exit") {
    console.log(`thank you`);
    process.exit();
  }
});
