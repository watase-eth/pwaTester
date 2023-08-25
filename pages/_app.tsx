import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="6f42f9f181f65033158faa317db43079"
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x953c64D8e1e63a6A5DD3517abeE3F92fCEEf7914",
          gasless: true,
          personalWallets: [
            paperWallet({
              paperClientId: "c47a3176-f53e-4a3b-b06f-7547802e81c8",
            })
          ]
        })
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
