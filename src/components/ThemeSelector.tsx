
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

const themes = [
  { name: 'Bleu', value: 'blue', color: '#3b82f6' },
  { name: 'Vert', value: 'green', color: '#10b981' },
  { name: 'Violet', value: 'purple', color: '#8b5cf6' },
  { name: 'Orange', value: 'orange', color: '#f97316' }
];

export default function ThemeSelector() {
  const { theme, setTheme, mode, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMode}
        aria-label={mode === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
      >
        {mode === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Palette className="h-5 w-5" />
            <span className="sr-only">Changer de thème</span>
            <span 
              className="absolute bottom-1 right-1 h-2 w-2 rounded-full" 
              style={{ backgroundColor: themes.find(t => t.value === theme)?.color }}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.value}
              onClick={() => setTheme(t.value as any)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span 
                className="h-4 w-4 rounded-full" 
                style={{ backgroundColor: t.color }}
              />
              <span>{t.name}</span>
              {theme === t.value && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
