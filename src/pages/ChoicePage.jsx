import React, { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { ArrowRight, Book, Video, Gamepad2 } from 'lucide-react'
import ColoringGame from '../components/games/ColoringGame'
import PuzzleGame from '../components/games/PuzzleGame'
import SimpleGame from '../components/games/SimpleGame'

function ChoicePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const pageId = parseInt(id)
  const isArabic = i18n.language === 'ar'
  const [selectedVideo, setSelectedVideo] = useState(0)

  const title = location.state?.title || t('choicePage')

  // Game pages (Child: 3, 4, 5)
  const isGamePage = [3, 4, 5].includes(pageId)

  // Video pages (Parent: 8, Child: 6)
  const isVideoPage = pageId === 8 || pageId === 6

  // Article pages (Parent: 5, 6, 7, 9 | Child: 1, 2)
  const isArticlePage = !isGamePage && !isVideoPage

  // YouTube video IDs for different pages - فيديوهات عربية تعليمية
  const videoLists = {
    8: [ // Awareness Videos for Parents
      { id: 'jNQXAC9IVRw', title: 'نصائح تربية الأطفال' },
      { id: 'dQw4w9WgXcQ', title: 'التعامل مع الأطفال' },
      { id: 'jNQXAC9IVRw', title: 'الصحة النفسية للأطفال' }
    ],
    6: [ // Family Videos for Children
      { id: 'jNQXAC9IVRw', title: 'قصة عائلية جميلة' },
      { id: 'dQw4w9WgXcQ', title: 'أغنية عن الأسرة' },
      { id: 'jNQXAC9IVRw', title: 'فيديو تعليمي عن الأسرة' }
    ]
  }

  // Article content
  const articles = {
    // Parent articles
    5: {
      title: t('parentCoachingTitle'),
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      content: {
        ar: [
          'تدريب الوالدين هو عملية مستمرة تساعد الآباء والأمهات على تطوير مهاراتهم في تربية الأطفال بشكل فعال. من خلال برامج التدريب المتخصصة، يمكن للوالدين تعلم طرق جديدة للتواصل مع أطفالهم وفهم احتياجاتهم بشكل أفضل.',
          'تتضمن برامج تدريب الوالدين مواضيع متنوعة مثل:',
          '• فهم مراحل النمو المختلفة للأطفال',
          '• طرق التواصل الفعال مع الأطفال',
          '• إدارة السلوك الإيجابي',
          '• بناء علاقة قوية مع الأطفال',
          '• التعامل مع التحديات اليومية في التربية',
          'هذه البرامج تساعد الوالدين على بناء بيئة منزلية إيجابية تدعم نمو وتطور أطفالهم بشكل صحي ومتوازن.'
        ],
        en: [
          'Parent coaching is an ongoing process that helps parents develop their skills in effectively raising children. Through specialized training programs, parents can learn new ways to communicate with their children and better understand their needs.',
          'Parent coaching programs include various topics such as:',
          '• Understanding different stages of child development',
          '• Effective communication methods with children',
          '• Positive behavior management',
          '• Building strong relationships with children',
          '• Dealing with daily parenting challenges',
          'These programs help parents build a positive home environment that supports healthy and balanced growth and development of their children.'
        ]
      }
    },
    6: {
      title: t('specialistTitle'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
      content: {
        ar: [
          'الأخصائيون في التربية والتعليم هم محترفون مدربون يساعدون الوالدين في فهم احتياجات أطفالهم التعليمية والنفسية. التواصل مع أخصائي متخصص يمكن أن يوفر دعمًا قيمًا للعائلة.',
          'يمكن للأخصائيين مساعدتك في:',
          '• تقييم احتياجات طفلك التعليمية',
          '• تطوير استراتيجيات تعليمية مخصصة',
          '• التعامل مع صعوبات التعلم',
          '• دعم النمو الاجتماعي والعاطفي',
          '• توجيه الوالدين في رحلة التعلم',
          'العمل مع أخصائي متخصص يضمن حصول طفلك على الدعم المناسب في رحلته التعليمية.'
        ],
        en: [
          'Education and child development specialists are trained professionals who help parents understand their children\'s educational and psychological needs. Connecting with a specialized specialist can provide valuable support for the family.',
          'Specialists can help you with:',
          '• Assessing your child\'s educational needs',
          '• Developing customized learning strategies',
          '• Addressing learning difficulties',
          '• Supporting social and emotional development',
          '• Guiding parents through the learning journey',
          'Working with a specialized specialist ensures your child receives appropriate support in their educational journey.'
        ]
      }
    },
    7: {
      title: t('psychologistTitle'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
      content: {
        ar: [
          'الصحة النفسية للأطفال هي جانب أساسي من جوانب نموهم الشامل. طبيب نفسي متخصص للأطفال يمكن أن يساعد في فهم ودعم الصحة النفسية لطفلك.',
          'الاستشارات النفسية للأطفال تشمل:',
          '• تقييم الصحة النفسية للطفل',
          '• التعامل مع القلق والتوتر',
          '• دعم النمو العاطفي',
          '• مساعدة الأطفال في التعبير عن مشاعرهم',
          '• بناء الثقة بالنفس',
          '• التعامل مع التحديات الاجتماعية',
          'الاهتمام بالصحة النفسية للأطفال في سن مبكرة يساعد في بناء شخصية قوية ومتوازنة.'
        ],
        en: [
          'Children\'s mental health is an essential aspect of their overall development. A specialized child psychologist can help understand and support your child\'s mental health.',
          'Psychological consultations for children include:',
          '• Assessing the child\'s mental health',
          '• Dealing with anxiety and stress',
          '• Supporting emotional development',
          '• Helping children express their feelings',
          '• Building self-confidence',
          '• Addressing social challenges',
          'Caring for children\'s mental health at an early age helps build a strong and balanced personality.'
        ]
      }
    },
    9: {
      title: t('awarenessBooksTitle'),
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      content: {
        ar: [
          'كتب التوعية هي مصدر قيم للمعرفة والدعم للوالدين. هذه الكتب تغطي مواضيع متنوعة تساعد في فهم أفضل لتربية الأطفال.',
          'أنواع كتب التوعية:',
          '• كتب عن مراحل النمو والتطور',
          '• كتب عن التربية الإيجابية',
          '• كتب عن الصحة النفسية للأطفال',
          '• كتب عن التعلم والتعليم',
          '• كتب عن التواصل الفعال',
          '• كتب عن إدارة السلوك',
          'قراءة كتب التوعية تساعد الوالدين على اكتساب المعرفة والمهارات اللازمة لتربية أطفالهم بشكل أفضل.'
        ],
        en: [
          'Awareness books are a valuable source of knowledge and support for parents. These books cover various topics that help in better understanding child rearing.',
          'Types of awareness books:',
          '• Books about growth and development stages',
          '• Books about positive parenting',
          '• Books about children\'s mental health',
          '• Books about learning and education',
          '• Books about effective communication',
          '• Books about behavior management',
          'Reading awareness books helps parents gain the knowledge and skills needed to raise their children better.'
        ]
      }
    },
    // Child articles
    1: {
      title: t('childCoachingTitle'),
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      content: {
        ar: [
          'تدريب الأطفال هو برنامج ممتع يساعدك على تطوير مهاراتك وقدراتك. من خلال الأنشطة التفاعلية والتمارين الممتعة، يمكنك تعلم أشياء جديدة كل يوم.',
          'في برامج التدريب ستتعلم:',
          '• مهارات التواصل مع الآخرين',
          '• كيفية حل المشكلات',
          '• بناء الثقة بالنفس',
          '• العمل الجماعي',
          '• الإبداع والابتكار',
          '• المهارات الحياتية الأساسية',
          'التدريب يساعدك على أن تصبح أفضل نسخة من نفسك!'
        ],
        en: [
          'Child coaching is a fun program that helps you develop your skills and abilities. Through interactive activities and fun exercises, you can learn new things every day.',
          'In coaching programs you will learn:',
          '• Communication skills with others',
          '• How to solve problems',
          '• Building self-confidence',
          '• Teamwork',
          '• Creativity and innovation',
          '• Basic life skills',
          'Coaching helps you become the best version of yourself!'
        ]
      }
    },
    2: {
      title: t('childPsychologistTitle'),
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      content: {
        ar: [
          'الصحة النفسية مهمة جداً لك! طبيب نفسي متخصص للأطفال يمكن أن يساعدك في فهم مشاعرك والتعبير عنها بشكل صحي.',
          'يمكن للطبيب النفسي مساعدتك في:',
          '• فهم مشاعرك',
          '• التعامل مع القلق والتوتر',
          '• بناء الثقة بالنفس',
          '• تحسين علاقاتك مع الآخرين',
          '• التعبير عن نفسك بشكل أفضل',
          '• الشعور بالسعادة والراحة',
          'تذكر: طلب المساعدة هو شيء شجاع وذكي!'
        ],
        en: [
          'Mental health is very important for you! A child psychologist can help you understand your feelings and express them in a healthy way.',
          'A psychologist can help you with:',
          '• Understanding your feelings',
          '• Dealing with anxiety and stress',
          '• Building self-confidence',
          '• Improving your relationships with others',
          '• Expressing yourself better',
          '• Feeling happy and comfortable',
          'Remember: Asking for help is brave and smart!'
        ]
      }
    }
  }

  const renderGame = () => {
    switch(pageId) {
      case 3:
        return <ColoringGame />
      case 4:
        return <PuzzleGame />
      case 5:
        return <SimpleGame />
      default:
        return null
    }
  }

  const renderVideos = () => {
    const videos = videoLists[pageId]
    if (!videos || videos.length === 0) return null

    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#603814] mb-3 sm:mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 sm:w-6 sm:h-6" />
            {title}
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videos[selectedVideo].id}`}
              title={videos[selectedVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Video List */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-semibold text-[#603814] mb-2">
              {isArabic ? 'المزيد من الفيديوهات:' : 'More Videos:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(index)}
                  className={`p-3 rounded-lg text-right transition-all ${
                    selectedVideo === index
                      ? 'bg-[#603814] text-[#f9f3d8]'
                      : 'bg-[#f9f3d8] text-[#603814] hover:bg-[#c4996c]'
                  }`}
                >
                  <p className="text-sm sm:text-base font-medium">{video.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderArticle = () => {
    const article = articles[pageId]
    if (!article) return null

    const content = isArabic ? article.content.ar : article.content.en

    return (
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
          loading="lazy"
        />
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#603814] mb-4 sm:mb-6 flex items-center gap-2">
            <Book className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            {article.title}
          </h2>
          <div className="prose prose-sm sm:prose-base md:prose-lg text-[#603814] leading-relaxed max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className={`text-sm sm:text-base ${index > 0 ? 'mt-3 sm:mt-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-[#f9f3d8]">
        <section className="fade-in py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <button 
              onClick={() => navigate('/dashboard')} 
              className="flex items-center text-[#603814] hover:text-[#4e2d10] mb-4 sm:mb-6 transition text-xs sm:text-sm md:text-base font-medium"
            >
              <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${isArabic ? 'ml-2' : 'mr-2'} transform ${isArabic ? 'rotate-180' : ''}`} />
              {t('backToDashboard') || (isArabic ? 'العودة للقائمة' : 'Back to Dashboard')}
            </button>
            
            {isGamePage && renderGame()}
            {isVideoPage && renderVideos()}
            {isArticlePage && renderArticle()}
          </div>
        </section>
      </main>
    </>
  )
}

export default ChoicePage
