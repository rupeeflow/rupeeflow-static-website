import { BenefitCard } from '@/types/payment-pages';

/**
 * Benefit cards data for Bill Payments page
 * Requirements: 6.7, 11.1
 * 
 * Displays 6 utility bill categories with emoji icons
 */
export const billPaymentBenefits: BenefitCard[] = [
  {
    icon: '⚡',
    title: 'Electricity Bills',
    description: 'Pay electricity bills for all major providers across India with instant confirmation.',
  },
  {
    icon: '💧',
    title: 'Water Bills',
    description: 'Settle water bills from municipal corporations and private providers seamlessly.',
  },
  {
    icon: '🔥',
    title: 'Gas Bills',
    description: 'Pay LPG and PNG bills with automatic cylinder booking reminders.',
  },
  {
    icon: '📡',
    title: 'Internet Bills',
    description: 'Pay broadband and internet bills from all major ISPs with zero hassle.',
  },
  {
    icon: '📱',
    title: 'Mobile Bills',
    description: 'Recharge and pay postpaid mobile bills for all operators instantly.',
  },
  {
    icon: '📺',
    title: 'DTH Bills',
    description: 'Recharge DTH and cable TV subscriptions with automatic renewal options.',
  },
];
