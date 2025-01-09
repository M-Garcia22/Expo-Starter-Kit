export interface NetworkContextType {
  isConnected: boolean;
  connectionType: string | null;
  networkDetails: NetInfoState | null;
}