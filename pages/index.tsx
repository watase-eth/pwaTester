import { ConnectWallet, Web3Button, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const {
    contract
  } = useContract("0x724B87062417088fde4F27a5E3618bC865adF11A");
  const {
    data: ownedNFTs
  } = useOwnedNFTs(contract, address);
  return (
    <div>
      <ConnectWallet/>
      <Web3Button
        contractAddress="0x724B87062417088fde4F27a5E3618bC865adF11A"
        action={(contract) => contract.erc1155.claim(0, 1)}
      >Claim NFT</Web3Button>
      <p>Balance: {ownedNFTs && ownedNFTs.length > 0 ? (
        ownedNFTs[0].quantityOwned
      ) : (
        "0"
      )}</p>
    </div>
  );
};

export default Home;
