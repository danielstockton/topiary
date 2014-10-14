// Compiled by ClojureScript 0.0-2356
goog.provide('topiary.components');
goog.require('cljs.core');
goog.require('topiary.modal');
goog.require('topiary.modal');
goog.require('om.core');
goog.require('om.core');
if(typeof topiary.components.data !== 'undefined')
{} else
{topiary.components.data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"button"], null));
}
om.core.root.call(null,topiary.modal.modal,topiary.components.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("modal")], null));

//# sourceMappingURL=components.js.map