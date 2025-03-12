import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <div className="min-h-svh">
      <Helmet defaultTitle="pizza.shop" titleTemplate="%s | pizza.shop" />

      <nav className="flex gap-4 bg-slate-900 p-4 text-white">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/sign-in" className="hover:underline">
          Sign In
        </Link>
      </nav>

      <AppRoutes />
    </div>
  );
}
