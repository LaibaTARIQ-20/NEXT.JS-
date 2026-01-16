import type { ReactNode } from 'react'
import Header from '@/components/common/Header'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <Header />
      <main className="pt-16">{children}</main>
      {/* Footer will be added here later */}
    </div>
  )
}