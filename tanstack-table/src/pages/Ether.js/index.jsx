import { ethers } from "ethers";
import { useEffect } from "react";
import { firstContractAbi } from "./abi/first";

const Ether = () => {
  const contractAddress = "0x890Eec440822Ba96f3E0e16A45545BC691303D1f";
  const contractAbi = firstContractAbi;
  useEffect(() => {
    async function getProvider() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const firstContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );

      // Transfer 0.1 Ether (in wei)
      // const tx = await firstContract.getEther({
      //   value: ethers.parseEther("0.1"), // Convert 0.1 Ether to Wei
      // });

      // await tx.wait(); // Wait for the transaction to be mined
      // console.log("Transaction successful:", tx);
      const getBalance = await firstContract.getBalance(contractAddress);
      // const tx = await firstContract.sendAllEther(
      //   "0x11807583f6DdB410C09022AF681ef0529107f083"
      // );
      // await tx.wait();

      // console.log("Transaction successful:", tx);
      console.log(getBalance);
    }
    getProvider();
  }, []);
  return <div>Ether</div>;
};

export default Ether;
