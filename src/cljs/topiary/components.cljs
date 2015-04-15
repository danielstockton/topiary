(ns topiary.components
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom]
            [topiary.components.modal :refer [modal]]
            [topiary.components.table :refer [table]]))

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

(defonce modal-data (atom {:open open
                           :body body}))

(om/root modal modal-data
  {:target (. js/document (getElementById "modal"))})

(defn table-checkbox
  [column owner]
  (reify
    om/IRender
    (render [_]
      (dom/div
        nil
        (dom/input #js {:type "checkbox" :checked (:checked column)})
        (dom/input #js {:type "text"
                        :value (:text column)
                        :onChange (fn [e]
                                    (let [text (.. e -target -value)]
                                      (om/update! column :text text)))})))))

(defonce table-data (atom {:offset 0
                           :limit 3
                           :columns [{:name "Name"}
                                     {:name "Seconds"}
                                     {:name "Salary"}
                                     {:name "Select" :sortable false}]
                           :rows [[{:contents "Geoff"}
                                   {:contents 144321}
                                   {:contents 24000 :type :currency}
                                   {:contents table-checkbox :checked true}]
                                  [{:contents "Jim"}
                                   {:contents 983453}
                                   {:contents 27500 :type :currency}
                                   {:contents table-checkbox :checked false}]
                                  [{:contents "Bob"}
                                   {:contents 843244}
                                   {:contents 18657 :type :currency}
                                   {:contents table-checkbox :checked true}]
                                  [{:contents "Alice"}
                                   {:contents 148239}
                                   {:contents 34854 :type :currency}
                                   {:contents table-checkbox :checked false}]
                                  [{:contents "Mike"}
                                   {:contents 289347}
                                   {:contents 29843 :type :currency}
                                   {:contents table-checkbox :checked false}]
                                  [{:contents "Janine"}
                                   {:contents 92347}
                                   {:contents 57987 :type :currency}
                                   {:contents table-checkbox :checked true}]]}))

(om/root table table-data
  {:target (. js/document (getElementById "table"))})
