import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { supabase } from './lib/supabase';
import type { User } from '@supabase/supabase-js'; // <-- Importamos el tipo User
import { ThemeProvider } from './lib/theme';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import NewOrder from './pages/NewOrder';
import Reports from './pages/Reports';
import MLModels from './pages/MLModels';
import Auth from './pages/Auth';

// Layout para las rutas protegidas: muestra el Navbar y el contenido.
// Si no hay usuario autenticado, redirige a la Landing.
function ProtectedLayout({ user }: { user: User | null }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navbar user={user} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  // Le decimos a TypeScript que user puede ser de tipo User o null
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="animate-pulse text-sky-600 dark:text-sky-400 font-semibold">Cargando...</div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/dashboard" replace /> : <Auth />}
        />

        {/* Rutas protegidas (requieren sesión) */}
        <Route element={<ProtectedLayout user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/new-order" element={<NewOrder />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/ml-models" element={<MLModels />} />
        </Route>

        {/* Cualquier otra ruta vuelve al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
