import{j as r}from"./jsx-runtime-CHfsb5tw.js";import{r as l}from"./index-D8wE4O-G.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:n,iconNode:i,...d},u)=>l.createElement("svg",{ref:u,...q,width:t,height:t,stroke:e,strokeWidth:s?Number(o)*24/Number(t):o,className:_("lucide",a),...d},[...i.map(([p,h])=>l.createElement(p,h)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const o=l.forwardRef(({className:s,...a},n)=>l.createElement(W,{ref:n,iconNode:t,className:_(`lucide-${$(e)}`,s),...a}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A=x("ChevronDown",z);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],C=x("CircleX",T);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],P=x("Search",B),V=(e,t)=>{l.useEffect(()=>{const o=s=>{e.every(a=>a.current&&!a.current.contains(s.target))&&t()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e,t])};function k({search:e,setSearch:t,searchRef:o}){return r.jsxs("div",{className:"flex items-center border-b",children:[r.jsx(P,{className:"text-gray-500 mr-2 ml-2"}),r.jsx("input",{ref:o,type:"text",className:"w-full p-2 focus:outline-none",value:e,onChange:s=>t(s.target.value)}),(e==null?void 0:e.length)>0?r.jsx(C,{className:"text-gray-500 me-3 hover cursor-pointer",onClick:()=>t("")}):""]})}k.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};function D({option:e,selected:t,toggleSelect:o,search:s}){const a=(n,i)=>{if(!i)return n;const d=new RegExp(`(${i})`,"gi");return n.replace(d,u=>`<span class="bg-blue-300">${u}</span>`)};return r.jsx("div",{className:`p-2 cursor-pointer hover:bg-blue-100 flex items-center ${t.includes(e)?"bg-blue-200":""}`,onClick:n=>{n.stopPropagation(),o(e)},children:r.jsx("p",{dangerouslySetInnerHTML:{__html:a(e,s)}})})}D.__docgenInfo={description:"",methods:[],displayName:"DropdownOption"};function I({isOpen:e,filteredOptions:t,search:o,setSearch:s,selected:a,toggleSelect:n,dropdownRef:i,searchRef:d,isWithSearch:u}){return e&&r.jsxs("div",{ref:i,className:"absolute mt-3 w-full bg-white border rounded-sm shadow-lg z-100 border-gray-500",children:[u?r.jsx(k,{search:o,setSearch:s,searchRef:d}):"",r.jsx("div",{className:"max-h-40 overflow-auto",children:t.length>0?t.map(p=>r.jsx(D,{option:p,selected:a,toggleSelect:n,search:o},p)):r.jsx("div",{className:"p-2 text-gray-500",children:"No results found"})})]})}I.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};function O({item:e,toggleSelect:t}){return r.jsxs("span",{className:"text-gray-600 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 flex flex-column py-1",children:[e,r.jsx(C,{size:15,className:"ml-1 cursor-pointer my-auto",onClick:o=>{o.stopPropagation(),t(e)}})]},e)}O.__docgenInfo={description:"",methods:[],displayName:"SelectedItem"};const X=["Option 1","Option with Icon","Long Long Option 3","Long Long Long Option 4","Long Long Long Option Long 5","Long Long Long Option Long Long 6"];function w({isMultiple:e=!1,isWithSearch:t=!0}){const[o,s]=l.useState([]),[a,n]=l.useState(""),[i,d]=l.useState(!1),u=l.useRef(null),p=l.useRef(null),h=l.useRef(null);V([p,u,h],()=>d(!1));const y=c=>{s(e?m=>m.includes(c)?m.filter(R=>R!==c):[...m,c]:m=>m[0]===c?[]:[c])},E=X.filter(c=>c.toLowerCase().includes(a.toLowerCase()));return r.jsxs("div",{className:"relative w-[1000px]",children:[r.jsxs("div",{ref:p,className:"border border-gray-500 rounded-sm p-2 flex items-center justify-between cursor-pointer bg-white",onClick:()=>d(!i),children:[r.jsx("div",{className:"flex flex-wrap gap-1",children:o.length>0?o.map(c=>r.jsx(O,{item:c,toggleSelect:y},c)):r.jsx("span",{className:"text-gray-400"})}),r.jsx(A,{size:18})]}),r.jsx(I,{isOpen:i,filteredOptions:E,search:a,setSearch:n,selected:o,toggleSelect:y,dropdownRef:u,searchRef:h,isWithSearch:t})]})}w.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{isMultiple:{defaultValue:{value:"false",computed:!1},required:!1},isWithSearch:{defaultValue:{value:"true",computed:!1},required:!1}}};const Z={title:"Components/MultiSelectDropdown",component:w,parameters:{controls:{expanded:!0}},argTypes:{isMultiple:{control:"boolean"},isWithSearch:{control:"boolean"}}},M=e=>r.jsx(w,{...e}),g=M.bind({});g.args={isMultiple:!1,isWithSearch:!0};const f=M.bind({});f.args={isMultiple:!0,isWithSearch:!0};var b,j,v;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:"args => <MultiSelectDropdown {...args} />",...(v=(j=g.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var N,S,L;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:"args => <MultiSelectDropdown {...args} />",...(L=(S=f.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const F=["Default","MultipleSelection"];export{g as Default,f as MultipleSelection,F as __namedExportsOrder,Z as default};
