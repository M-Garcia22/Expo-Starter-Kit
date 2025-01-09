import React, { 
  createContext, 
  useState, 
  useContext, 
  useEffect, 
  ReactNode 
} from 'react';
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { NetworkContextType } from '../types/network';


// @context: isConnected - boolean - true if the device is connected to the internet, false otherwise
// @context: connectionType - string - the type of connection the device is using (wifi, cellular, etc.)
// @context: networkDetails - NetInfoState - the details of the network connection
const NetworkContext = createContext<NetworkContextType>({
  isConnected: true,
  connectionType: null,
  networkDetails: null
});

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [networkDetails, setNetworkDetails] = useState<NetInfoState | null>(null);
  const [isConnected, setIsConnected] = useState(true);
  const [connectionType, setConnectionType] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkDetails(state);
      setIsConnected(state.isConnected ?? false);
      setConnectionType(state.type);
    });

    NetInfo.fetch().then(state => {
      setNetworkDetails(state);
      setIsConnected(state.isConnected ?? false);
      setConnectionType(state.type);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider 
      value={{ 
        isConnected, 
        connectionType, 
        networkDetails 
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  return useContext(NetworkContext);
}

export function useNetworkStatus() {
  const { isConnected, connectionType, networkDetails } = useNetwork();

  return {
    isOnline: isConnected,
    type: connectionType,
    isWifiConnected: connectionType === 'wifi',
    isCellularConnected: connectionType === 'cellular',
    details: networkDetails
  };
}

export default NetworkProvider;