interface PayrollOffering {
    icon: string
    title: string
    short: string
    details: string
  }
  
const PayrollOfferings: PayrollOffering[] = [
    {
      icon: 'fa-solid fa-file-invoice-dollar',
      title: 'Comprehensive Payroll Processing',
      short: 'Automate salary, deductions, and benefits.',
      details: 'Our payroll engine handles everything from basic salary processing to complex computations involving bonuses, overtime, deductions, and reimbursements. We customize it to fit your salary structure, industry norms, and regional laws. The result? A smooth, accurate payroll run every time.'
    },
    {
      icon: 'fa-solid fa-receipt',
      title: 'Payslip Generation',
      short: 'Create secure, branded payslips for every employee.',
      details: 'We generate detailed, professional payslips that are easy for your employees to understand and for your HR to manage. Payslips are customizable with your logo, and employees can securely download them via email or portal access.'
    },
    {
      icon: 'fa-solid fa-file-alt',
      title: 'Tax Filing & Compliance',
      short: 'Stay compliant with PF, ESI, TDS, and more.',
      details: 'Stay fully compliant with government regulations without lifting a finger. We handle your TDS, PF, ESI, PT, LWF, and other statutory deductions, and file the necessary reports on time—every time.'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Attendance & Leave Integration',
      short: 'Link attendance data directly with payroll.',
      details: 'Eliminate discrepancies between attendance and payroll. We integrate seamlessly with biometric devices, attendance software, and leave management systems to auto-sync working hours and leaves with payroll calculations.'
    },
    {
      icon: 'fa-solid fa-university',
      title: 'Direct Bank Transfers',
      short: 'Secure salary payments directly to bank accounts.',
      details: 'We process direct salary disbursements to employee bank accounts using secure banking APIs. No cheques, no delays—just reliable, on-time payments with support for all major Indian banks and UPI.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Multi-location Payroll Management',
      short: 'Centralized payroll with location-specific compliance.',
      details: 'If your business operates across multiple cities or states, we offer centralized payroll with location-specific tax and compliance handling—perfect for franchises, branch offices, and remote teams.'
    }
]

export default PayrollOfferings;