import Link from "next/link";
import {
  Bell,
  FileText,
  BarChart3,
  RefreshCcw,
  Receipt,
  Users,
  IndianRupee,
  Wallet,
} from "lucide-react";

const items = [
  { title: "Payment Reminders", icon: Bell, href: "/payment-reminders" },
  { title: "E-Invoicing", icon: FileText, href: "/e-invoicing" },
  { title: "Analytics", icon: BarChart3, href: "/analytics" },
  { title: "Auto Reconciliation", icon: RefreshCcw, href: "/auto-reconciliation" },
  { title: "Invoice Management", icon: Receipt, href: "/invoice-management" },
  { title: "Vendor Management", icon: Users, href: "/vendor-management" },
  { title: "Payable Analytics", icon: IndianRupee, href: "/payable-analytics" },
  { title: "Cashflow Analytics", icon: Wallet, href: "/cashflow-analytics" },
];

export default function PayableReceivable() {
  return (
    <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 group"
          >
            <Icon
              size={20}
              className="text-green-500 group-hover:scale-110 transition"
            />
            <span className="font-medium text-gray-900 group-hover:text-green-600">
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}