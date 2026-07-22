import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Security from './pages/security';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import GlobeConnections from './components/sections/GlobeConnections';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative" data-testid="page-home">
      <div className="bg-noise" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <GlobeConnections />
        <Services />
        <Industries />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/security" component={Security} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
