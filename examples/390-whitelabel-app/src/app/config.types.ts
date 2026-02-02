//config.types.ts
export interface AppRuntimeConfig {
  customer: string;
  validCustomers: string[];
  features: {
    apiUrl: string;
    featureX: boolean;
    featureY: boolean;
  };
}
