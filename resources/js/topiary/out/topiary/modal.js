// Compiled by ClojureScript 0.0-2356
goog.provide('topiary.components.modal');
goog.require('cljs.core');
goog.require('topiary.utils');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('topiary.utils');
topiary.components.modal.modal = (function modal(data,owner){if(typeof topiary.components.modal.t18052 !== 'undefined')
{} else
{
/**
* @constructor
*/
topiary.components.modal.t18052 = (function (owner,data,modal,meta18053){
this.owner = owner;
this.data = data;
this.modal = modal;
this.meta18053 = meta18053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.components.modal.t18052.cljs$lang$type = true;
topiary.components.modal.t18052.cljs$lang$ctorStr = "topiary.components.modal/t18052";
topiary.components.modal.t18052.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"topiary.components.modal/t18052");
});
topiary.components.modal.t18052.prototype.om$core$IRenderState$ = true;
topiary.components.modal.t18052.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return om.dom.div.call(null,null,om.core.build.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.data),self__.data),om.dom.div.call(null,{"style": topiary.utils.display.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "modal-backdrop"}),om.dom.div.call(null,{"style": topiary.utils.display.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "modal-body"},om.core.build.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.data),self__.data)));
});
topiary.components.modal.t18052.prototype.om$core$IWillMount$ = true;
topiary.components.modal.t18052.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return goog.events.listen(goog.dom.getDocument(),events.EventType.KEYDOWN,((function (___$1){
return (function (e){return console.log(e);
});})(___$1))
);
});
topiary.components.modal.t18052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18054){var self__ = this;
var _18054__$1 = this;return self__.meta18053;
});
topiary.components.modal.t18052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18054,meta18053__$1){var self__ = this;
var _18054__$1 = this;return (new topiary.components.modal.t18052(self__.owner,self__.data,self__.modal,meta18053__$1));
});
topiary.components.modal.__GT_t18052 = (function __GT_t18052(owner__$1,data__$1,modal__$1,meta18053){return (new topiary.components.modal.t18052(owner__$1,data__$1,modal__$1,meta18053));
});
}
return (new topiary.components.modal.t18052(owner,data,modal,null));
});

//# sourceMappingURL=modal.js.map