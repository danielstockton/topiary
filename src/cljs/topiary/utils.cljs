(ns topiary.utils)

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))
