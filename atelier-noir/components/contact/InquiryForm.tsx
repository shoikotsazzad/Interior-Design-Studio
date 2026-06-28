'use client'

import { useState } from 'react'

const inputClass =
  'w-full bg-black border border-divider px-4 py-3 font-inter text-sm text-warm-white placeholder:text-stone/50 outline-none focus:border-gold transition-colors'

const selectClass =
  'w-full bg-black border border-divider px-4 py-3 font-inter text-sm text-warm-white outline-none focus:border-gold transition-colors appearance-none'

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectSize: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 py-12">
        <div className="h-px w-10 bg-gold" />
        <h3 className="font-playfair text-3xl text-warm-white">Thank you, {form.name}.</h3>
        <p className="font-inter text-sm text-stone">
          We&apos;ve received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-playfair text-[clamp(28px,3.5vw,44px)] italic text-warm-white">
        Let&apos;s Talk
        <br />
        About Your Space
      </h2>

      <div className="flex flex-col gap-4 mt-2">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />

        <div className="relative">
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>
              Project Type
            </option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Hospitality</option>
            <option>Renovation</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone">
            ↓
          </span>
        </div>

        <div className="relative">
          <select
            name="projectSize"
            value={form.projectSize}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>
              Project Size
            </option>
            <option>Under 1000 sqft</option>
            <option>1000–3000 sqft</option>
            <option>3000+ sqft</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone">
            ↓
          </span>
        </div>

        <div className="relative">
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>
              Budget Range
            </option>
            <option>৳1–3 lakh</option>
            <option>৳3–8 lakh</option>
            <option>৳8 lakh+</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone">
            ↓
          </span>
        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project…"
          value={form.message}
          onChange={handleChange}
          className={inputClass + ' resize-none'}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-gold py-4 font-inter text-xs font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-gold-light"
        >
          Send Inquiry
        </button>
      </div>
    </div>
  )
}
