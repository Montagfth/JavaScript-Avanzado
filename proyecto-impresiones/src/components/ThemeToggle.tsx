import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, type Theme } from '../lib/theme';

// Orden del ciclo al hacer clic: Sistema → Claro → Oscuro → Sistema...
const CYCLE: Theme[] = ['system', 'light', 'dark'];

const META: Record<Theme, { label: string; icon: React.ReactNode }> = {
  system: { label: 'Sistema', icon: <Monitor size={18} /> },
  light: { label: 'Claro', icon: <Sun size={18} /> },
  dark: { label: 'Oscuro', icon: <Moon size={18} /> },
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function cycle() {
    const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length];
    setTheme(next);
  }

  const { label, icon } = META[theme];

  return (
    <button
      onClick={cycle}
      title={`Tema: ${label} (clic para cambiar)`}
      aria-label={`Cambiar tema. Actual: ${label}`}
      className="flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-200"
    >
      {icon}
    </button>
  );
}
