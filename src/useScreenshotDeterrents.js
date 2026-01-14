import { useEffect } from 'react';

/**
 * Screenshot deterrents for the web.
 *
 * IMPORTANT: A website cannot reliably prevent screenshots/screen-recording.
 * This hook only applies lightweight deterrents (disable context menu, drag,
 * selection and some common key shortcuts).
 *
 * Keep this behavior isolated in one place so it can be removed easily.
 */
export default function useScreenshotDeterrents({
  disableContextMenu = true,
  disableDrag = true,
  disableSelection = true,
  blockCommonShortcuts = true,
} = {}) {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    const onKeyDown = (e) => {
      if (!blockCommonShortcuts) return;

      const key = (e.key || '').toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;
      const ctrlShift = ctrlOrMeta && e.shiftKey;

      // Note: PrintScreen cannot be reliably blocked in all browsers/OS.
      const isPrintScreen = key === 'printscreen';

      // Common “copy/save/view source/devtools” shortcuts. (Deterrent only.)
      const isSave = ctrlOrMeta && key === 's';
      const isViewSource = ctrlOrMeta && key === 'u';
      const isCopy = ctrlOrMeta && key === 'c';
      const isCut = ctrlOrMeta && key === 'x';
      const isDevTools =
        key === 'f12' ||
        (ctrlShift && (key === 'i' || key === 'j' || key === 'c'));

      if (isPrintScreen || isSave || isViewSource || isCopy || isCut || isDevTools) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (disableContextMenu) window.addEventListener('contextmenu', preventDefault, true);
    if (disableDrag) window.addEventListener('dragstart', preventDefault, true);
    if (blockCommonShortcuts) window.addEventListener('keydown', onKeyDown, true);

    return () => {
      if (disableContextMenu) window.removeEventListener('contextmenu', preventDefault, true);
      if (disableDrag) window.removeEventListener('dragstart', preventDefault, true);
      if (blockCommonShortcuts) window.removeEventListener('keydown', onKeyDown, true);
    };
  }, [disableContextMenu, disableDrag, blockCommonShortcuts]);

  useEffect(() => {
    if (!disableSelection) return;

    // Apply selection blocking via CSS class on <body>
    document.body.classList.add('no-select');
    return () => {
      document.body.classList.remove('no-select');
    };
  }, [disableSelection]);
}

