(defproject topiary "0.1.0-SNAPSHOT"

  :description "The most advanced responsive front-end framework written in Clojure/ClojureScript."

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[garden "1.2.1"]
                 [om "0.7.3"]
                 [org.clojure/clojure "1.7.0-alpha1"]
                 [org.clojure/clojurescript "0.0-2356"]]

  :plugins [[lein-garden "0.2.1"]
            [lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj"]

  :garden {:builds [{:id "topiary"
                     :source-paths ["src/clj"]
                     :stylesheet topiary.core/topiary
                     :compiler {:output-to "resources/css/topiary.css"
                                :pretty-print? true}}
                    {:id "topiary-min"
                     :source-paths ["src/clj"]
                     :stylesheet topiary.core/topiary
                     :compiler {:output-to "resources/css/topiary-min.css"
                                :pretty-print? false}}]}

  :cljsbuild {
              :builds [{:id "development"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/js/topiary.js"
                                   :output-dir "resources/js/topiary/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "production"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "topiary.js"
                                   :optimizations :advanced
                                   :elide-asserts true
                                   :pretty-print false
                                   :output-wrapper false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :closure-warnings
                                   {:non-standard-jsdoc :off}}}
                       ]}


  :profiles {:uberjar {:hooks [leiningen.garden]}})

