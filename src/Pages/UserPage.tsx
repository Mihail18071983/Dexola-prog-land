import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import styles from "./UserPage.module.scss";
import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { setAddress, setBalance } from "../redux/wallet.slice";
import { toast } from "react-toastify";
import detectEthereumProvider from "@metamask/detect-provider";

export const UserPage = () => {
  const dispatch = useDispatch();
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [addressWalet, setAddressWallet] = useState("");
  const [balanceWallet, setBalanceWallet] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      if (!signer) return;
      const balance = await signer.getBalance();
      const formattedBalance = parseFloat(
        ethers.formatEther(balance.toString())
      ).toFixed(2);
      const address = await signer.getAddress();
      dispatch(setAddress(address));
      dispatch(setBalance(formattedBalance));
      setAddressWallet(address);
      setBalanceWallet(formattedBalance);
    };
    getBalance();
  }, [signer, dispatch]);

  const connectWallet = async () => {
    try {  
      const provider = await detectEthereumProvider();
      if (provider && provider === window.ethereum) {
          const ethresProvider = new Web3Provider(provider);
        toast.success("Ethereum provider detected!");
        // const { chainId } = await provider.getNetwork();
        const  chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (+chainId !== 5) {
          throw new Error("Change network to Goerli");
        }
        const signer = ethresProvider.getSigner();
        setSigner(signer);
        setIsConnected(true);
      } else {
        toast.warning("Please install MetaMask!");
        setIsConnected(false);
      }
    } catch (err) {
      toast.error("Error connecting wallet");
      setIsConnected(false);
    }
  };

  return (
    <>
      <Header
        onConnectWallet={connectWallet}
        addressWalet={addressWalet}
        balanceWallet={balanceWallet}
      />
      <div className={styles.container}>
        <Form isConnected={isConnected} />
      </div>
    </>
  );
};
