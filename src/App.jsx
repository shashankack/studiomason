import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense, memo } from 'react';
import TestComp4 from './components/TestComp4';
import TestComp3 from './components/TestComp3';
import BreezeBlocks from './components/BreezeBlocks';
import ProductPageBreeze from './components/productPageBreeze';
import Project from './components/Project';

// Lazy load components with better naming and chunking
const ScrollHero = lazy(() => import('./components/ScrollHero' /* webpackChunkName: "home" */));
const ScreenSix = lazy(() => import('./components/ScreenSix' /* webpackChunkName: "screen" */));
const Clients = lazy(() => import('./components/Clients' /* webpackChunkName: "clients" */));
const Enquiry = lazy(() => import('./components/Enqury' /* webpackChunkName: "forms" */));
const ProductPage = lazy(() => import('./components/ProductPage' /* webpackChunkName: "products" */));
const ProductPageSmallPlanters = lazy(() => import('./components/ProductPageSmallPlanters' /* webpackChunkName: "products" */));
const ProductPageTables = lazy(() => import('./components/ProductPageTables' /* webpackChunkName: "products" */));
const Products = lazy(() => import('./components/Products' /* webpackChunkName: "products" */));

// Group policy and info pages
const InfoPages = {
  BuyGuide: lazy(() => import('./components/BuyGuide' /* webpackChunkName: "info" */)),
  BulkOrders: lazy(() => import('./components/BulkOrders' /* webpackChunkName: "info" */)),
  Shipping: lazy(() => import('./components/Shipping' /* webpackChunkName: "policies" */)),
  Return: lazy(() => import('./components/Return' /* webpackChunkName: "policies" */)),
  Terms: lazy(() => import('./components/Terms' /* webpackChunkName: "policies" */)),
  Privacy: lazy(() => import('./components/Privacy' /* webpackChunkName: "policies" */)),
  Care: lazy(() => import('./components/Care' /* webpackChunkName: "info" */)),
};

const BeSpokeInt = lazy(() => import('./components/BeSpokeInt' /* webpackChunkName: "bespoke" */));
const Try = lazy(() => import('./components/Try' /* webpackChunkName: "test" */));
const Col3 = lazy(() => import('./components/Col3' /* webpackChunkName: "test" */));
const breezeBlocks = lazy(() => import('./components/BreezeBlocks' /* webpackChunkName: "test" */));

// Memoize LoadingSpinner since it's static
const LoadingSpinner = memo(() => (
  <div className="loading-spinner">Loading...</div>
));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<ScrollHero />} />
          <Route path="/screensix" element={<ScreenSix />} />
          <Route path="/bespoke" element={<Clients />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/project" element={<Project />} />
          
          {/* Product routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/smallPlanters/:id" element={<ProductPageSmallPlanters />} />
          <Route path="/tables/:id" element={<ProductPageTables />} />
          <Route path="/breezeBlocks/:id" element={<ProductPageBreeze/>} />

          
          {/* Info pages */}
          <Route path="/buyGuide" element={<InfoPages.BuyGuide />} />
          <Route path="/bulkOrders" element={<InfoPages.BulkOrders />} />
          <Route path="/shipping-policy" element={<InfoPages.Shipping />} />
          <Route path="/return-policy" element={<InfoPages.Return />} />
          <Route path="/terms-policy" element={<InfoPages.Terms />} />
          <Route path="/privacy-policy" element={<InfoPages.Privacy />} />
          <Route path="/care-instructions" element={<InfoPages.Care  />} />
          
          {/* Other routes */}
          <Route path="/bespokeInt" element={<BeSpokeInt />} />
          
          {/* Test routes */}
          <Route path="/test-comp" element={<Try />} />
          <Route path="/test-comp2" element={<Col3 />} />
          <Route path="/test-comp4" element={<TestComp4 />} />
          <Route path="/try" element={<Try />} />
          <Route path="/try1" element={<Col3 />} />
          <Route path="/test-comp3" element={<TestComp3 />} />
          <Route path="/breezeBlocks" element={<BreezeBlocks />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// Prevent unnecessary re-renders of the App component
export default memo(App);
