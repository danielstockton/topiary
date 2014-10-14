(ns topiary.components
  (:require [om.core :as om :include-macros true]
            [topiary.modal :refer [modal]]))

(defonce data (atom {:className "button"}))

(om/root modal data
  {:target (. js/document (getElementById "modal"))})
