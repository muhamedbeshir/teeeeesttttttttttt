import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { ArrowRight } from 'lucide-react'

function ChoicePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const title = location.state?.title || t('choicePage')

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <button 
              onClick={() => navigate('/dashboard')} 
              className="flex items-center text-brown-600 hover:text-brown-900 mb-4 sm:mb-6 transition text-sm sm:text-base"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              العودة للقائمة
            </button>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brown-900 mb-4 sm:mb-6 border-b border-beige-200 pb-3 sm:pb-4">{title}</h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-brown-800 leading-relaxed max-w-none">
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>
                <p className="mt-4">
                  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                </p>
                <div className="my-6 sm:my-8 p-3 sm:p-4 bg-beige-100 rounded-lg border-r-4 border-brown-500">
                  <p className="font-bold text-sm sm:text-base">ملاحظة هامة:</p>
                  <p className="text-sm sm:text-base">هذا المحتوى ثابت حالياً وسيتم تحديثه بناءً على البيانات القادمة من قاعدة البيانات.</p>
                </div>
                <p>
                  ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ChoicePage

