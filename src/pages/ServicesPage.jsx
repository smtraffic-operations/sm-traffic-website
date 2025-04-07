import Services from '../components/Services'
import PageLayout from '../components/PageLayout'

export default function ServicesPage() {
  return (
    <PageLayout 
      title="Comprehensive"
      highlight="Services"
      subtitle="End-to-end traffic management solutions"
    >
      <Services />
    </PageLayout>
  )
}