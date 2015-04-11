(ns topiary.utils
  (:require [goog.i18n.NumberFormat]))

(defn nstr
  [s]
  (.format (goog.i18n.NumberFormat. goog.i18n.NumberFormat.Format.DECIMAL) s))

(defn cstr
  [s]
  (.format (goog.i18n.NumberFormat. goog.i18n.NumberFormat.Format.CURRENCY) s))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))
