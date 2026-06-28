import InquiryForm from '@/components/contact/InquiryForm'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata = { title: 'Contact — Atelier Noir' }

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black px-8 pt-28 pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
        {/* Left — form */}
        <div className="w-full md:w-[55%]">
          <InquiryForm />
        </div>

        {/* Right — studio info */}
        <div className="w-full md:w-[45%] flex flex-col gap-10 pt-2">
          <div>
            <SectionEyebrow text="Studio" />
            <div className="mt-5 flex flex-col gap-4">
              {[
                { label: 'Address', value: 'Level 8, Navana Tower\nGulshan-2, Dhaka 1212' },
                { label: 'Phone', value: '+880 1800-000000' },
                { label: 'Email', value: 'hello@ateliernoir.design' },
                { label: 'Hours', value: 'Sun–Thu 10am–7pm' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-stone">
                    {item.label}
                  </p>
                  <p className="mt-0.5 font-inter text-sm text-warm-white whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <SectionEyebrow text="Social" />
            <div className="mt-4 flex gap-5">
              {['Instagram', 'Facebook', 'Behance'].map((name) => (
                <span
                  key={name}
                  className="font-inter text-xs uppercase tracking-wider text-gold hover:text-gold-light"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="border border-divider bg-charcoal p-8 text-center">
            <p className="font-inter text-xs text-stone">Navana Tower, Gulshan-2</p>
            <p className="mt-2 font-inter text-xs text-stone">Dhaka 1212, Bangladesh</p>
            <p className="mt-4 font-inter text-xs uppercase tracking-[0.15em] text-gold hover:underline cursor-none">
              View on Google Maps →
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
