import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Switch = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) => {
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          // MAIN CONTAINER - Adjust width here (currently 52px)
          "h-7 px-1 flex items-center relative cursor-pointer transition-all duration-500 rounded-full w-[52px]",
          // SHADOW EFFECTS - Deep inset shadow for depth + outer elevation
          "shadow-[inset_0_3px_6px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.25)]",
          // BACKGROUND GRADIENTS - Change colors here
          checked
            ? "bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-700" // DARK MODE COLORS
            : "bg-gradient-to-b from-slate-500 via-slate-600 to-slate-800 border border-slate-400/30" // LIGHT MODE COLORS
        )}
      >
        {/* TRACK GROOVE - Creates the inset effect */}
        <div className="absolute inset-1 rounded-full bg-black/20" />

        {/* MAIN SLIDING BUTTON */}
        <motion.div
          initial={false}
          animate={{
            // SLIDE DISTANCE - Adjust the 24px value to change how far the button slides
            x: checked ? 24 : 0,
          }}
          transition={{
            // ANIMATION SETTINGS - Modify for different feel
            type: "spring",
            stiffness: 400, // Higher = snappier
            damping: 28,    // Higher = less bouncy
            mass: 1.2       // Higher = more weight feel
          }}
          className="relative z-20"
        >
          {/* BUTTON SCALING ANIMATION */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1], // Slight scale effect on toggle
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className={twMerge(
              // BUTTON SIZE - Change h-[20px] w-[20px] to adjust button size
              "h-[20px] w-[20px] rounded-full relative",
              // BUTTON COLOR - Pure white button
              "bg-white",
              "border border-gray-200"
            )}
          >
            {/* INNER LAYERS - Creates clean white appearance */}
            <div className="absolute inset-[1px] rounded-full bg-white" />
            <div className="absolute inset-[2px] rounded-full bg-white" />

            {/* ICON CONTAINER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {checked ? (
                  // MOON ICON (Dark Mode)
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-slate-700"
                  >
                    {/* ICON SIZE - Change w-2.5 h-2.5 to adjust icon size */}
                    <Moon className="w-2.5 h-2.5 text-primary" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                ) : (
                  // SUN ICON (Light Mode)
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center text-slate-700"
                  >
                    {/* ICON SIZE - Change w-2.5 h-2.5 to adjust icon size */}
                    <Sun className="w-2.5 h-2.5 text-primary" strokeWidth={2} fill="currentColor" />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

// THEME HOOK - Handles system preference detection and persistence
const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Apply theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

// DEMO COMPONENT - Shows how to use the theme switch
export default function ThemeDemo() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto p-8">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Theme Switcher
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This theme switch follows your system preference by default and remembers your choice even after page reload.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Current theme: {isDarkMode ? 'Dark' : 'Light'}
            </span>
            <Switch checked={isDarkMode} setChecked={toggleTheme} />
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Customization Guide:
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Adjust switch width: Change `w-[52px]` in main container</li>
              <li>• Modify button size: Change `h-[20px] w-[20px]`</li>
              <li>• Update slide distance: Change `x: checked ? 24 : 0`</li>
              <li>• Customize colors: Update gradient classes</li>
              <li>• Resize icons: Change `w-2.5 h-2.5` classes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}