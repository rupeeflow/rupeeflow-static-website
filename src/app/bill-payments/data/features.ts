import { Zap, Calendar, Bell, Building } from 'lucide-react';
import { FeatureCard } from '@/types/payment-pages';
import BillPaymentMockup from '../components/mockups/BillPaymentMockup';
import AutoFetchMockup from '../components/mockups/AutoFetchMockup';
import ScheduledPaymentMockup from '../components/mockups/ScheduledPaymentMockup';
import ReminderMockup from '../components/mockups/ReminderMockup';

/**
 * Feature cards data for Bill Payments page
 * Requirements: 5.4, 5.5, 5.6, 5.7, 5.8, 5.9
 */
export const billPaymentFeatures: FeatureCard[] = [
  {
    icon: Zap,
    title: 'Auto-Fetch Bills',
    description: 'Automatically fetch your utility bills from service providers. No need to manually enter bill details - we pull them directly for you.',
    link: '#auto-fetch',
    mockup: AutoFetchMockup,
    imagePosition: 'right',
  },
  {
    icon: Calendar,
    title: 'Schedule Payments',
    description: 'Set up recurring payments for your bills. Never miss a due date with automated scheduling and smart reminders.',
    link: '#schedule-payments',
    mockup: ScheduledPaymentMockup,
    imagePosition: 'left',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Get notified before bill due dates. Receive alerts via SMS, email, or push notifications to stay on top of payments.',
    link: '#smart-reminders',
    mockup: ReminderMockup,
    imagePosition: 'right',
  },
  {
    icon: Building,
    title: 'Multi-Biller Support',
    description: 'Pay bills from multiple service providers in one place. Support for electricity, water, gas, internet, phone, and DTH.',
    link: '#multi-biller',
    mockup: BillPaymentMockup,
    imagePosition: 'left',
  },
];
