// Compiled by ClojureScript 0.0-3126 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljsjs.react');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj6341 = {};
return obj6341;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.display_name[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.display_name["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj6343 = {};
return obj6343;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.init_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.init_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj6345 = {};
return obj6345;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.should_update[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.should_update["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj6347 = {};
return obj6347;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.will_mount[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.will_mount["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj6349 = {};
return obj6349;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.did_mount[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.did_mount["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj6351 = {};
return obj6351;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.will_unmount[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.will_unmount["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj6353 = {};
return obj6353;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.will_update[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.will_update["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj6355 = {};
return obj6355;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.did_update[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.did_update["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj6357 = {};
return obj6357;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.will_receive_props[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj6359 = {};
return obj6359;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.render[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.render["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj6361 = {};
return obj6361;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.render_props[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.render_props["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj6363 = {};
return obj6363;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core.render_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core.render_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj6365 = {};
return obj6365;
})();


om.core.IOmSwap = (function (){var obj6367 = {};
return obj6367;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj6369 = {};
return obj6369;
})();

om.core._get_state = (function() {
var om$core$_get_state = null;
var om$core$_get_state__1 = (function (this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_state__2 = (function (this$,ks){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_state__1.call(this,this$);
case 2:
return om$core$_get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_state__1;
om$core$_get_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_state__2;
return om$core$_get_state;
})()
;


om.core.IGetRenderState = (function (){var obj6371 = {};
return obj6371;
})();

om.core._get_render_state = (function() {
var om$core$_get_render_state = null;
var om$core$_get_render_state__1 = (function (this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_render_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_render_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_render_state__2 = (function (this$,ks){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_render_state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_render_state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_render_state__1.call(this,this$);
case 2:
return om$core$_get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_render_state__1;
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_render_state__2;
return om$core$_get_render_state;
})()
;


om.core.ISetState = (function (){var obj6373 = {};
return obj6373;
})();

om.core._set_state_BANG_ = (function() {
var om$core$_set_state_BANG_ = null;
var om$core$_set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var om$core$_set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
om$core$_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return om$core$_set_state_BANG___3.call(this,this$,ks,val);
case 4:
return om$core$_set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$_set_state_BANG___3;
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$_set_state_BANG___4;
return om$core$_set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj6375 = {};
return obj6375;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_queue[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_queue["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj6377 = {};
return obj6377;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4046__auto__ = x;
if(and__4046__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4046__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4694__auto__ = (((x == null))?null:x);
return (function (){var or__4058__auto__ = (om.core._value[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._value["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj6379 = {};
return obj6379;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4046__auto__ = cursor;
if(and__4046__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4046__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4694__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4058__auto__ = (om.core._path[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._path["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4046__auto__ = cursor;
if(and__4046__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4046__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4694__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4058__auto__ = (om.core._state[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._state["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj6381 = {};
return obj6381;
})();

om.core._to_cursor = (function() {
var om$core$_to_cursor = null;
var om$core$_to_cursor__2 = (function (value,state){
if((function (){var and__4046__auto__ = value;
if(and__4046__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4046__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4694__auto__ = (((value == null))?null:value);
return (function (){var or__4058__auto__ = (om.core._to_cursor[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._to_cursor["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var om$core$_to_cursor__3 = (function (value,state,path){
if((function (){var and__4046__auto__ = value;
if(and__4046__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4046__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4694__auto__ = (((value == null))?null:value);
return (function (){var or__4058__auto__ = (om.core._to_cursor[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._to_cursor["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
om$core$_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return om$core$_to_cursor__2.call(this,value,state);
case 3:
return om$core$_to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$_to_cursor__2;
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$_to_cursor__3;
return om$core$_to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj6383 = {};
return obj6383;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4046__auto__ = cursor;
if(and__4046__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4046__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4694__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4058__auto__ = (om.core._derive[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._derive["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj6385 = {};
return obj6385;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4046__auto__ = cursor;
if(and__4046__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4046__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4694__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4058__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj6387 = {};
return obj6387;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4046__auto__ = x;
if(and__4046__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4046__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4694__auto__ = (((x == null))?null:x);
return (function (){var or__4058__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4046__auto__ = x;
if(and__4046__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4046__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4694__auto__ = (((x == null))?null:x);
return (function (){var or__4058__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4046__auto__ = x;
if(and__4046__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4046__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4694__auto__ = (((x == null))?null:x);
return (function (){var or__4058__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj6389 = {};
return obj6389;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_property[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_property["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj6391 = {};
return obj6391;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4046__auto__ = cursor;
if(and__4046__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4046__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4694__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4058__auto__ = (om.core._root_key[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._root_key["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj6393 = {};
return obj6393;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._adapt[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._adapt["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj6395 = {};
return obj6395;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4046__auto__ = this$;
if(and__4046__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4046__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4694__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4058__auto__ = (om.core._get_deps[goog.typeOf(x__4694__auto__)]);
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (om.core._get_deps["_"]);
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__6397 = state;
if(G__6397){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6397.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__6397.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__6397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__6397);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__6399 = x;
if(G__6399){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6399.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__6399.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__6399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__6399);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function() {
var om$core$get_props = null;
var om$core$get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var om$core$get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__6401 = (x.props["__om_cursor"]);
var G__6401__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__6401,korks__$1):G__6401);
return G__6401__$1;
});
om$core$get_props = function(x,korks){
switch(arguments.length){
case 1:
return om$core$get_props__1.call(this,x);
case 2:
return om$core$get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_props.cljs$core$IFn$_invoke$arity$1 = om$core$get_props__1;
om$core$get_props.cljs$core$IFn$_invoke$arity$2 = om$core$get_props__2;
return om$core$get_props;
})()
;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function() {
var om$core$get_state = null;
var om$core$get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var om$core$get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
om$core$get_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_state__1.call(this,owner);
case 2:
return om$core$get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_state__1;
om$core$get_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_state__2;
return om$core$get_state;
})()
;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function() {
var om$core$get_shared = null;
var om$core$get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var om$core$get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om$core$get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om$core$get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om$core$get_shared.call(null,owner),korks);

}
}
});
om$core$get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_shared__1.call(this,owner);
case 2:
return om$core$get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_shared.cljs$core$IFn$_invoke$arity$1 = om$core$get_shared__1;
om$core$get_shared.cljs$core$IFn$_invoke$arity$2 = om$core$get_shared__2;
return om$core$get_shared;
})()
;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4219__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4219__auto__)){
var pending_state = temp__4219__auto__;
var G__6403 = state;
(G__6403["__om_prev_state"] = (state["__om_state"]));

(G__6403["__om_state"] = pending_state);

(G__6403["__om_pending_state"] = null);

return G__6403;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var om$core$merge_props_state = null;
var om$core$merge_props_state__1 = (function (owner){
return om$core$merge_props_state.call(null,owner,null);
});
var om$core$merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__4058__auto__ = props;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return owner.props;
}
})();
var temp__4219__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4219__auto__)){
var props_state = temp__4219__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4058__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
om$core$merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return om$core$merge_props_state__1.call(this,owner);
case 2:
return om$core$merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$1 = om$core$merge_props_state__1;
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2 = om$core$merge_props_state__2;
return om$core$merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__6405 = c;
if(G__6405){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6405.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__6405.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__6405);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__6405);
}
})()){
var state_6426 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__4058__auto__ = (state_6426["__om_prev_state"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return (state_6426["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__6406 = c;
if(G__6406){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6406.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__6406.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__6406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__6406);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4219__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4219__auto__){
var refs = temp__4219__auto__;
var seq__6407 = cljs.core.seq.call(null,refs);
var chunk__6408 = null;
var count__6409 = (0);
var i__6410 = (0);
while(true){
if((i__6410 < count__6409)){
var ref = cljs.core._nth.call(null,chunk__6408,i__6410);
om.core.unobserve.call(null,this$,ref);

var G__6427 = seq__6407;
var G__6428 = chunk__6408;
var G__6429 = count__6409;
var G__6430 = (i__6410 + (1));
seq__6407 = G__6427;
chunk__6408 = G__6428;
count__6409 = G__6429;
i__6410 = G__6430;
continue;
} else {
var temp__4219__auto____$1 = cljs.core.seq.call(null,seq__6407);
if(temp__4219__auto____$1){
var seq__6407__$1 = temp__4219__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6407__$1)){
var c__4843__auto__ = cljs.core.chunk_first.call(null,seq__6407__$1);
var G__6431 = cljs.core.chunk_rest.call(null,seq__6407__$1);
var G__6432 = c__4843__auto__;
var G__6433 = cljs.core.count.call(null,c__4843__auto__);
var G__6434 = (0);
seq__6407 = G__6431;
chunk__6408 = G__6432;
count__6409 = G__6433;
i__6410 = G__6434;
continue;
} else {
var ref = cljs.core.first.call(null,seq__6407__$1);
om.core.unobserve.call(null,this$,ref);

var G__6435 = cljs.core.next.call(null,seq__6407__$1);
var G__6436 = null;
var G__6437 = (0);
var G__6438 = (0);
seq__6407 = G__6435;
chunk__6408 = G__6436;
count__6409 = G__6437;
i__6410 = G__6438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__6411 = c;
if(G__6411){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6411.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__6411.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__6411);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__6411);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__6412 = c;
if(G__6412){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6412.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__6412.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__6412);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__6412);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4046__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4046__auto__){
return cljs.core.some.call(null,((function (and__4046__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__6404_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__6404_SHARP_);
});})(and__4046__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4046__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_6413 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_6414 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_6415 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_6416 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_6417 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__6418 = c;
if(G__6418){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6418.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__6418.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__6418);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__6418);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__6419 = c;
if(G__6419){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6419.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__6419.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__6419);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__6419);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__6420 = c;
if(G__6420){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6420.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__6420.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__6420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__6420);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_6417;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_6416;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_6415;

om.core._STAR_state_STAR_ = _STAR_state_STAR_6414;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_6413;
}}),(function (next_props,next_state){
var this$ = this;
var c_6439 = om.core.children.call(null,this$);
if((function (){var G__6421 = c_6439;
if(G__6421){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6421.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__6421.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__6421);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__6421);
}
})()){
var state_6440 = this$.state;
om.core.will_update.call(null,c_6439,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4058__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__6422 = c;
if(G__6422){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6422.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__6422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__6422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__6422);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__4058__auto__ = id;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__6423 = c;
if(G__6423){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6423.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__6423.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__6423);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__6423);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__6424 = c;
if(G__6424){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6424.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__6424.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__6424);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__6424);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_6441 = om.core.children.call(null,this$);
if((function (){var G__6425 = c_6441;
if(G__6425){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6425.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__6425.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__6425);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__6425);
}
})()){
om.core.will_mount.call(null,c_6441);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x6443 = obj;
x6443.om$core$IGetState$ = true;

x6443.om$core$IGetState$_get_state$arity$1 = ((function (x6443){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4058__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return (state["__om_state"]);
}
});})(x6443))
;

x6443.om$core$IGetState$_get_state$arity$2 = ((function (x6443){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x6443))
;

x6443.om$core$IGetRenderState$ = true;

x6443.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x6443){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x6443))
;

x6443.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x6443){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x6443))
;

x6443.om$core$ISetState$ = true;

x6443.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x6443){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4046__auto__ = !((app_state == null));
if(and__4046__auto__){
return render;
} else {
return and__4046__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x6443))
;

x6443.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x6443){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4046__auto__ = !((app_state == null));
if(and__4046__auto__){
return render;
} else {
return and__4046__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x6443))
;

return x6443;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4058__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4058__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__6444 = c;
if(G__6444){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6444.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__6444.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__6444);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__6444);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_6453 = om.core.children.call(null,this$);
if((function (){var G__6445 = c_6453;
if(G__6445){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6445.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__6445.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__6445);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__6445);
}
})()){
om.core.will_mount.call(null,c_6453);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__6446 = c;
if(G__6446){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6446.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__6446.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__6446);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__6446);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4219__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4219__auto__){
var refs = temp__4219__auto__;
var seq__6447 = cljs.core.seq.call(null,refs);
var chunk__6448 = null;
var count__6449 = (0);
var i__6450 = (0);
while(true){
if((i__6450 < count__6449)){
var ref = cljs.core._nth.call(null,chunk__6448,i__6450);
om.core.unobserve.call(null,this$,ref);

var G__6454 = seq__6447;
var G__6455 = chunk__6448;
var G__6456 = count__6449;
var G__6457 = (i__6450 + (1));
seq__6447 = G__6454;
chunk__6448 = G__6455;
count__6449 = G__6456;
i__6450 = G__6457;
continue;
} else {
var temp__4219__auto____$1 = cljs.core.seq.call(null,seq__6447);
if(temp__4219__auto____$1){
var seq__6447__$1 = temp__4219__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6447__$1)){
var c__4843__auto__ = cljs.core.chunk_first.call(null,seq__6447__$1);
var G__6458 = cljs.core.chunk_rest.call(null,seq__6447__$1);
var G__6459 = c__4843__auto__;
var G__6460 = cljs.core.count.call(null,c__4843__auto__);
var G__6461 = (0);
seq__6447 = G__6458;
chunk__6448 = G__6459;
count__6449 = G__6460;
i__6450 = G__6461;
continue;
} else {
var ref = cljs.core.first.call(null,seq__6447__$1);
om.core.unobserve.call(null,this$,ref);

var G__6462 = cljs.core.next.call(null,seq__6447__$1);
var G__6463 = null;
var G__6464 = (0);
var G__6465 = (0);
seq__6447 = G__6462;
chunk__6448 = G__6463;
count__6449 = G__6464;
i__6450 = G__6465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_6466 = this$.props;
var c_6467 = om.core.children.call(null,this$);
if((function (){var G__6451 = c_6467;
if(G__6451){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6451.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__6451.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__6451);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__6451);
}
})()){
var state_6468 = this$.state;
om.core.will_update.call(null,c_6467,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__6452 = c;
if(G__6452){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6452.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__6452.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__6452);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__6452);
}
})()){
var state_6469 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__4058__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x6471 = cljs.core.clj__GT_js.call(null,methods$);
x6471.om$core$IGetState$ = true;

x6471.om$core$IGetState$_get_state$arity$1 = ((function (x6471){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4058__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x6471))
;

x6471.om$core$IGetState$_get_state$arity$2 = ((function (x6471){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x6471))
;

x6471.om$core$IGetRenderState$ = true;

x6471.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x6471){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x6471))
;

x6471.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x6471){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x6471))
;

x6471.om$core$ISetState$ = true;

x6471.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x6471){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4046__auto__ = !((gstate == null));
if(and__4046__auto__){
return render;
} else {
return and__4046__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x6471))
;

x6471.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x6471){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x6471))
;

return x6471;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__6473 = x;
if(G__6473){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6473.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__6473.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__6473);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__6473);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__6475){
var vec__6476 = p__6475;
var k = cljs.core.nth.call(null,vec__6476,(0),null);
var v = cljs.core.nth.call(null,vec__6476,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__6477 = null;
var G__6477__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6477__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6477 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6477__2.call(this,self__,k);
case 3:
return G__6477__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6477.cljs$core$IFn$_invoke$arity$2 = G__6477__2;
G__6477.cljs$core$IFn$_invoke$arity$3 = G__6477__3;
return G__6477;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args6474){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6474)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4637__auto__,writer__4638__auto__,opt__4639__auto__){
return cljs.core._write.call(null,writer__4638__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__6479 = null;
var G__6479__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6479__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6479 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6479__2.call(this,self__,k);
case 3:
return G__6479__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6479.cljs$core$IFn$_invoke$arity$2 = G__6479__2;
G__6479.cljs$core$IFn$_invoke$arity$3 = G__6479__3;
return G__6479;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args6478){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6478)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4637__auto__,writer__4638__auto__,opt__4639__auto__){
return cljs.core._write.call(null,writer__4638__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x6481 = cljs.core.clone.call(null,val);
x6481.cljs$core$IEquiv$ = true;

x6481.cljs$core$IEquiv$_equiv$arity$2 = ((function (x6481){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x6481))
;

x6481.om$core$ITransact$ = true;

x6481.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6481){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x6481))
;

x6481.om$core$ICursor$ = true;

x6481.om$core$ICursor$_path$arity$1 = ((function (x6481){
return (function (_){
var ___$1 = this;
return path;
});})(x6481))
;

x6481.om$core$ICursor$_state$arity$1 = ((function (x6481){
return (function (_){
var ___$1 = this;
return state;
});})(x6481))
;

x6481.cljs$core$IDeref$ = true;

x6481.cljs$core$IDeref$_deref$arity$1 = ((function (x6481){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x6481))
;

return x6481;
});
om.core.to_cursor = (function() {
var om$core$to_cursor = null;
var om$core$to_cursor__1 = (function (val){
return om$core$to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__2 = (function (val,state){
return om$core$to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__6484 = val;
if(G__6484){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6484.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__6484.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__6484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__6484);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__6485 = val;
if(G__6485){
var bit__4732__auto__ = (G__6485.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4732__auto__) || (G__6485.cljs$core$ICloneable$)){
return true;
} else {
if((!G__6485.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__6485);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__6485);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
om$core$to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return om$core$to_cursor__1.call(this,val);
case 2:
return om$core$to_cursor__2.call(this,val,state);
case 3:
return om$core$to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$to_cursor.cljs$core$IFn$_invoke$arity$1 = om$core$to_cursor__1;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$to_cursor__2;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$to_cursor__3;
return om$core$to_cursor;
})()
;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__6487 = atom;
if(G__6487){
var bit__4732__auto__ = (G__6487.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4732__auto__) || (G__6487.cljs$core$IDeref$)){
return true;
} else {
if((!G__6487.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6487);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6487);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x6489 = cljs.core.clone.call(null,x);
x6489.om$core$ITransact$ = true;

x6489.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6489){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x6489))
;

x6489.om$core$ICursorDerive$ = true;

x6489.om$core$ICursorDerive$_derive$arity$4 = ((function (x6489){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x6489))
;

x6489.om$core$IAdapt$ = true;

x6489.om$core$IAdapt$_adapt$arity$2 = ((function (x6489){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x6489))
;

x6489.cljs$core$ICloneable$ = true;

x6489.cljs$core$ICloneable$_clone$arity$1 = ((function (x6489){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x6489))
;

return x6489;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__6496 = cursor;
if(G__6496){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6496.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__6496.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__6496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__6496);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x6497 = cljs.core.clone.call(null,cursor);
x6497.om$core$ITransact$ = true;

x6497.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x6497,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x6497,path,storage))
;

x6497.om$core$IOmRef$ = true;

x6497.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x6497,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x6497,path,storage))
;

x6497.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x6497,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x6497,path,storage))
;

x6497.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x6497,path,storage){
return (function (_){
var ___$1 = this;
var seq__6498 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__6499 = null;
var count__6500 = (0);
var i__6501 = (0);
while(true){
if((i__6501 < count__6500)){
var c = cljs.core._nth.call(null,chunk__6499,i__6501);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__6502 = seq__6498;
var G__6503 = chunk__6499;
var G__6504 = count__6500;
var G__6505 = (i__6501 + (1));
seq__6498 = G__6502;
chunk__6499 = G__6503;
count__6500 = G__6504;
i__6501 = G__6505;
continue;
} else {
var temp__4219__auto__ = cljs.core.seq.call(null,seq__6498);
if(temp__4219__auto__){
var seq__6498__$1 = temp__4219__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6498__$1)){
var c__4843__auto__ = cljs.core.chunk_first.call(null,seq__6498__$1);
var G__6506 = cljs.core.chunk_rest.call(null,seq__6498__$1);
var G__6507 = c__4843__auto__;
var G__6508 = cljs.core.count.call(null,c__4843__auto__);
var G__6509 = (0);
seq__6498 = G__6506;
chunk__6499 = G__6507;
count__6500 = G__6508;
i__6501 = G__6509;
continue;
} else {
var c = cljs.core.first.call(null,seq__6498__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__6510 = cljs.core.next.call(null,seq__6498__$1);
var G__6511 = null;
var G__6512 = (0);
var G__6513 = (0);
seq__6498 = G__6510;
chunk__6499 = G__6511;
count__6500 = G__6512;
i__6501 = G__6513;
continue;
}
} else {
return null;
}
}
break;
}
});})(x6497,path,storage))
;

x6497.om$core$IOmRef$_get_deps$arity$1 = ((function (x6497,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x6497,path,storage))
;

x6497.om$core$ICursorDerive$ = true;

x6497.om$core$ICursorDerive$_derive$arity$4 = ((function (x6497,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x6497,path,storage))
;

return x6497;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4058__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4058__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function() {
var om$core$render_all = null;
var om$core$render_all__0 = (function (){
return om$core$render_all.call(null,null);
});
var om$core$render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__6518_6522 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__6519_6523 = null;
var count__6520_6524 = (0);
var i__6521_6525 = (0);
while(true){
if((i__6521_6525 < count__6520_6524)){
var f_6526 = cljs.core._nth.call(null,chunk__6519_6523,i__6521_6525);
f_6526.call(null);

var G__6527 = seq__6518_6522;
var G__6528 = chunk__6519_6523;
var G__6529 = count__6520_6524;
var G__6530 = (i__6521_6525 + (1));
seq__6518_6522 = G__6527;
chunk__6519_6523 = G__6528;
count__6520_6524 = G__6529;
i__6521_6525 = G__6530;
continue;
} else {
var temp__4219__auto___6531 = cljs.core.seq.call(null,seq__6518_6522);
if(temp__4219__auto___6531){
var seq__6518_6532__$1 = temp__4219__auto___6531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6518_6532__$1)){
var c__4843__auto___6533 = cljs.core.chunk_first.call(null,seq__6518_6532__$1);
var G__6534 = cljs.core.chunk_rest.call(null,seq__6518_6532__$1);
var G__6535 = c__4843__auto___6533;
var G__6536 = cljs.core.count.call(null,c__4843__auto___6533);
var G__6537 = (0);
seq__6518_6522 = G__6534;
chunk__6519_6523 = G__6535;
count__6520_6524 = G__6536;
i__6521_6525 = G__6537;
continue;
} else {
var f_6538 = cljs.core.first.call(null,seq__6518_6532__$1);
f_6538.call(null);

var G__6539 = cljs.core.next.call(null,seq__6518_6532__$1);
var G__6540 = null;
var G__6541 = (0);
var G__6542 = (0);
seq__6518_6522 = G__6539;
chunk__6519_6523 = G__6540;
count__6520_6524 = G__6541;
i__6521_6525 = G__6542;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
om$core$render_all = function(state){
switch(arguments.length){
case 0:
return om$core$render_all__0.call(this);
case 1:
return om$core$render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$render_all.cljs$core$IFn$_invoke$arity$0 = om$core$render_all__0;
om$core$render_all.cljs$core$IFn$_invoke$arity$1 = om$core$render_all__1;
return om$core$render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4058__auto__ = (function (){var G__6549 = x;
if(G__6549){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6549.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__6549.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__6549);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__6549);
}
})();
if(or__4058__auto__){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = (function (){var G__6551 = x;
if(G__6551){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto____$1 = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto____$1)){
return or__4058__auto____$1;
} else {
return G__6551.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__6551.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__6551);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__6551);
}
})();
if(or__4058__auto____$1){
return or__4058__auto____$1;
} else {
var G__6552 = x;
if(G__6552){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto____$2 = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto____$2)){
return or__4058__auto____$2;
} else {
return G__6552.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__6552.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__6552);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__6552);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var om$core$get_descriptor = null;
var om$core$get_descriptor__1 = (function (f){
return om$core$get_descriptor.call(null,f,null);
});
var om$core$get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4058__auto__ = descriptor;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
var or__4058__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4058__auto____$1)){
return or__4058__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
om$core$get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return om$core$get_descriptor__1.call(this,f);
case 2:
return om$core$get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$1 = om$core$get_descriptor__1;
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2 = om$core$get_descriptor__2;
return om$core$get_descriptor;
})()
;
om.core.getf = (function() {
var om$core$getf = null;
var om$core$getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var om$core$getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
om$core$getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return om$core$getf__2.call(this,f,cursor);
case 3:
return om$core$getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$getf.cljs$core$IFn$_invoke$arity$2 = om$core$getf__2;
om$core$getf.cljs$core$IFn$_invoke$arity$3 = om$core$getf__3;
return om$core$getf;
})()
;
om.core.build_STAR_ = (function() {
var om$core$build_STAR_ = null;
var om$core$build_STAR___2 = (function (f,cursor){
return om$core$build_STAR_.call(null,f,cursor,null);
});
var om$core$build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__6554 = m;
var map__6554__$1 = ((cljs.core.seq_QMARK_.call(null,map__6554))?cljs.core.apply.call(null,cljs.core.hash_map,map__6554):map__6554);
var opts = cljs.core.get.call(null,map__6554__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__6554__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__6554__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__6554__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__6554__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4217__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4217__auto__)){
var i = temp__4217__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4058__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__6554,map__6554__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__6554,map__6554__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__6554,map__6554__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__6554,map__6554__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4058__auto__ = rkey;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
om$core$build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return om$core$build_STAR___2.call(this,f,cursor);
case 3:
return om$core$build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$2 = om$core$build_STAR___2;
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3 = om$core$build_STAR___3;
return om$core$build_STAR_;
})()
;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function() {
var om$core$build = null;
var om$core$build__2 = (function (f,x){
return om$core$build.call(null,f,x,null);
});
var om$core$build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
om$core$build = function(f,x,m){
switch(arguments.length){
case 2:
return om$core$build__2.call(this,f,x);
case 3:
return om$core$build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build.cljs$core$IFn$_invoke$arity$2 = om$core$build__2;
om$core$build.cljs$core$IFn$_invoke$arity$3 = om$core$build__3;
return om$core$build;
})()
;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function() {
var om$core$build_all = null;
var om$core$build_all__2 = (function (f,xs){
return om$core$build_all.call(null,f,xs,null);
});
var om$core$build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
om$core$build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return om$core$build_all__2.call(this,f,xs);
case 3:
return om$core$build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_all.cljs$core$IFn$_invoke$arity$2 = om$core$build_all__2;
om$core$build_all.cljs$core$IFn$_invoke$arity$3 = om$core$build_all__3;
return om$core$build_all;
})()
;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__6563 = state;
if(G__6563){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6563.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__6563.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__6563);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__6563);
}
})()){
} else {
var properties_6571 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_6572 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_6573 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x6564_6574 = state;
x6564_6574.om$core$IRenderQueue$ = true;

x6564_6574.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_6573);
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_6573),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_6573,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_6573,cljs.core.empty);
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$INotify$ = true;

x6564_6574.om$core$INotify$_listen_BANG_$arity$3 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_6572,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_6572,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$INotify$_notify_BANG_$arity$3 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__6565_6575 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_6572));
var chunk__6566_6576 = null;
var count__6567_6577 = (0);
var i__6568_6578 = (0);
while(true){
if((i__6568_6578 < count__6567_6577)){
var vec__6569_6579 = cljs.core._nth.call(null,chunk__6566_6576,i__6568_6578);
var __6580 = cljs.core.nth.call(null,vec__6569_6579,(0),null);
var f_6581 = cljs.core.nth.call(null,vec__6569_6579,(1),null);
f_6581.call(null,tx_data,root_cursor);

var G__6582 = seq__6565_6575;
var G__6583 = chunk__6566_6576;
var G__6584 = count__6567_6577;
var G__6585 = (i__6568_6578 + (1));
seq__6565_6575 = G__6582;
chunk__6566_6576 = G__6583;
count__6567_6577 = G__6584;
i__6568_6578 = G__6585;
continue;
} else {
var temp__4219__auto___6586 = cljs.core.seq.call(null,seq__6565_6575);
if(temp__4219__auto___6586){
var seq__6565_6587__$1 = temp__4219__auto___6586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6565_6587__$1)){
var c__4843__auto___6588 = cljs.core.chunk_first.call(null,seq__6565_6587__$1);
var G__6589 = cljs.core.chunk_rest.call(null,seq__6565_6587__$1);
var G__6590 = c__4843__auto___6588;
var G__6591 = cljs.core.count.call(null,c__4843__auto___6588);
var G__6592 = (0);
seq__6565_6575 = G__6589;
chunk__6566_6576 = G__6590;
count__6567_6577 = G__6591;
i__6568_6578 = G__6592;
continue;
} else {
var vec__6570_6593 = cljs.core.first.call(null,seq__6565_6587__$1);
var __6594 = cljs.core.nth.call(null,vec__6570_6593,(0),null);
var f_6595 = cljs.core.nth.call(null,vec__6570_6593,(1),null);
f_6595.call(null,tx_data,root_cursor);

var G__6596 = cljs.core.next.call(null,seq__6565_6587__$1);
var G__6597 = null;
var G__6598 = (0);
var G__6599 = (0);
seq__6565_6575 = G__6596;
chunk__6566_6576 = G__6597;
count__6567_6577 = G__6598;
i__6568_6578 = G__6599;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRootProperties$ = true;

x6564_6574.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6571,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6571,cljs.core.dissoc,id,k);
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_6571,cljs.core.dissoc,id);
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

x6564_6574.om$core$IRootProperties$_get_property$arity$3 = ((function (x6564_6574,properties_6571,listeners_6572,render_queue_6573){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_6571),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x6564_6574,properties_6571,listeners_6572,render_queue_6573))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x6601 = cljs.core.clone.call(null,cursor);
x6601.om$core$IRootKey$ = true;

x6601.om$core$IRootKey$_root_key$arity$1 = ((function (x6601){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x6601))
;

x6601.om$core$IAdapt$ = true;

x6601.om$core$IAdapt$_adapt$arity$2 = ((function (x6601){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x6601))
;

x6601.cljs$core$ICloneable$ = true;

x6601.cljs$core$ICloneable$_clone$arity$1 = ((function (x6601){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x6601))
;

return x6601;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__6602){
var map__6665 = p__6602;
var map__6665__$1 = ((cljs.core.seq_QMARK_.call(null,map__6665))?cljs.core.apply.call(null,cljs.core.hash_map,map__6665):map__6665);
var options = map__6665__$1;
var raf = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__6665__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__6727 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__6727,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__6727,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__6666 = value;
if(G__6666){
var bit__4732__auto__ = (G__6666.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4732__auto__) || (G__6666.cljs$core$IAtom$)){
return true;
} else {
if((!G__6666.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__6666);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__6666);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4058__auto__ = adapt;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_6728 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_6697 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_6698 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_6699 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_6700 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_6700;

om.core._STAR_state_STAR_ = _STAR_state_STAR_6699;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_6698;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_6697;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_6728);
} else {
}
}

var queue_6729 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_6729)){
} else {
var seq__6701_6730 = cljs.core.seq.call(null,queue_6729);
var chunk__6702_6731 = null;
var count__6703_6732 = (0);
var i__6704_6733 = (0);
while(true){
if((i__6704_6733 < count__6703_6732)){
var c_6734 = cljs.core._nth.call(null,chunk__6702_6731,i__6704_6733);
if(cljs.core.truth_(c_6734.isMounted())){
var temp__4219__auto___6735 = (c_6734.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4219__auto___6735)){
var next_props_6736 = temp__4219__auto___6735;
(c_6734.props["__om_cursor"] = next_props_6736);

(c_6734.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4058__auto__ = !((function (){var G__6706 = om.core.children.call(null,c_6734);
if(G__6706){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6706.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__6706.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6706);
}
})());
if(or__4058__auto__){
return or__4058__auto__;
} else {
return c_6734.shouldComponentUpdate(c_6734.props,c_6734.state);
}
})())){
c_6734.forceUpdate();
} else {
}
} else {
}

var G__6737 = seq__6701_6730;
var G__6738 = chunk__6702_6731;
var G__6739 = count__6703_6732;
var G__6740 = (i__6704_6733 + (1));
seq__6701_6730 = G__6737;
chunk__6702_6731 = G__6738;
count__6703_6732 = G__6739;
i__6704_6733 = G__6740;
continue;
} else {
var temp__4219__auto___6741 = cljs.core.seq.call(null,seq__6701_6730);
if(temp__4219__auto___6741){
var seq__6701_6742__$1 = temp__4219__auto___6741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6701_6742__$1)){
var c__4843__auto___6743 = cljs.core.chunk_first.call(null,seq__6701_6742__$1);
var G__6744 = cljs.core.chunk_rest.call(null,seq__6701_6742__$1);
var G__6745 = c__4843__auto___6743;
var G__6746 = cljs.core.count.call(null,c__4843__auto___6743);
var G__6747 = (0);
seq__6701_6730 = G__6744;
chunk__6702_6731 = G__6745;
count__6703_6732 = G__6746;
i__6704_6733 = G__6747;
continue;
} else {
var c_6748 = cljs.core.first.call(null,seq__6701_6742__$1);
if(cljs.core.truth_(c_6748.isMounted())){
var temp__4219__auto___6749__$1 = (c_6748.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4219__auto___6749__$1)){
var next_props_6750 = temp__4219__auto___6749__$1;
(c_6748.props["__om_cursor"] = next_props_6750);

(c_6748.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4058__auto__ = !((function (){var G__6708 = om.core.children.call(null,c_6748);
if(G__6708){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6708.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__6708.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6708);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__6708);
}
})());
if(or__4058__auto__){
return or__4058__auto__;
} else {
return c_6748.shouldComponentUpdate(c_6748.props,c_6748.state);
}
})())){
c_6748.forceUpdate();
} else {
}
} else {
}

var G__6751 = cljs.core.next.call(null,seq__6701_6742__$1);
var G__6752 = null;
var G__6753 = (0);
var G__6754 = (0);
seq__6701_6730 = G__6751;
chunk__6702_6731 = G__6752;
count__6703_6732 = G__6753;
i__6704_6733 = G__6754;
continue;
}
} else {
}
}
break;
}
}

var _refs_6755 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_6755)){
} else {
var seq__6709_6756 = cljs.core.seq.call(null,_refs_6755);
var chunk__6710_6757 = null;
var count__6711_6758 = (0);
var i__6712_6759 = (0);
while(true){
if((i__6712_6759 < count__6711_6758)){
var vec__6713_6760 = cljs.core._nth.call(null,chunk__6710_6757,i__6712_6759);
var path_6761__$1 = cljs.core.nth.call(null,vec__6713_6760,(0),null);
var cs_6762 = cljs.core.nth.call(null,vec__6713_6760,(1),null);
var cs_6763__$1 = cljs.core.deref.call(null,cs_6762);
var seq__6714_6764 = cljs.core.seq.call(null,cs_6763__$1);
var chunk__6715_6765 = null;
var count__6716_6766 = (0);
var i__6717_6767 = (0);
while(true){
if((i__6717_6767 < count__6716_6766)){
var vec__6718_6768 = cljs.core._nth.call(null,chunk__6715_6765,i__6717_6767);
var id_6769 = cljs.core.nth.call(null,vec__6718_6768,(0),null);
var c_6770 = cljs.core.nth.call(null,vec__6718_6768,(1),null);
if(cljs.core.truth_(c_6770.shouldComponentUpdate(c_6770.props,c_6770.state))){
c_6770.forceUpdate();
} else {
}

var G__6771 = seq__6714_6764;
var G__6772 = chunk__6715_6765;
var G__6773 = count__6716_6766;
var G__6774 = (i__6717_6767 + (1));
seq__6714_6764 = G__6771;
chunk__6715_6765 = G__6772;
count__6716_6766 = G__6773;
i__6717_6767 = G__6774;
continue;
} else {
var temp__4219__auto___6775 = cljs.core.seq.call(null,seq__6714_6764);
if(temp__4219__auto___6775){
var seq__6714_6776__$1 = temp__4219__auto___6775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6714_6776__$1)){
var c__4843__auto___6777 = cljs.core.chunk_first.call(null,seq__6714_6776__$1);
var G__6778 = cljs.core.chunk_rest.call(null,seq__6714_6776__$1);
var G__6779 = c__4843__auto___6777;
var G__6780 = cljs.core.count.call(null,c__4843__auto___6777);
var G__6781 = (0);
seq__6714_6764 = G__6778;
chunk__6715_6765 = G__6779;
count__6716_6766 = G__6780;
i__6717_6767 = G__6781;
continue;
} else {
var vec__6719_6782 = cljs.core.first.call(null,seq__6714_6776__$1);
var id_6783 = cljs.core.nth.call(null,vec__6719_6782,(0),null);
var c_6784 = cljs.core.nth.call(null,vec__6719_6782,(1),null);
if(cljs.core.truth_(c_6784.shouldComponentUpdate(c_6784.props,c_6784.state))){
c_6784.forceUpdate();
} else {
}

var G__6785 = cljs.core.next.call(null,seq__6714_6776__$1);
var G__6786 = null;
var G__6787 = (0);
var G__6788 = (0);
seq__6714_6764 = G__6785;
chunk__6715_6765 = G__6786;
count__6716_6766 = G__6787;
i__6717_6767 = G__6788;
continue;
}
} else {
}
}
break;
}

var G__6789 = seq__6709_6756;
var G__6790 = chunk__6710_6757;
var G__6791 = count__6711_6758;
var G__6792 = (i__6712_6759 + (1));
seq__6709_6756 = G__6789;
chunk__6710_6757 = G__6790;
count__6711_6758 = G__6791;
i__6712_6759 = G__6792;
continue;
} else {
var temp__4219__auto___6793 = cljs.core.seq.call(null,seq__6709_6756);
if(temp__4219__auto___6793){
var seq__6709_6794__$1 = temp__4219__auto___6793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6709_6794__$1)){
var c__4843__auto___6795 = cljs.core.chunk_first.call(null,seq__6709_6794__$1);
var G__6796 = cljs.core.chunk_rest.call(null,seq__6709_6794__$1);
var G__6797 = c__4843__auto___6795;
var G__6798 = cljs.core.count.call(null,c__4843__auto___6795);
var G__6799 = (0);
seq__6709_6756 = G__6796;
chunk__6710_6757 = G__6797;
count__6711_6758 = G__6798;
i__6712_6759 = G__6799;
continue;
} else {
var vec__6720_6800 = cljs.core.first.call(null,seq__6709_6794__$1);
var path_6801__$1 = cljs.core.nth.call(null,vec__6720_6800,(0),null);
var cs_6802 = cljs.core.nth.call(null,vec__6720_6800,(1),null);
var cs_6803__$1 = cljs.core.deref.call(null,cs_6802);
var seq__6721_6804 = cljs.core.seq.call(null,cs_6803__$1);
var chunk__6722_6805 = null;
var count__6723_6806 = (0);
var i__6724_6807 = (0);
while(true){
if((i__6724_6807 < count__6723_6806)){
var vec__6725_6808 = cljs.core._nth.call(null,chunk__6722_6805,i__6724_6807);
var id_6809 = cljs.core.nth.call(null,vec__6725_6808,(0),null);
var c_6810 = cljs.core.nth.call(null,vec__6725_6808,(1),null);
if(cljs.core.truth_(c_6810.shouldComponentUpdate(c_6810.props,c_6810.state))){
c_6810.forceUpdate();
} else {
}

var G__6811 = seq__6721_6804;
var G__6812 = chunk__6722_6805;
var G__6813 = count__6723_6806;
var G__6814 = (i__6724_6807 + (1));
seq__6721_6804 = G__6811;
chunk__6722_6805 = G__6812;
count__6723_6806 = G__6813;
i__6724_6807 = G__6814;
continue;
} else {
var temp__4219__auto___6815__$1 = cljs.core.seq.call(null,seq__6721_6804);
if(temp__4219__auto___6815__$1){
var seq__6721_6816__$1 = temp__4219__auto___6815__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6721_6816__$1)){
var c__4843__auto___6817 = cljs.core.chunk_first.call(null,seq__6721_6816__$1);
var G__6818 = cljs.core.chunk_rest.call(null,seq__6721_6816__$1);
var G__6819 = c__4843__auto___6817;
var G__6820 = cljs.core.count.call(null,c__4843__auto___6817);
var G__6821 = (0);
seq__6721_6804 = G__6818;
chunk__6722_6805 = G__6819;
count__6723_6806 = G__6820;
i__6724_6807 = G__6821;
continue;
} else {
var vec__6726_6822 = cljs.core.first.call(null,seq__6721_6816__$1);
var id_6823 = cljs.core.nth.call(null,vec__6726_6822,(0),null);
var c_6824 = cljs.core.nth.call(null,vec__6726_6822,(1),null);
if(cljs.core.truth_(c_6824.shouldComponentUpdate(c_6824.props,c_6824.state))){
c_6824.forceUpdate();
} else {
}

var G__6825 = cljs.core.next.call(null,seq__6721_6816__$1);
var G__6826 = null;
var G__6827 = (0);
var G__6828 = (0);
seq__6721_6804 = G__6825;
chunk__6722_6805 = G__6826;
count__6723_6806 = G__6827;
i__6724_6807 = G__6828;
continue;
}
} else {
}
}
break;
}

var G__6829 = cljs.core.next.call(null,seq__6709_6794__$1);
var G__6830 = null;
var G__6831 = (0);
var G__6832 = (0);
seq__6709_6756 = G__6829;
chunk__6710_6757 = G__6830;
count__6711_6758 = G__6831;
i__6712_6759 = G__6832;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__6665,map__6665__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4219__auto__)){
var f = temp__4219__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__6834 = x;
if(G__6834){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6834.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__6834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__6834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__6834);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function() {
var om$core$transact_BANG_ = null;
var om$core$transact_BANG___2 = (function (cursor,f){
return om$core$transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var om$core$transact_BANG___3 = (function (cursor,korks,f){
return om$core$transact_BANG_.call(null,cursor,korks,f,null);
});
var om$core$transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
om$core$transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return om$core$transact_BANG___2.call(this,cursor,korks);
case 3:
return om$core$transact_BANG___3.call(this,cursor,korks,f);
case 4:
return om$core$transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$transact_BANG___2;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$transact_BANG___3;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$transact_BANG___4;
return om$core$transact_BANG_;
})()
;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function() {
var om$core$update_BANG_ = null;
var om$core$update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var om$core$update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var om$core$update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
om$core$update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return om$core$update_BANG___2.call(this,cursor,korks);
case 3:
return om$core$update_BANG___3.call(this,cursor,korks,v);
case 4:
return om$core$update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_BANG___2;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_BANG___3;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$update_BANG___4;
return om$core$update_BANG_;
})()
;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__6836 = cursor;
if(G__6836){
var bit__4732__auto__ = null;
if(cljs.core.truth_((function (){var or__4058__auto__ = bit__4732__auto__;
if(cljs.core.truth_(or__4058__auto__)){
return or__4058__auto__;
} else {
return G__6836.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__6836.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__6836);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__6836);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function() {
var om$core$get_node = null;
var om$core$get_node__1 = (function (owner){
return owner.getDOMNode();
});
var om$core$get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4219__auto__ = owner.refs;
if(cljs.core.truth_(temp__4219__auto__)){
var refs = temp__4219__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
om$core$get_node = function(owner,name){
switch(arguments.length){
case 1:
return om$core$get_node__1.call(this,owner);
case 2:
return om$core$get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_node.cljs$core$IFn$_invoke$arity$1 = om$core$get_node__1;
om$core$get_node.cljs$core$IFn$_invoke$arity$2 = om$core$get_node__2;
return om$core$get_node;
})()
;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function() {
var om$core$set_state_BANG_ = null;
var om$core$set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var om$core$set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
om$core$set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_BANG___2;
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_BANG___3;
return om$core$set_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function() {
var om$core$set_state_nr_BANG_ = null;
var om$core$set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var om$core$set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
om$core$set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_nr_BANG___2;
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_nr_BANG___3;
return om$core$set_state_nr_BANG_;
})()
;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function() {
var om$core$update_state_BANG_ = null;
var om$core$update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var om$core$update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
om$core$update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_BANG___2;
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_BANG___3;
return om$core$update_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function() {
var om$core$update_state_nr_BANG_ = null;
var om$core$update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var om$core$update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
om$core$update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_nr_BANG___2;
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_nr_BANG___3;
return om$core$update_state_nr_BANG_;
})()
;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function() {
var om$core$get_render_state = null;
var om$core$get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var om$core$get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
om$core$get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_render_state__1.call(this,owner);
case 2:
return om$core$get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_render_state__1;
om$core$get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_render_state__2;
return om$core$get_render_state;
})()
;

//# sourceMappingURL=core.js.map