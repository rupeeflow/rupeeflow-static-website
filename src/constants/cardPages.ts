export interface CardPageContent {
  title: string
  description: string
  features: string[]
  ctaLabel: string
  ctaLink: string
}

export const cardPages: Record<string, CardPageContent> = {
  business: {
    title: "Business Cards",
    description:
      "Empower teams with smart business cards designed for controlled spending, real-time tracking, and seamless expense management.",
    features: [
      "Set spending limits per employee",
      "Real-time transaction visibility",
      "Automated expense categorization",
      "Fraud protection & secure controls",
      "Detailed spending analytics",
    ],
    ctaLabel: "Get Business Cards",
    ctaLink: "/contact",
  },

  corporate: {
    title: "Corporate Cards",
    description:
      "Streamline company-wide expenses with centralized controls, policy enforcement, and enterprise-grade financial oversight.",
    features: [
      "Centralized expense management",
      "Policy-based spending controls",
      "Multi-department budget tracking",
      "Audit-ready reporting tools",
      "Seamless ERP integrations",
    ],
    ctaLabel: "Request Corporate Cards",
    ctaLink: "/contact",
  },

  prepaid: {
    title: "Prepaid Cards",
    description:
      "Control spending with prepaid cards that eliminate overspending risks while offering flexibility and transparency.",
    features: [
      "Preload & control card balances",
      "Eliminate overspending risks",
      "Instant card activation",
      "Safe for vendor & travel use",
      "Track usage in real time",
    ],
    ctaLabel: "Start Using Prepaid Cards",
    ctaLink: "/contact",
  },

  virtual: {
    title: "Virtual Cards",
    description:
      "Generate secure virtual cards instantly for online payments, subscriptions, and vendor transactions.",
    features: [
      "Instant card creation",
      "Enhanced online security",
      "Single-use or recurring cards",
      "Subscription payment control",
      "Reduce fraud exposure",
    ],
    ctaLabel: "Create Virtual Cards",
    ctaLink: "/contact",
  },

  expense: {
    title: "Expense Management Cards",
    description:
      "Simplify expense tracking and approvals with smart cards designed for automated workflows and financial clarity.",
    features: [
      "Auto expense logging",
      "Receipt matching & storage",
      "Approval workflow automation",
      "Real-time reporting dashboards",
      "Policy compliance tracking",
    ],
    ctaLabel: "Simplify Expense Management",
    ctaLink: "/contact",
  },

  rewards: {
    title: "Rewards Cards",
    description:
      "Maximize value from business spending with reward-driven cards designed to generate savings and benefits.",
    features: [
      "Earn rewards on business spend",
      "Cashback & incentive programs",
      "Optimize operational costs",
      "Travel & vendor benefits",
      "Detailed reward tracking",
    ],
    ctaLabel: "Unlock Rewards",
    ctaLink: "/contact",
  },
}
