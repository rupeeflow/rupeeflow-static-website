// TypeScript interfaces for calculator components

// Payment Reminders Calculator
export interface PaymentRemindersInputs {
  monthlyInvoices: number;
  averageInvoiceValue: number;
  currentCollectionRate: number;
}

export interface PaymentRemindersResult {
  potentialRecovery: number;
  timeSaved: number;
  collectionImprovement: number;
}

// E-Invoicing Calculator
export interface EInvoicingInputs {
  monthlyInvoices: number;
  averageProcessingTime: number;
  errorRate: number;
}

export interface EInvoicingResult {
  timeSaved: number;
  costSavings: number;
  errorReduction: number;
  gstCompliance: boolean;
}

// Collection Analytics Calculator
export interface CollectionAnalyticsInputs {
  monthlyRevenue: number;
  numberOfCustomers: number;
  averageDSO: number;
}

export interface CollectionAnalyticsResult {
  dsoImprovement: number;
  cashflowImprovement: number;
  riskCustomers: number;
  actionableInsights: number;
}

// Auto Reconciliation Calculator
export interface AutoReconciliationInputs {
  monthlyTransactions: number;
  manualReconciliationTime: number;
  errorRate: number;
}

export interface AutoReconciliationResult {
  timeSaved: number;
  costSavings: number;
  accuracyImprovement: number;
  monthlyROI: number;
}

// Invoice Management Calculator
export interface InvoiceManagementInputs {
  monthlyInvoices: number;
  averageApprovalTime: number;
  numberOfApprovers: number;
}

export interface InvoiceManagementResult {
  approvalTimeReduction: number;
  processingSpeedUp: number;
  visibilityScore: number;
  complianceScore: number;
}

// Vendor Management Calculator
export interface VendorManagementInputs {
  numberOfVendors: number;
  monthlyPayments: number;
  averagePaymentDelay: number;
}

export interface VendorManagementResult {
  discountsAvailable: number;
  relationshipScore: number;
  paymentAccuracy: number;
  timeSaved: number;
}

// Payable Analytics Calculator
export interface PayableAnalyticsInputs {
  monthlySpend: number;
  numberOfVendors: number;
  paymentCycles: number;
}

export interface PayableAnalyticsResult {
  savingsOpportunities: number;
  spendVisibility: number;
  forecastAccuracy: number;
  optimizationScore: number;
}

// Cashflow Analytics Calculator
export interface CashflowAnalyticsInputs {
  monthlyRevenue: number;
  monthlyExpenses: number;
  currentCashReserve: number;
}

export interface CashflowAnalyticsResult {
  forecastAccuracy: number;
  runwayDays: number;
  liquidityScore: number;
  riskAlerts: number;
}

// Generic calculator state wrapper
export interface CalculatorState<T> {
  inputs: T;
  result: Record<string, unknown> | null;
  isCalculating: boolean;
  error: string | null;
}
