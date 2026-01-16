import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-10 border border-purple-500/30 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div 
              className="w-full h-full" 
              style={{
                backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Take control of your business
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies that trust Stellar to secure their APIs 
              and protect their most valuable data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="md">
                <span className="flex items-center gap-2">
                  Get Started Free
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
              <Button variant="outline" size="md">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Demo
                </span>
              </Button>
            </div>

            <p className="text-gray-400 text-xs mt-4">
              No credit card required · 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}