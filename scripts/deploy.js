async function main() {
   const MyBeeple = await ethers.getContractFactory("MyBeeple");
   
   // Start deployment, returning a promise that resolves to a contract object
   const myBeeple = await MyBeeple.deploy();
   console.log("Contract deployed to address:", myBeeple.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
