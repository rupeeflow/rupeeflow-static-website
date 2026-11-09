import type { ModuleFlowType } from '@/data/financialFlowNetwork'
import type { FlowDirection } from './types'

/** RupeeFlow brand tokens — see globals.css */
export const BRAND = {
  green: '#109F58',
  mint: '#00EF64',
  teal: '#53BEC2',
  mintBright: '#30F3BC',
  darkGreen: '#0C1F18',
  deepGreen: '#054C38',
  midGreen: '#2AB871',
  slate: '#235065',
  muted: '#5A8F7A',
} as const

/** Module colors per product spec, aligned to brand palette */
export const MODULE_COLORS: Record<string, string> = {
  collections: BRAND.mint,
  payouts: '#60A5FA',
  invoicing: '#FB923C',
  inventory: BRAND.teal,
  credit: '#C084FC',
}

export const MODULE_LABELS = [
  { id: 'collections', label: 'Collections', color: MODULE_COLORS.collections },
  { id: 'payouts', label: 'Payouts', color: MODULE_COLORS.payouts },
  { id: 'invoicing', label: 'Invoicing', color: MODULE_COLORS.invoicing },
  { id: 'inventory', label: 'Inventory', color: MODULE_COLORS.inventory },
  { id: 'credit', label: 'Credit', color: MODULE_COLORS.credit },
] as const

export const CENTER_COLOR = BRAND.teal

export function flowTypeToDirection(type: ModuleFlowType): FlowDirection {
  switch (type) {
    case 'inflow':
      return 'in'
    case 'outflow':
      return 'out'
    case 'loop':
    case 'system':
      return 'both'
    case 'process':
      return 'in'
    default:
      return 'both'
  }
}

export function getLayout(isMobile: boolean) {
  return {
    mainRadius: isMobile ? 2.8 : 3.4,
    subRadius: isMobile ? 1.5 : 1.85,
    centerRadius: isMobile ? 0.42 : 0.52,
    mainRadiusMesh: isMobile ? 0.28 : 0.34,
    subRadiusMesh: isMobile ? 0.14 : 0.17,
    camZ: isMobile ? 10.5 : 9,
    camY: 0.35,
    particleCount: isMobile ? 48 : 140,
    particlesPerEdge: isMobile ? 2 : 4,
    mobileVisibleModules: 3,
  }
}
