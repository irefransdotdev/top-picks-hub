type ThemeColors = "blue";
type ThemeMode = "dark" | "light" | "system";
type Theme = {
  mode: ThemeMode;
  color: ThemeColors;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
