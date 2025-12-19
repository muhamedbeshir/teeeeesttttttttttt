import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { Mail, Phone, Clock, MessageSquare, Send, Facebook, Twitter, Instagram } from 'lucide-react'

function ContactUs() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-[#f9f3d8]">
        <section className="fade-in py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#603814] mb-3 sm:mb-4">
                {t('contactTitle')}
              </h1>
              <p className="text-lg sm:text-xl text-[#c4996c]">
                {t('contactSubtitle')}
              </p>
            </div>

            {/* Contact Methods Section */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#603814] mb-4 sm:mb-6">
                {t('contactSection1')}
              </h2>
              <p className="text-base sm:text-lg text-[#603814] mb-6 leading-relaxed">
                {t('contactSection1Text')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="bg-[#f9f3d8] rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#603814] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#603814]">
                      {t('contactEmail')}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#603814] mb-2 opacity-80">
                    {t('contactEmailText')}
                  </p>
                  <a 
                    href={`mailto:${t('contactEmailValue')}`}
                    className="text-base sm:text-lg font-semibold text-[#c4996c] hover:text-[#603814] transition-colors"
                  >
                    {t('contactEmailValue')}
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-[#f9f3d8] rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#603814] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#603814]">
                      {t('contactPhone')}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#603814] mb-2 opacity-80">
                    {t('contactPhoneText')}
                  </p>
                  <a 
                    href={`tel:${t('contactPhoneValue')}`}
                    className="text-base sm:text-lg font-semibold text-[#c4996c] hover:text-[#603814] transition-colors"
                  >
                    {t('contactPhoneValue')}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="bg-[#f9f3d8] rounded-xl p-5 sm:p-6 md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#603814] rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#603814]">
                      {t('contactHours')}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#603814] mb-2 opacity-80">
                    {t('contactHoursText')}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-[#c4996c]">
                    {t('contactHoursValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f9f3d8] rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-[#603814]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#603814]">
                  {t('contactFormTitle')}
                </h2>
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-600 rounded-lg p-4 mb-6 text-center">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#603814] mb-2">
                    {t('contactFormName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#f9f3d8] focus:ring-2 focus:ring-[#603814] focus:border-transparent outline-none text-[#603814]"
                    placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#603814] mb-2">
                    {t('contactFormEmail')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#f9f3d8] focus:ring-2 focus:ring-[#603814] focus:border-transparent outline-none text-[#603814]"
                    placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#603814] mb-2">
                    {t('contactFormMessage')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#f9f3d8] focus:ring-2 focus:ring-[#603814] focus:border-transparent outline-none text-[#603814] resize-none"
                    placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#603814] hover:bg-[#4e2d10] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  {t('contactFormSubmit')}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#603814] mb-4 sm:mb-6">
                {t('contactSection2')}
              </h2>
              <p className="text-base sm:text-lg text-[#603814] leading-relaxed mb-6">
                {t('contactSection2Text')}
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[#603814] mb-4">
                {t('contactSection3')}
              </h3>
              <p className="text-base sm:text-lg text-[#603814] mb-4 leading-relaxed">
                {t('contactSection3Text')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#f9f3d8] rounded-lg flex items-center justify-center hover:bg-[#c4996c] transition-colors">
                  <Facebook className="w-6 h-6 text-[#603814]" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#f9f3d8] rounded-lg flex items-center justify-center hover:bg-[#c4996c] transition-colors">
                  <Twitter className="w-6 h-6 text-[#603814]" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#f9f3d8] rounded-lg flex items-center justify-center hover:bg-[#c4996c] transition-colors">
                  <Instagram className="w-6 h-6 text-[#603814]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs
