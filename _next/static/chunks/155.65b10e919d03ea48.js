(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{4542:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){!function(L){"use strict";function _detectIconOptions(className,imagePath){var bkgImage,el=L.DomUtil.create("div",className,document.body),urls=function(urlsContainer,imagePath){for(var url,re=/url\(['"]?([^"']*?)['"]?\)/gi,urls=[],m=re.exec(urlsContainer);m;)urls.push(imagePath?(url=m[1]).substr(url.lastIndexOf("/")+1):m[1]),m=re.exec(urlsContainer);return urls}((bkgImage=_getStyle(el,"background-image"))&&"none"!==bkgImage?bkgImage:_getStyle(el,"cursor"),imagePath),iconX=_getStyleInt(el,"width"),iconY=_getStyleInt(el,"height"),anchorNX=_getStyleInt(el,"margin-left"),anchorNY=_getStyleInt(el,"margin-top");return el.parentNode.removeChild(el),{Url:urls[0],RetinaUrl:urls[1],Size:[iconX,iconY],Anchor:[-anchorNX,-anchorNY]}}function _detectDivOverlayOptions(className){var el=L.DomUtil.create("div",className,document.body),anchorX=_getStyleInt(el,"margin-left"),anchorY=_getStyleInt(el,"margin-top");return el.parentNode.removeChild(el),{Anchor:[anchorX,anchorY]}}function _getStyleInt(el,style){return parseInt(_getStyle(el,style),10)}function _getStyle(el,style){return L.DomUtil.getStyle(el,style)||L.DomUtil.getStyle(el,style.replace(/-(\w)/g,function(str,w){return w.toUpperCase()}))}L.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),L.Icon.Default.include({_needsInit:!0,_getIconUrl:function(name){var imagePath=this.options.imagePath||L.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(imagePath),imagePath+L.Icon.prototype._getIconUrl.call(this,name)},_initializeOptions:function(imagePath){this._setOptions("icon",_detectIconOptions,imagePath),this._setOptions("shadow",_detectIconOptions,imagePath),this._setOptions("popup",_detectDivOverlayOptions),this._setOptions("tooltip",_detectDivOverlayOptions),this._needsInit=!1},_setOptions:function(name,detectorFn,imagePath){var options=this.options,optionValues=detectorFn(options.classNamePrefix+name,imagePath);for(var optionName in optionValues)options[name+optionName]=options[name+optionName]||optionValues[optionName]}})}(__webpack_require__(5243))},3155:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Map}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294);function element_createElementObject(instance,context,container){return Object.freeze({instance,context,container})}function element_createElementHook(createElement,updateElement){return null==updateElement?function(props,context){let elementRef=(0,react.useRef)();return elementRef.current||(elementRef.current=createElement(props,context)),elementRef}:function(props,context){let elementRef=(0,react.useRef)();elementRef.current||(elementRef.current=createElement(props,context));let propsRef=(0,react.useRef)(props),{instance}=elementRef.current;return(0,react.useEffect)(function(){propsRef.current!==props&&(updateElement(instance,props,propsRef.current),propsRef.current=props)},[instance,props,context]),elementRef}}function extendContext(source,extra){return Object.freeze({...source,...extra})}let LeafletContext=(0,react.createContext)(null),LeafletProvider=LeafletContext.Provider;function useLeafletContext(){let context=(0,react.useContext)(LeafletContext);if(null==context)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return context}function component_createContainerComponent(useElement){return(0,react.forwardRef)(function(props,forwardedRef){let{instance,context}=useElement(props).current;return(0,react.useImperativeHandle)(forwardedRef,()=>instance),null==props.children?null:react.createElement(LeafletProvider,{value:context},props.children)})}__webpack_require__(3935);var leaflet_src=__webpack_require__(5243);let useLayersControlElement=element_createElementHook(function({children:_c,...options},ctx){let control=new leaflet_src.Control.Layers(void 0,void 0,options);return element_createElementObject(control,extendContext(ctx,{layersControl:control}))},function(control,props,prevProps){props.collapsed!==prevProps.collapsed&&(!0===props.collapsed?control.collapse():control.expand())}),LayersControl=component_createContainerComponent(function(props){let context=useLeafletContext(),elementRef=useLayersControlElement(props,context),{instance}=elementRef.current,positionRef=(0,react.useRef)(props.position),{position}=props;return(0,react.useEffect)(function(){return instance.addTo(context.map),function(){instance.remove()}},[context.map,instance]),(0,react.useEffect)(function(){null!=position&&position!==positionRef.current&&(instance.setPosition(position),positionRef.current=position)},[instance,position]),elementRef});function createControlledLayer(addLayerToControl){return function(props){let parentContext=useLeafletContext(),propsRef=(0,react.useRef)(props),[layer,setLayer]=(0,react.useState)(null),{layersControl,map}=parentContext,addLayer=(0,react.useCallback)(layerToAdd=>{null!=layersControl&&(propsRef.current.checked&&map.addLayer(layerToAdd),addLayerToControl(layersControl,layerToAdd,propsRef.current.name),setLayer(layerToAdd))},[layersControl,map]),removeLayer=(0,react.useCallback)(layerToRemove=>{layersControl?.removeLayer(layerToRemove),setLayer(null)},[layersControl]),context=(0,react.useMemo)(()=>extendContext(parentContext,{layerContainer:{addLayer,removeLayer}}),[parentContext,addLayer,removeLayer]);return(0,react.useEffect)(()=>{null!==layer&&propsRef.current!==props&&(!0===props.checked&&(null==propsRef.current.checked||!1===propsRef.current.checked)?map.addLayer(layer):!0===propsRef.current.checked&&(null==props.checked||!1===props.checked)&&map.removeLayer(layer),propsRef.current=props)}),props.children?react.createElement(LeafletProvider,{value:context},props.children):null}}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}LayersControl.BaseLayer=createControlledLayer(function(layersControl,layer,name){layersControl.addBaseLayer(layer,name)}),LayersControl.Overlay=createControlledLayer(function(layersControl,layer,name){layersControl.addOverlay(layer,name)});let MapContainer=(0,react.forwardRef)(function({bounds,boundsOptions,center,children,className,id,placeholder,style,whenReady,zoom,...options},forwardedRef){let[props]=(0,react.useState)({className,id,style}),[context,setContext]=(0,react.useState)(null);(0,react.useImperativeHandle)(forwardedRef,()=>context?.map??null,[context]);let mapRef=(0,react.useCallback)(node=>{if(null!==node&&null===context){let map=new leaflet_src.Map(node,options);null!=center&&null!=zoom?map.setView(center,zoom):null!=bounds&&map.fitBounds(bounds,boundsOptions),null!=whenReady&&map.whenReady(whenReady),setContext(Object.freeze({__version:1,map:map}))}},[]);(0,react.useEffect)(()=>()=>{context?.map.remove()},[context]);let contents=context?react.createElement(LeafletProvider,{value:context},children):placeholder??null;return react.createElement("div",_extends({},props,{ref:mapRef}),contents)});function useEventHandlers(element,eventHandlers){let eventHandlersRef=(0,react.useRef)();(0,react.useEffect)(function(){return null!=eventHandlers&&element.instance.on(eventHandlers),eventHandlersRef.current=eventHandlers,function(){null!=eventHandlersRef.current&&element.instance.off(eventHandlersRef.current),eventHandlersRef.current=null}},[element,eventHandlers])}function withPane(props,context){let pane=props.pane??context.pane;return pane?{...props,pane}:props}function useLayerLifecycle(element,context){(0,react.useEffect)(function(){let container=context.layerContainer??context.map;return container.addLayer(element.instance),function(){context.layerContainer?.removeLayer(element.instance),context.map.removeLayer(element.instance)}},[context,element])}let TileLayer=function(createElement,updateElement){var useElement;let useElement1=element_createElementHook(createElement,updateElement);return useElement=function(props){let context=useLeafletContext(),elementRef=useElement1(withPane(props,context),context);return function(map,attribution){let attributionRef=(0,react.useRef)(attribution);(0,react.useEffect)(function(){attribution!==attributionRef.current&&null!=map.attributionControl&&(null!=attributionRef.current&&map.attributionControl.removeAttribution(attributionRef.current),null!=attribution&&map.attributionControl.addAttribution(attribution)),attributionRef.current=attribution},[map,attribution])}(context.map,props.attribution),useEventHandlers(elementRef.current,props.eventHandlers),useLayerLifecycle(elementRef.current,context),elementRef},(0,react.forwardRef)(function(props,forwardedRef){let{instance}=useElement(props).current;return(0,react.useImperativeHandle)(forwardedRef,()=>instance),null})}(function({url,...options},context){let layer=new leaflet_src.TileLayer(url,withPane(options,context));return element_createElementObject(layer,context)},function(layer,props,prevProps){!function(layer,props,prevProps){let{opacity,zIndex}=props;null!=opacity&&opacity!==prevProps.opacity&&layer.setOpacity(opacity),null!=zIndex&&zIndex!==prevProps.zIndex&&layer.setZIndex(zIndex)}(layer,props,prevProps);let{url}=props;null!=url&&url!==prevProps.url&&layer.setUrl(url)}),GeoJSON=function(createElement,updateElement){let useElement=element_createElementHook(createElement,updateElement);return component_createContainerComponent(function(props){let context=useLeafletContext(),elementRef=useElement(withPane(props,context),context);return useEventHandlers(elementRef.current,props.eventHandlers),useLayerLifecycle(elementRef.current,context),function(element,props){let optionsRef=(0,react.useRef)();(0,react.useEffect)(function(){if(props.pathOptions!==optionsRef.current){let options=props.pathOptions??{};element.instance.setStyle(options),optionsRef.current=options}},[element,props])}(elementRef.current,props),elementRef})}(function({data,...options},ctx){let geoJSON=new leaflet_src.GeoJSON(data,options);return element_createElementObject(geoJSON,extendContext(ctx,{overlayContainer:geoJSON}))},function(layer,props,prevProps){props.style!==prevProps.style&&(null==props.style?layer.resetStyle():layer.setStyle(props.style))});__webpack_require__(5254),__webpack_require__(1301),__webpack_require__(4542);let{BaseLayer}=LayersControl;function Map(model){return(0,jsx_runtime.jsxs)(MapContainer,{center:[-6.224713,106.847774],zoom:11,scrollWheelZoom:!0,style:{height:"100%",width:"100%"},className:"rounded border-slate-100 z-0",children:[(0,jsx_runtime.jsxs)(LayersControl,{children:[(0,jsx_runtime.jsx)(BaseLayer,{checked:!0,name:"Carto",children:(0,jsx_runtime.jsx)(TileLayer,{url:"http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",attribution:"\xa9 <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, \xa9 <a href='https://carto.com/attributions'>CARTO</a>"})}),(0,jsx_runtime.jsx)(BaseLayer,{name:"Open Street Maps",children:(0,jsx_runtime.jsx)(TileLayer,{url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",maxNativeZoom:19})}),(0,jsx_runtime.jsx)(BaseLayer,{name:"Esri",children:(0,jsx_runtime.jsx)(TileLayer,{url:"http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",attribution:"\xa9 <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, Esri, HERE, Garmin, and the GIS User Community",maxNativeZoom:19})}),(0,jsx_runtime.jsx)(BaseLayer,{name:"Stadia Maps",children:(0,jsx_runtime.jsx)(TileLayer,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"})})]}),(0,jsx_runtime.jsx)(GeoJSON,{data:model.data,style:model.style,onEachFeature:model.onEachFeature})]})}},1301:function(){},5254:function(){}}]);