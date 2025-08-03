// Security utilities for the portfolio application

/**
 * Disable right-click context menu
 */
export const disableContextMenu = () => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });
};

/**
 * Disable keyboard shortcuts for developer tools
 */
export const disableDevToolsShortcuts = () => {
  document.addEventListener("keydown", (e) => {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+I (Chrome DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+J (Chrome Console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      return false;
    }
  });
};

/**
 * Enhanced developer tools detection
 */
export const enhancedDevToolsDetection = () => {
  let devtools = {
    open: false,
    orientation: null as string | null,
  };

  const threshold = 160;

  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      if (!devtools.open) {
        devtools.open = true;
        devtools.orientation = widthThreshold ? "vertical" : "horizontal";
        document.body.innerHTML =
          "Developer tools are not allowed on this site.";
      }
    } else {
      devtools.open = false;
      devtools.orientation = null;
    }
  }, 500);

  // Additional detection methods
  const detectDevTools = () => {
    const start = performance.now();
    debugger;
    const end = performance.now();

    if (end - start > 100) {
      document.body.innerHTML = "Developer tools are not allowed on this site.";
    }
  };

  setInterval(detectDevTools, 1000);
};

/**
 * Initialize all security measures
 */
export const initializeSecurity = () => {
  disableContextMenu();
  disableDevToolsShortcuts();
  enhancedDevToolsDetection();

  // Disable console in production
  if (import.meta.env.PROD) {
    console.log = () => {};
    console.info = () => {};
    console.debug = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
};
