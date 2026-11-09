export type ModuleFlowType =
  | 'inflow'
  | 'outflow'
  | 'process'
  | 'system'
  | 'loop'

export interface FlowModule {
  id: string
  name: string
  type: ModuleFlowType
  sub: string[]
}

export interface FinancialFlowData {
  center: string
  modules: FlowModule[]
}

export const FINANCIAL_FLOW_DATA: FinancialFlowData = {
  center: 'Unified Platform',
  modules: [
    {
      id: 'collections',
      name: 'Collections',
      type: 'inflow',
      sub: ['Payment Links', 'UPI', 'QR Payments', 'Checkout'],
    },
    {
      id: 'payouts',
      name: 'Payouts',
      type: 'outflow',
      sub: ['Vendor Payments', 'Salary', 'Bank Transfers', 'Bulk Payouts'],
    },
    {
      id: 'invoicing',
      name: 'Invoicing',
      type: 'process',
      sub: ['Create Invoice', 'GST Billing', 'Auto Reminder', 'Tracking'],
    },
    {
      id: 'inventory',
      name: 'Inventory',
      type: 'system',
      sub: ['Stock', 'Orders', 'Catalog', 'Analytics'],
    },
    {
      id: 'credit',
      name: 'Credit',
      type: 'loop',
      sub: ['Credit Line', 'Invoice Financing', 'Working Capital', 'Advance'],
    },
  ],
}
