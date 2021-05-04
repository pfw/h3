(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,f=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(115)),i={id:"h3ToGeoBoundaryDesc",title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",slug:"/core-library/h3ToGeoBoundaryDesc"},c={unversionedId:"core-library/h3ToGeoBoundaryDesc",id:"core-library/h3ToGeoBoundaryDesc",isDocsHomePage:!1,title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",description:"This operation is performed by function h3ToGeoBoundary. See the comments in the function source code for more detail.",source:"@site/docs/core-library/h3ToGeoBoundaryDesc.md",sourceDirName:"core-library",slug:"/core-library/h3ToGeoBoundaryDesc",permalink:"/docs/core-library/h3ToGeoBoundaryDesc",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/h3ToGeoBoundaryDesc.md",version:"current",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",frontMatter:{id:"h3ToGeoBoundaryDesc",title:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",sidebar_label:"Generate the cell boundary in latitude/longitude coordinates of an H3Index cell",slug:"/core-library/h3ToGeoBoundaryDesc"},sidebar:"someSidebar",previous:{title:"Determine the latitude/longitude coordinates of the center point of an H3Index cell",permalink:"/docs/core-library/h3ToGeoDesc"}},l=[],s={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This operation is performed by function ",Object(a.b)("inlineCode",{parentName:"p"},"h3ToGeoBoundary"),". See the comments in the function source code for more detail."),Object(a.b)("p",null,"The conversion is performed as a series of coordinate system conversions described below. See the page ",Object(a.b)("a",{parentName:"p",href:"/docs/core-library/coordsystems"},"Coordinate Systems used by the H3 Core Library")," for more information on each of these coordinate systems."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We note that the cell vertices are the center points of cells in an aperture 3 grid one resolution finer than the cell resolution, which we term a ",Object(a.b)("em",{parentName:"li"},"substrate")," grid. We precalculate the substrate ",Object(a.b)("em",{parentName:"li"},"ijk")," coordinates of a cell with ",Object(a.b)("em",{parentName:"li"},"ijk")," coordinates (0,0,0), adding additional aperture 3 and aperture 7 (if required, by Class III cell grid) substrate grid resolutions as required to transform the vertex coordinates into a Class II substrate grid.")),Object(a.b)("div",{align:"center"},Object(a.b)("img",{height:"300",src:"/images/substrate3.png"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The function ",Object(a.b)("inlineCode",{parentName:"li"},"_faceIjkToGeoBoundary")," calculates the ",Object(a.b)("em",{parentName:"li"},"ijk")," coordinates of the cell center point in the appropriate substrate grid (determined in the last step), and each of the substrate vertices is translated using the cell center point ",Object(a.b)("em",{parentName:"li"},"ijk"),". Each vertex ",Object(a.b)("em",{parentName:"li"},"ijk")," is then transformed onto the appropriate face and ",Object(a.b)("em",{parentName:"li"},"Hex2d")," coordinate system using the approach taken in ",Object(a.b)("a",{parentName:"li",href:"/docs/core-library/h3ToGeoDesc"},"finding a cell center point"),". If adjacent vertices lie on different icosahedron faces a point is introduced at the intersection of the cell edge and icosahedron face edge."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"Hex2d")," coordinates are then converted to latitude/longitude using ",Object(a.b)("inlineCode",{parentName:"li"},"_hex2dToGeo"),".")))}d.isMDXComponent=!0}}]);