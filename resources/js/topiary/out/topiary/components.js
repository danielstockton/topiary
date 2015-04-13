// Compiled by ClojureScript 0.0-3126 {}
goog.provide('topiary.components');
goog.require('cljs.core');
goog.require('topiary.components.table');
goog.require('topiary.components.modal');
goog.require('om.dom');
goog.require('om.core');
topiary.components.open = (function topiary$components$open(data,owner){
if(typeof topiary.components.t13803 !== 'undefined'){
} else {

/**
* @constructor
*/
topiary.components.t13803 = (function (owner,data,open,meta13804){
this.owner = owner;
this.data = data;
this.open = open;
this.meta13804 = meta13804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.components.t13803.prototype.om$core$IRender$ = true;

topiary.components.t13803.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.a({"onClick": ((function (___$1){
return (function (e){
e.preventDefault();

return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1))
, "className": "button", "href": ""},"Open Modal");
});

topiary.components.t13803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13805){
var self__ = this;
var _13805__$1 = this;
return self__.meta13804;
});

topiary.components.t13803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13805,meta13804__$1){
var self__ = this;
var _13805__$1 = this;
return (new topiary.components.t13803(self__.owner,self__.data,self__.open,meta13804__$1));
});

topiary.components.t13803.cljs$lang$type = true;

topiary.components.t13803.cljs$lang$ctorStr = "topiary.components/t13803";

topiary.components.t13803.cljs$lang$ctorPrWriter = (function (this__4637__auto__,writer__4638__auto__,opt__4639__auto__){
return cljs.core._write.call(null,writer__4638__auto__,"topiary.components/t13803");
});

topiary.components.__GT_t13803 = (function topiary$components$open_$___GT_t13803(owner__$1,data__$1,open__$1,meta13804){
return (new topiary.components.t13803(owner__$1,data__$1,open__$1,meta13804));
});

}

return (new topiary.components.t13803(owner,data,topiary$components$open,cljs.core.PersistentArrayMap.EMPTY));
});
topiary.components.body = (function topiary$components$body(data,owner){
if(typeof topiary.components.t13809 !== 'undefined'){
} else {

/**
* @constructor
*/
topiary.components.t13809 = (function (owner,data,body,meta13810){
this.owner = owner;
this.data = data;
this.body = body;
this.meta13810 = meta13810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.components.t13809.prototype.om$core$IRender$ = true;

topiary.components.t13809.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,"This is the modal body.");
});

topiary.components.t13809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13811){
var self__ = this;
var _13811__$1 = this;
return self__.meta13810;
});

topiary.components.t13809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13811,meta13810__$1){
var self__ = this;
var _13811__$1 = this;
return (new topiary.components.t13809(self__.owner,self__.data,self__.body,meta13810__$1));
});

topiary.components.t13809.cljs$lang$type = true;

topiary.components.t13809.cljs$lang$ctorStr = "topiary.components/t13809";

topiary.components.t13809.cljs$lang$ctorPrWriter = (function (this__4637__auto__,writer__4638__auto__,opt__4639__auto__){
return cljs.core._write.call(null,writer__4638__auto__,"topiary.components/t13809");
});

topiary.components.__GT_t13809 = (function topiary$components$body_$___GT_t13809(owner__$1,data__$1,body__$1,meta13810){
return (new topiary.components.t13809(owner__$1,data__$1,body__$1,meta13810));
});

}

return (new topiary.components.t13809(owner,data,topiary$components$body,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof topiary.components.modal_data !== 'undefined'){
} else {
topiary.components.modal_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),topiary.components.open,new cljs.core.Keyword(null,"body","body",-2049205669),topiary.components.body], null));
}
om.core.root.call(null,topiary.components.modal.modal,topiary.components.modal_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("modal")], null));
if(typeof topiary.components.table_data !== 'undefined'){
} else {
topiary.components.table_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(3),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Seconds"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Salary"], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Geoff"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(144321)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(24000),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Jim"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(983453)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(27500),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Bob"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(843244)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(18657),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Alice"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(148239)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(34854),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Mike"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(289347)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(29843),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),"Janine"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(92347)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contents","contents",-1567174023),(57987),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"currency","currency",-898327568)], null)], null)], null)], null));
}
om.core.root.call(null,topiary.components.table.table,topiary.components.table_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("table")], null));

//# sourceMappingURL=components.js.map