(ns topiary.components.modal
  (:require [topiary.utils :refer [display]]
            [om.core :as om]
            [om.dom :as dom]
            [goog.events :as events]
            [goog.dom :as gdom])
  (:import [goog.events EventType]))

(defn modal
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (events/listen
        (gdom/getDocument) EventType.KEYDOWN
        (fn [e]
          (condp = (.-keyCode e)
                  27 (om/update! data :visible false)
                  (om/update! data :visible false)))))
    om/IRenderState
    (render-state [_ state]
      (dom/div
        nil
        (om/build (:open data) data)
        (dom/div #js {:className "modal-backdrop"
                      :style (display (:visible data))})
        (dom/div #js {:className "modal-body"
                      :style (display (:visible data))}
                 (om/build (:body data) data))))))
