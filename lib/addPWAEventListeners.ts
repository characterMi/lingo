export const addPWAEventListeners = () => {
  const preventContextMenu = (e: MouseEvent) => e.preventDefault();
  const preventGesture = (e: Event) => e.preventDefault();
  const preventWheelZoom = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) e.preventDefault();
  };

  window.addEventListener("contextmenu", preventContextMenu);
  document.addEventListener("gesturestart", preventGesture);
  document.addEventListener("gesturechange", preventGesture);
  window.addEventListener("wheel", preventWheelZoom, { passive: false });

  return () => {
    window.removeEventListener("contextmenu", preventContextMenu);
    document.removeEventListener("gesturestart", preventGesture);
    document.removeEventListener("gesturechange", preventGesture);
    window.removeEventListener("wheel", preventWheelZoom);
  };
};
