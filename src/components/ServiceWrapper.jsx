import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner' // Create this if missing
import NotFound from '@/components/NotFound'

// Dynamic imports for code splitting
const TmaPage = lazy(() => import('@/pages/services/tma'))
const BarriersPage = lazy(() => import('@/pages/services/barriers'))
const RoadMarkingPage = lazy(() => import('@/pages/services/road-marking'))
const SafetyAuditPage = lazy(() => import('@/pages/services/safety-audit'))
const TdpDesignPage = lazy(() => import('@/pages/services/tdp-design'))
const TrafficSignagePage = lazy(() => import('@/pages/services/traffic-signage'))
const TrafficTeamPage = lazy(() => import('@/pages/services/traffic-management-team'))

export default function ServiceWrapper() {
  const { serviceId } = useParams()
  
  const servicePages = {
    'tma': <TmaPage />,
    'barriers': <BarriersPage />,
    'road-marking': <RoadMarkingPage />,
    'safety-audit': <SafetyAuditPage />,
    'tdp-design': <TdpDesignPage />,
    'traffic-signage': <TrafficSignagePage />,
    'traffic-management-team': <TrafficTeamPage />
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {servicePages[serviceId] || <NotFound />}
    </Suspense>
  )
}