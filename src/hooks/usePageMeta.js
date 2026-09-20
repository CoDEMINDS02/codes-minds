import { useEffect } from "react";

// Sets the browser tab title and meta description for a page, and restores
// the previous values when the user navigates away.
function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const previousTitle = document.title;

    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    const previousDescription = meta.getAttribute("content");

    if (title) document.title = title;
    if (description) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;

      if (created) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}

export default usePageMeta;
