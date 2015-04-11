(ns topiary.components.table
  (:require [om.core :as om]
            [om.dom :as dom]
            [topiary.utils :refer [nstr cstr]]))

(defn change-direction
  [dir]
  (if (= dir :asc)
    :desc
    :asc))

(defn csort
  [rows sort-direction sort-column endpoint]
  (if endpoint
    (.log js/console "server-side")
    (if sort-column
      (vec (if (= sort-direction :asc)
             (sort-by #(:contents (get % sort-column)) rows)
             (reverse (sort-by #(:contents (get % sort-column)) rows))))
      rows)))

(defn paginate
  [rows offset limit endpoint]
  (if endpoint
    (.log js/console "server-side")
    (subvec rows offset (+ offset limit))))

(defn table
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [offset (:offset data)
            limit (:limit data)
            columns (:columns data)
            sort-direction (:sort-direction data)
            sort-column (:sort-column data)
            endpoint (:endpoint data)
            rows (:rows data)
            rows (csort rows sort-direction sort-column endpoint)
            filtered-rows (paginate rows offset limit endpoint)]
        (dom/div
          #js {}
          (dom/table
            #js {:className "table"}
            (dom/thead
              #js {}
              (apply
                dom/tr
                #js {}
                (map
                  (fn [c i]
                    (dom/th
                      #js {:onClick (fn [e]
                                      (om/update! data
                                                  :sort-direction
                                                  (change-direction (:sort-direction @data)))
                                      (om/update! data :sort-column i))}
                      (str (:name c) (if (= i sort-column) sort-direction))))
                  columns (range))))
            (apply
              dom/tbody
              #js {}
              (for [row filtered-rows]
                (apply
                  dom/tr
                  #js {}
                  (for [column row
                        :let [contents (:contents column)
                              ctype (:type column)]]
                    (dom/td
                      #js {}
                      (cond
                        (and (number? contents) (= ctype :currency)) (cstr contents)
                        (number? contents) (nstr contents)
                        (string? contents) contents
                        :else contents)))))))
          (dom/ul
            #js {:className "pagination inline"}
            (apply
              dom/li
              #js {}
              (map
                #(dom/a #js {:href ""
                             :className (if (= (/ offset limit) %) "active" "")
                             :onClick (fn [e]
                                        (.preventDefault e)
                                        (om/update! data :offset (* % limit)))}
                        (inc %))
                (vec (range (count (partition-all limit rows))))))))))))
