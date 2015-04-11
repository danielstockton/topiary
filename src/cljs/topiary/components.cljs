(ns topiary.components
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom]
            [topiary.components.modal :refer [modal]]))

(defn open
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/a #js {:href ""
                  :className "button"
                  :onClick (fn [e]
                             (.preventDefault e)
                             (om/update! data :visible (not (:visible @data))))}
             "Open Modal"))))

(defn body
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil "This is the modal body."))))

(defonce data (atom {:open open
                     :body body}))

(om/root modal data
  {:target (. js/document (getElementById "modal"))})
