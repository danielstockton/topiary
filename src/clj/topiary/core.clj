(ns topiary.core
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px em]]
            [garden.color :refer [hsl lighten darken]]
            [garden.stylesheet :refer [at-media]]))

(def white (hsl 360 100 100))
(def black (hsl 0 0 0))
(def red (hsl 360 100 50))
(def blue (hsl 220 100 50))
(def green (hsl 100 100 40))

(def c1 (lighten black 20))
(def c2 (lighten black 60))
(def c3 (lighten blue 10))

(def nav-top-height (px 45))

(def grid-width (em 80))

(def config {:colors {:white white
                      :black black
                      :red red
                      :blue blue
                      :green green
                      :1 c1
                      :2 c2
                      :3 c3}
             :heights {:nav-top nav-top-height}
             :grid {:columns 12
                    :width grid-width}})

(defn base
  [config]
  "Base styles that are applied to all elements."
  [:* :*:before :*:after {:-moz-box-sizing :border-box
                            :-webkit-box-sizing :border-box
                            :box-sizing :border-box}])

(defn screen-small
  [config]
  "Small screens."
  [:html {:font-size (px 14)}])

(defn screen-medium
  [config]
  "Medium screens."
  (at-media {:min-width (em 40)}
    [:html {:font-size "100%"}]))

(defn screen-large
  [config]
  "Large screens."
  (at-media {:min-width (em 64)}
    [:html {:font-size "100%"}]
    [:.col
     {:float :left
      :padding-left (em 1)
      :padding-right (em 1)}]))

(defn utility
  [config]
  "Utility classes."
  [[:.center {:text-align :center}]
   [:.large {:font-size (em 1.2)
             :padding (em 1.2)}]
   [:.small {:font-size (em 0.8)
             :padding (em 0.8)}]
   [:.tiny {:font-size (em 0.6)
            :padding (em 0.6)}]])

(defn body
  [config]
  "Body."
  [:body
   {:font-family "\"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif !important";
    :font-size (em 1)
    :color (get-in config [:colors :1])
    :padding 0
    :margin 0}])

(defn headings
  [config]
  "Headings."
  [[:h1 :h2 :h3 {:font-weight :normal}]
   [:h1 {:font-size (em 2.4)}]
   [:h2 {:font-size (em 2)}]
   [:h3 {:font-size (em 1.4)}]])

(defn nav-top
  [config]
  [:nav
   [:&.top {:position :relative
            :background-color c1
            :height (get-in config [:heights :nav-top])
            :line-height (get-in config [:heights :nav-top])}
    [:.brand {:padding-left (px 15)
              :padding-right (px 15)
              :color white}]
    [:section
     {:display :inline
      :font-size (em 0.8)}
     [:input {:height (px 30)
              :padding-left (em 0.8)
              :padding-right (em 0.8)
              :display :inherit}]
     [:a {:position :relative
          :height (px 40)
          :padding (em 0.5)
          :color (lighten c1 40)
          :display :inherit}
      [:&:hover {:color (lighten c1 60)}]]]]])

(defn lists
  [config]
  "Ordered and unordered lists."
  [[:ul.inline {:list-style :none
                :overflow :hidden
                :padding 0
                :margin-left (em -1)}
    [:li {:display :block
          :float :left
          :margin-left (em 1)}]]
   [:ul.stack {:list-style :none
               :overflow :hidden
               :padding 0
               :margin-left (em -1)}
    [:li {:display :block
          :margin-left (em 1)}
     [:&:hover {:background-color (lighten c1 78)}]
     [:a {:display :block
          :padding-top (em 0.5)
          :padding-bottom (em 0.5)}]]]])

(defn buttons
  [config]
  "Anchor links and buttons."
  [:a :button {:text-decoration 'none
               :color c3
               :border :none}
   [:&:hover {:color (darken c3 10)}]
   [:&.button {:background-color c3
               :padding-top (em 0.8)
               :padding-right (em 1)
               :padding-bottom (em 0.8)
               :padding-left (em 1)
               :color "white !important"
               :display :inline-block}
    [:&.danger {:background-color red}
     [:&:hover {:background-color (darken red 10)}]]
    [:&.success {:background-color green}
     [:&:hover {:background-color (darken green 10)}]]
    [:&:hover {:background-color (darken c3 10)}]]])

(defn forms
  [config]
  "Forms."
  [[:input {:padding (em 0.6)
            :border-width (px 1)
            :border-style :solid
            :border-color (get-in config [:colors :2])
            :box-shadow "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
            :display :block}]])

(defn grid
  [config]
  "Responsive grid."
  [[:.container {:margin "0 auto"
                 :max-width (get-in config [:grid :width])
                 :width "90%"}]
   [:.row {:*zoom 1}
    [:&:after :&:before {:content "\" \"" :display :table}]
    [:&:after {:clear :both}]]
   [:.col
    {:border 'none
     :width "100%"}
    (let [columns (get-in config [:grid :columns])]
      (for [i (map #(* % (/ 100 columns)) (range 1 columns))]
        [(keyword (str "&.span-" (* columns (/ i 100)))) {:width (str (float i) "%")}]))
    ;; To display first on mobile but appear right on larger screens.
    [:&.flow-opposite {:float :right}]]])

(defn modal
  [config]
  "Modal."
  [[:.modal-backdrop {:position :fixed
                      :top 0
                      :left 0
                      :bottom 0
                      :width "100%"
                      :height "100%"
                      :background-color c1
                      :opacity "0.1"
                      :z-index 1000}]
   [:.modal-body {:position :fixed
                  :top (px 88)
                  :background-color white
                  :z-index 1001
                  :width "80%"
                  :max-width (em 55)
                  :left 0
                  :right 0
                  :margin "0 auto"
                  :padding (em 2)}
    [:&.modal-close {:content "x"}]]])

(defn all
  [config]
  [(base config)
   (screen-small config)
   (screen-medium config)
   (screen-large config)
   (utility config)
   (body config)
   (headings config)
   (nav-top config)
   (buttons config)
   (lists config)
   (forms config)
   (grid config)
   (modal config)])

(defstyles topiary (all config))

