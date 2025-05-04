import "./global.css";

import { useEffect } from "react";

import { usePathname } from "./routes/hooks";

import { themeConfig, ThemeProvider } from "./theme";

// ----------------------------------------------------------------------

export default function App({ children }) {
  useScrollToTop();

  return (
    <ThemeProvider
      noSsr
      defaultMode={themeConfig.defaultMode}
      modeStorageKey={themeConfig.modeStorageKey}
    >
      {children}
    </ThemeProvider>
  );
}

// ----------------------------------------------------------------------

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
