google.maps.__gjsload__('overlay', function(_){var OD=function(a){this.Fg=a},Cma=function(){},PD=function(a){a.Qx=a.Qx||new Cma;return a.Qx},Dma=function(a){this.Fh=new _.Wm(()=>{const b=a.Qx;if(a.getPanes()){if(a.getProjection()){if(!b.iw&&a.onAdd)a.onAdd();b.iw=!0;a.draw()}}else{if(b.iw)if(a.onRemove)a.onRemove();else a.remove();b.iw=!1}},0)},Ema=function(a,b){const c=PD(a);let d=c.rv;d||(d=c.rv=new Dma(a));_.Sb(c.Rh||[],_.sk);var e=c.ki=c.ki||new _.fia;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");
e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.FB=c.FB||new OD(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.Xm(d.Fh);c.Rh=[_.qk(a,"panes_changed",e),_.qk(f,"zoom_changed",e),_.qk(f,"offset_changed",e),_.qk(b,"projection_changed",e),_.qk(f,"projectioncenterq_changed",e)];_.Xm(d.Fh);b instanceof _.Nk?(_.xl(b,"Ox"),_.vl(b,148440)):b instanceof _.Tl&&(_.xl(b,"Oxs"),
_.vl(b,181451))},Jma=function(a){if(a){var b=a.getMap();if(Fma(a)!==b&&b&&b instanceof _.Nk){const c=b.__gm;c.overlayLayer?a.__gmop=new Gma(b,a,c.overlayLayer):c.Gg.then(({lh:d})=>{const e=new Hma(b,d);d.Ei(e);c.overlayLayer=e;Ima(a);Jma(a)})}}},Ima=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Fg.unbindAll(),b.Fg.set("panes",null),b.Fg.set("projection",null),b.Hg.sl(b),b.Gg&&(b.Gg=!1,b.Fg.onRemove?b.Fg.onRemove():b.Fg.remove()))}},Fma=function(a){return(a=a.__gmop)?a.map:null},Kma=function(a,
b){a.Fg.get("projection")!=b&&(a.Fg.bindTo("panes",a.map.__gm),a.Fg.set("projection",b))};_.Ia(OD,_.Hk);OD.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.dj(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.Fg:null))};var QD={};_.Ia(Dma,_.Hk);QD.Uk=function(a){if(a){var b=a.getMap();(PD(a).oB||null)!==b&&(b&&Ema(a,b),PD(a).oB=b)}};QD.sl=function(a){const b=PD(a);var c=b.ki;c&&c.unbindAll();(c=b.FB)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Rh&&_.Sb(b.Rh,_.sk);b.Rh=null;b.rv&&(b.rv.Fh.Dj(),b.rv=null);delete PD(a).oB};var RD={},Gma=class{constructor(a,b,c){this.map=a;this.Fg=b;this.Hg=c;this.Gg=!1;_.xl(this.map,"Ox");_.vl(this.map,148440);c.Uk(this)}draw(){this.Gg||(this.Gg=!0,this.Fg.onAdd&&this.Fg.onAdd());this.Fg.draw&&this.Fg.draw()}},Hma=class{constructor(a,b){this.Jg=a;this.Hg=b;this.Fg=null;this.Gg=[]}dispose(){}Ri(a,b,c,d,e,f,g,h){const l=this.Fg=this.Fg||new _.GB(this.Jg,this.Hg,()=>{});l.Ri(a,b,c,d,e,f,g,h);for(const n of this.Gg)Kma(n,l),n.draw()}Uk(a){this.Gg.push(a);this.Fg&&Kma(a,this.Fg);this.Hg.refresh()}sl(a){_.Wb(this.Gg,
a)}};RD.Uk=Jma;RD.sl=Ima;_.ik("overlay",{Gz:function(a){if(a){(0,QD.sl)(a);(0,RD.sl)(a);var b=a.getMap();b&&(b instanceof _.Nk?(0,RD.Uk)(a):(0,QD.Uk)(a))}},preventMapHitsFrom:a=>{_.cw(a,{kl:({event:b})=>{_.Kt(b.Jh)},ak:b=>_.Mv(b),Bp:b=>_.Nv(b),Nk:b=>_.Nv(b),nk:b=>_.Ov(b)}).Wq(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.ok);a.addEventListener("contextmenu",_.ok);a.addEventListener("dblclick",_.ok);a.addEventListener("mousedown",_.ok);a.addEventListener("mousemove",_.ok);a.addEventListener("MSPointerDown",
_.ok);a.addEventListener("pointerdown",_.ok);a.addEventListener("touchstart",_.ok);a.addEventListener("wheel",_.ok)}});});
