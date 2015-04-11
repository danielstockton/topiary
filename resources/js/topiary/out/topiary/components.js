// Compiled by ClojureScript 0.0-2356
goog.provide('topiary.components');
goog.require('cljs.core');
goog.require('topiary.components.modal');
goog.require('topiary.components.modal');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
topiary.components.open = (function open(data,owner){if(typeof topiary.components.t18337 !== 'undefined')
{} else
{
/**
* @constructor
*/
topiary.components.t18337 = (function (owner,data,open,meta18338){
this.owner = owner;
this.data = data;
this.open = open;
this.meta18338 = meta18338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.components.t18337.cljs$lang$type = true;
topiary.components.t18337.cljs$lang$ctorStr = "topiary.components/t18337";
topiary.components.t18337.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"topiary.components/t18337");
});
topiary.components.t18337.prototype.om$core$IRender$ = true;
topiary.components.t18337.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.dom.a.call(null,{"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1))
, "className": "button", "href": ""},"Open Modal");
});
topiary.components.t18337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18339){var self__ = this;
var _18339__$1 = this;return self__.meta18338;
});
topiary.components.t18337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18339,meta18338__$1){var self__ = this;
var _18339__$1 = this;return (new topiary.components.t18337(self__.owner,self__.data,self__.open,meta18338__$1));
});
topiary.components.__GT_t18337 = (function __GT_t18337(owner__$1,data__$1,open__$1,meta18338){return (new topiary.components.t18337(owner__$1,data__$1,open__$1,meta18338));
});
}
return (new topiary.components.t18337(owner,data,open,null));
});
topiary.components.body = (function body(data,owner){if(typeof topiary.components.t18343 !== 'undefined')
{} else
{
/**
* @constructor
*/
topiary.components.t18343 = (function (owner,data,body,meta18344){
this.owner = owner;
this.data = data;
this.body = body;
this.meta18344 = meta18344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.components.t18343.cljs$lang$type = true;
topiary.components.t18343.cljs$lang$ctorStr = "topiary.components/t18343";
topiary.components.t18343.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"topiary.components/t18343");
});
topiary.components.t18343.prototype.om$core$IRender$ = true;
topiary.components.t18343.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.dom.div.call(null,null,"This is the modal body.");
});
topiary.components.t18343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18345){var self__ = this;
var _18345__$1 = this;return self__.meta18344;
});
topiary.components.t18343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18345,meta18344__$1){var self__ = this;
var _18345__$1 = this;return (new topiary.components.t18343(self__.owner,self__.data,self__.body,meta18344__$1));
});
topiary.components.__GT_t18343 = (function __GT_t18343(owner__$1,data__$1,body__$1,meta18344){return (new topiary.components.t18343(owner__$1,data__$1,body__$1,meta18344));
});
}
return (new topiary.components.t18343(owner,data,body,null));
});
if(typeof topiary.components.data !== 'undefined')
{} else
{topiary.components.data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),topiary.components.open,new cljs.core.Keyword(null,"body","body",-2049205669),topiary.components.body], null));
}
om.core.root.call(null,topiary.components.modal.modal,topiary.components.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("modal")], null));

//# sourceMappingURL=components.js.map