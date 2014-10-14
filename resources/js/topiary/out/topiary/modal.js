// Compiled by ClojureScript 0.0-2356
goog.provide('topiary.modal');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
topiary.modal.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
topiary.modal.modal = (function modal(data,owner){if(typeof topiary.modal.t11962 !== 'undefined')
{} else
{
/**
* @constructor
*/
topiary.modal.t11962 = (function (owner,data,modal,meta11963){
this.owner = owner;
this.data = data;
this.modal = modal;
this.meta11963 = meta11963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
topiary.modal.t11962.cljs$lang$type = true;
topiary.modal.t11962.cljs$lang$ctorStr = "topiary.modal/t11962";
topiary.modal.t11962.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"topiary.modal/t11962");
});
topiary.modal.t11962.prototype.om$core$IRenderState$ = true;
topiary.modal.t11962.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.a({"onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(state)));
});})(___$1))
, "className": new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.data), "href": ""},"Open Modal"),React.DOM.div({"style": topiary.modal.display.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(state)), "className": "modal-backdrop"}),React.DOM.div({"style": topiary.modal.display.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(state)), "className": "modal-body"},React.DOM.div(null,"This is the modal body."),React.DOM.a({"className": "modal-close", "onClick": ((function (___$1){
return (function (e){e.preventDefault();
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
});})(___$1))
, "href": ""},"close")));
});
topiary.modal.t11962.prototype.om$core$IInitState$ = true;
topiary.modal.t11962.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null);
});
topiary.modal.t11962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11964){var self__ = this;
var _11964__$1 = this;return self__.meta11963;
});
topiary.modal.t11962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11964,meta11963__$1){var self__ = this;
var _11964__$1 = this;return (new topiary.modal.t11962(self__.owner,self__.data,self__.modal,meta11963__$1));
});
topiary.modal.__GT_t11962 = (function __GT_t11962(owner__$1,data__$1,modal__$1,meta11963){return (new topiary.modal.t11962(owner__$1,data__$1,modal__$1,meta11963));
});
}
return (new topiary.modal.t11962(owner,data,modal,null));
});

//# sourceMappingURL=modal.js.map