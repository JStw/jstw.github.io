(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+Iy7":function(e,t,a){"use strict";a("322J"),a("eCkr"),a("9Cra"),a("XcV5"),a("LcTQ"),a("AlI/"),a("IJNT");var i=a("KX3O");t.__esModule=!0,t.default=void 0;var r,n=i(a("p8FO")),s=i(a("jvP9")),o=i(a("obyG")),d=i(a("UI6W")),l=i(a("gbxc")),c=i(a("sHG+")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(R,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),R=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,E=e.itemProp,y=e.loading,x=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,d.default)({opacity:L?1:0,transition:C?"opacity "+b+"ms":"none"},o),O="boolean"==typeof m?"lightgray":m,N={transitionDelay:b+"ms"},V=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},C&&N),o),f),k={title:t,alt:this.state.isVisible?"":a,style:V,className:A,itemProp:E};if(p){var M=p,T=g(p);return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),O&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),T.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:k,imageVariants:M,generateSources:I}),T.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:k,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(M),l.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)((0,d.default)({alt:a,title:t,loading:y},T),{},{imageVariants:M}))}}))}if(h){var W=h,z=g(h),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},O&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},C&&N)}),z.base64&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:k,imageVariants:W,generateSources:I}),z.tracedSVG&&l.default.createElement(B,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:k,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(W),l.default.createElement(R,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)((0,d.default)({alt:a,title:t,loading:y},z),{},{imageVariants:W}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});C.propTypes={resolutions:Q,sizes:O,fixed:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=C;t.default=N},"AlI/":function(e,t,a){"use strict";var i=a("QEkk"),r=a("asLN")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("XdlT")(n)},DSMo:function(e,t,a){"use strict";a("XWLL"),a("IJNT");var i=a("Zw4s"),r=a("gbxc"),n=a.n(r),s=a("+Iy7"),o=a.n(s),d=a("qys2");t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("br",null),"Senior Software Developer at ",n.a.createElement("a",{href:"https://www.arhs-group.com/entities/spikeseed/"},"ARHS Spikeseed"),"."))}},IJNT:function(e,t,a){"use strict";a("LYbY")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},LYbY:function(e,t,a){var i=a("QEkk"),r=a("gXA2"),n=a("L7ct"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},LcTQ:function(e,t,a){"use strict";var i,r=a("m96Y"),n=a("asLN")(0),s=a("XNuw"),o=a("IFLf"),d=a("Efcp"),l=a("eCmU"),c=a("V/CU"),u=a("o8nU"),f=a("o8nU"),A=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,p=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(c(e)){var t=g(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},S=e.exports=a("Q1kd")("WeakMap",m,b,l,!0,!0);f&&A&&(d((i=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=S.prototype,a=t[e];s(t,e,(function(t,r){if(c(t)&&!p(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},Zw4s:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAbOGfANpObn0Sg36KS//xAAdEAADAAEFAQAAAAAAAAAAAAABAgMABBESISMy/9oACAEBAAEFAuWISTuM1HwtWkVoCKdrL0E3Kr//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQISITH/2gAIAQMBAT8BxIsifBn/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAQISIf/aAAgBAgEBPwHta1gj/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECEBEhMUFx/9oACAEBAAY/ArUU+SSfVebMSMaP/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUWH/2gAIAQEAAT8hPhjjmz15n2i0Vrd2peFSxdYJbHPIDXpSG3flvuVKIFLSf//aAAwDAQACAAMAAAAQQz9B/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAExEP/aAAgBAwEBPxCp4yKP/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQMRH/2gAIAQIBAT8QBeFOmYn/xAAcEAEBAAMBAQEBAAAAAAAAAAABEQAhUTFhQdH/2gAIAQEAAT8Q7hlW31Xz8mW3h0KjmEDZfus3KfQATz7lDCLwzzHcbVD0SYFVZwm9/uIzzBqx/XP/2Q==","width":50,"height":50,"src":"/static/5cedcb2b70ec9d23884c6868cc27b7c4/99438/profile-pic.jpg","srcSet":"/static/5cedcb2b70ec9d23884c6868cc27b7c4/99438/profile-pic.jpg 1x,\\n/static/5cedcb2b70ec9d23884c6868cc27b7c4/aba1d/profile-pic.jpg 1.5x,\\n/static/5cedcb2b70ec9d23884c6868cc27b7c4/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Julien Sauvannet","summary":"a passionate full-stack developer."},"social":{"twitter":"jstw"}}}}}')},eCmU:function(e,t,a){"use strict";var i=a("xCwt"),r=a("IFLf").getWeak,n=a("c6Fl"),s=a("V/CU"),o=a("1RWU"),d=a("CIBi"),l=a("asLN"),c=a("Vb5Z"),u=a("o8nU"),f=l(5),A=l(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).has(e):a&&c(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-c5a0d80c2b63a7ebbf48.js.map