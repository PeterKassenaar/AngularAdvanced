//customer-loader.ts
import { Routes } from '@angular/router';

export type CustomerKey = 'acme' | 'contoso';

const CUSTOMER_ROUTES: Record<CustomerKey, () => Promise<Routes>> = {
  acme: () => import('../customers/acme/customer.routes').then(m => m.CUSTOMER_ROUTES),
  contoso: () => import('../customers/contoso/customer.routes').then(m => m.CUSTOMER_ROUTES),
};

export function loadCustomerRoutes(customer: CustomerKey): Promise<Routes> {
  return CUSTOMER_ROUTES[customer]();
}
