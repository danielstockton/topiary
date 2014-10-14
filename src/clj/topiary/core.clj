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
(def c2 (lighten blue 10))

(def base
  "Base styles that are applied to all elements."
  [:* :*:before :*:after {:-moz-box-sizing "border-box"
                            :-webkit-box-sizing "border-box"
                            :box-sizing "border-box"}])

(def screen-small
  "Small screens."
  [:html {:font-size (px 14)}])

(def screen-medium
  "Medium screens."
  (at-media {:min-width (em 40)}
    [:html {:font-size "100%"}]))

(def screen-large
  "Large screens."
  (at-media {:min-width (em 64)}
    [:html {:font-size "100%"}]
    [:.col
     {:float "left"
      :padding-left (em 1)
      :padding-right (em 1)}]))

(def utility
  "Utility classes."
  [[:.center {:text-align "center"}]])

(def body
  "Body."
  [:body
   {:font-family "\"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif !important";
    :font-size (em 1)
    :color c1
    :padding 0
    :margin 0}])

(def headings
  "Headings."
  [[:h1 :h2 :h3 {:font-weight "normal"}]
   [:h1 {:font-size (em 2.4)}]
   [:h2 {:font-size (em 2)}]
   [:h3 {:font-size (em 1.4)}]])

(def nav-top-height (px 45))

(def nav-top
  [:nav
   [:&.top {:position "relative"
            :background-color c1
            :height nav-top-height
            :line-height nav-top-height}
    [:.brand {:padding-left (px 15)
              :padding-right (px 15)
              :color white}]
    [:section
     {:display "inline"
      :font-size (em 0.8)}
     [:input {:height (px 30)
              :padding-left (em 0.8)
              :padding-right (em 0.8)}]
     [:a.button {:position "relative"
                 :height (px 40)
                 :padding (em 0.5)}]]]])

(def lists
  "Ordered and unordered lists."
  [[:ul.inline {:list-style "none"
                :overflow "hidden"
                :padding 0
                :margin-left (em -1)}
    [:li {:display "block"
          :float "left"
          :margin-left (em 1)}]]
   [:ul.stack {:list-style "none"
               :overflow "hidden"
               :padding 0
               :margin-left (em -1)}
    [:li {:display "block"
          :margin-left (em 1)}
     [:&:hover {:background-color (lighten c1 78)}]
     [:a {:display "block"
          :padding-top (em 0.5)
          :padding-bottom (em 0.5)}]]]])

(def buttons
  "Anchor links and buttons."
  [:a {:text-decoration 'none
       :color c2}
   [:&:hover {:color (darken c2 10)}]
   [:&.button {:background-color c2
               :padding-top (em 0.8)
               :padding-right (em 1)
               :padding-bottom (em 0.8)
               :padding-left (em 1)
               :color white}
    [:&.danger {:background-color red}
     [:&:hover {:background-color (darken red 10)}]]
    [:&.success {:background-color green}
     [:&:hover {:background-color (darken green 10)}]]
    [:&:hover {:background-color (darken c2 10)}]]])

(def columns 12)
(def grid-width (em 80))

(def grid
  "Responsive grid."
  [[:.container {:margin "0 auto"
                 :max-width grid-width
                 :width "90%"}]
   [:.row {:*zoom 1}
    [:&:after :&:before {:content "\" \"" :display "table"}]
    [:&:after {:clear "both"}]]
   [:.col
    {:border 'none
     :width "100%"}
    (for [i (map #(* % (/ 100 columns)) (range 1 columns))]
      [(keyword (str "&.span-" (* columns (/ i 100)))) {:width (str (float i) "%")}])
    ;; To display first on mobile but appear right on larger screens.
    [:&.flow-opposite {:float "right"}]]])

(def modal
  "Modal."
  [[:.modal-backdrop {:position "fixed"
                      :top 0
                      :left 0
                      :bottom 0
                      :width "100%"
                      :height "100%"
                      :background-color c1
                      :opacity "0.1"
                      :z-index 1000}]
   [:.modal-body {:position "fixed"
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

(def all [base
          screen-small
          screen-medium
          screen-large
          utility
          body
          headings
          nav-top
          buttons
          lists
          grid
          modal])

(defstyles topiary all)

