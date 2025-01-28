import React, { memo, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import "../styles/client.scss";

// Lazy load layouts since they might be heavy components
const Layout = lazy(() => import('./Layout'));
const Layout2 = lazy(() => import('./Layout2'));
const Layout3 = lazy(() => import('./Layout3'));
const Layout4 = lazy(() => import('./Layout4'));

// Loading fallback component
const LoadingFallback = memo(() => (
  <div className="layout-loading" aria-hidden="true">
    {/* Keep original styling, just add a minimal loading state */}
  </div>
));

// Memoize the layout groups to prevent unnecessary re-renders
const ClientLayoutGroup1 = memo(() => (
  <div className='client-one'>
    <Suspense fallback={<LoadingFallback />}>
      <Layout />
      <Layout2 />
    </Suspense>
  </div>
));

const ClientLayoutGroup2 = memo(() => (
  <div className='client-two'>
    <Suspense fallback={<LoadingFallback />}>
      <Layout3 />
      <Layout4 />
    </Suspense>
  </div>
));

const Clients = () => {
  return (
    <div className='client-main'>
      <p>BeSpoke.</p>
      
      <Link 
        to="/bespokeint" 
        className="client-link"
        aria-label="View bespoke interior details"
      >
        <ClientLayoutGroup1 />
        <ClientLayoutGroup2 />
      </Link>
    </div>
  );
};

// Memoize the entire component to prevent unnecessary re-renders
export default memo(Clients);
