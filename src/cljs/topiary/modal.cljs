(ns topiary.modal
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn modal
  [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible false})
    om/IRenderState
    (render-state [_ state]
      (dom/div
        nil
        (dom/a #js {:href ""
                    :className (:className data)
                    :onClick (fn [e]
                               (.preventDefault e)
                               (om/set-state! owner :visible (not (:visible state))))}
               "Open Modal")
        (dom/div #js {:className "modal-backdrop"
                      :style (display (:visible state))})
        (dom/div #js {:className "modal-body"
                      :style (display (:visible state))}
                 (dom/div nil "This is the modal body.")
                 (dom/a #js {:href ""
                             :onClick (fn [e]
                                        (.preventDefault e)
                                        (om/set-state! owner :visible false))
                             :className "modal-close"}
                        "close"))))))

