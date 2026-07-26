import PageWrapper from '../components/ui/PageWrapper'
import HeroSection from '../sections/HeroSection'
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection'
import SkillsPreviewSection from '../sections/SkillsPreviewSection'
import AchievementsPreview from '../sections/AchievementsPreview'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsPreviewSection />
      <AchievementsPreview />
    </PageWrapper>
  )
}
