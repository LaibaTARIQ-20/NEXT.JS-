export default function TrustedBy() {
  const companies = [
    { name: 'HubSpot', style: 'normal' },
    { name: 'tinder', style: 'normal' },
    { name: 'airbnb', style: 'normal' },
    { name: 'Cadbury', style: 'script' },
    { name: 'Canon', style: 'normal' },
    { name: 'Spark', style: 'script' },
    { name: 'Quora', style: 'normal' }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1629] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}} />

      <div className="relative max-w-full">
        <div className="relative flex items-center">
          <div className="flex items-center gap-16 lg:gap-20 xl:gap-24 animate-scroll">
            {/* Double the companies for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <span 
                  className={`text-gray-400 whitespace-nowrap hover:text-gray-200 transition-colors duration-300 cursor-default ${
                    company.style === 'script' 
                      ? 'text-2xl lg:text-3xl font-bold italic' 
                      : 'text-xl lg:text-2xl font-semibold'
                  }`}
                  style={{
                    fontFamily: company.style === 'script' 
                      ? 'Georgia, "Times New Roman", serif' 
                      : 'system-ui, -apple-system, sans-serif',
                    letterSpacing: company.style === 'script' ? '0.02em' : 'normal'
                  }}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}