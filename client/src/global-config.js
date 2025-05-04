import packageJson from "../package.json";

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: "React Template",
  appVersion: packageJson.version,
  serverUrl: import.meta.env.VITE_SERVER_URL ?? "",
  assetsDir: import.meta.env.VITE_ASSETS_DIR ?? "",
};
