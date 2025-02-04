import{j as r}from"./jsx-runtime-CHfsb5tw.js";import{r as a}from"./index-D8wE4O-G.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:n="",children:l,iconNode:c,...d},u)=>a.createElement("svg",{ref:u,...W,width:t,height:t,stroke:e,strokeWidth:s?Number(o)*24/Number(t):o,className:C("lucide",n),...d},[...c.map(([p,y])=>a.createElement(p,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(e,t)=>{const o=a.forwardRef(({className:s,...n},l)=>a.createElement(z,{ref:l,iconNode:t,className:C(`lucide-${V(e)}`,s),...n}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],T=b("ChevronDown",A);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],D=b("CircleX",B);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],X=b("Search",P),H=(e,t)=>{a.useEffect(()=>{const o=s=>{e.every(n=>n.current&&!n.current.contains(s.target))&&t()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e,t])};function I({search:e,setSearch:t,searchRef:o}){return r.jsxs("div",{className:"flex items-center border-b",children:[r.jsx(X,{className:"text-gray-500 mr-2 ml-2"}),r.jsx("input",{ref:o,type:"text",className:"w-full p-2 focus:outline-none",value:e,onChange:s=>t(s.target.value)}),(e==null?void 0:e.length)>0?r.jsx(D,{className:"text-gray-500 me-3 hover cursor-pointer",onClick:()=>t("")}):""]})}I.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};function M({option:e,selected:t,toggleSelect:o,search:s}){const n=(l,c)=>{if(!c)return l;const d=new RegExp(`(${c})`,"gi");return l.replace(d,u=>`<span class="bg-blue-300">${u}</span>`)};return r.jsx("div",{className:`p-2 cursor-pointer hover:bg-blue-100 flex items-center ${t.includes(e)?"bg-blue-200":""}`,onClick:l=>{l.stopPropagation(),o(e)},children:r.jsx("p",{dangerouslySetInnerHTML:{__html:n(e.label,s)}})})}M.__docgenInfo={description:"",methods:[],displayName:"DropdownOption"};function L({isOpen:e,filteredOptions:t,search:o,setSearch:s,selected:n,toggleSelect:l,dropdownRef:c,searchRef:d,isWithSearch:u}){return e&&r.jsxs("div",{ref:c,className:"absolute mt-3 w-full bg-white border rounded-sm shadow-lg z-100 border-gray-500",children:[u?r.jsx(I,{search:o,setSearch:s,searchRef:d}):"",r.jsx("div",{className:"max-h-40 overflow-auto",children:t.length>0?t.map(p=>r.jsx(M,{option:p,selected:n,toggleSelect:l,search:o},p.key)):r.jsx("div",{className:"p-2 text-gray-500",children:"No results found"})})]})}L.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};function E({item:e,toggleSelect:t}){return r.jsxs("span",{className:"text-gray-600 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 flex flex-column py-1",children:[e.label,r.jsx(D,{size:15,className:"ml-1 cursor-pointer my-auto",onClick:o=>{o.stopPropagation(),t(e)}})]},e==null?void 0:e.key)}E.__docgenInfo={description:"",methods:[],displayName:"SelectedItem"};const K=[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"},{key:"3",label:"Option 3"},{key:"4",label:"Option 5"},{key:"6",label:"Option 6"},{key:"7",label:"Option 7"}];function x({isMultiple:e=!1,isWithSearch:t=!0,optionLabels:o=K,isOutlined:s=!0}){const[n,l]=a.useState([]),[c,d]=a.useState(""),[u,p]=a.useState(!1),y=a.useRef(null),h=a.useRef(null),k=a.useRef(null);H([h,y,k],()=>p(!1));const w=i=>{console.log(i),l(e?m=>m.includes(i)?m.filter(q=>q.key!=i.key):[...m,i]:m=>m[0]==i?[]:[i])},$=o.filter(i=>i.label.toLowerCase().includes(c.toLowerCase()));return r.jsxs("div",{className:"relative w-screen max-w-xl",children:[r.jsxs("div",{ref:h,className:`border border-gray-500 rounded-sm p-2 flex items-center justify-between cursor-pointer ${s?"bg-gray-200":"bg-white"}`,onClick:()=>p(!u),children:[r.jsx("div",{className:"flex flex-wrap gap-1",children:n.length>0?n.map(i=>r.jsx(E,{item:i,toggleSelect:w},i.key)):r.jsx("span",{className:"text-gray-400"})}),r.jsx(T,{size:18})]}),r.jsx(L,{isOpen:u,filteredOptions:$,search:c,setSearch:d,selected:n,toggleSelect:w,dropdownRef:y,searchRef:k,isWithSearch:t})]})}x.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{isMultiple:{defaultValue:{value:"false",computed:!1},required:!1},isWithSearch:{defaultValue:{value:"true",computed:!1},required:!1},optionLabels:{defaultValue:{value:`[
  {
    key:"1",
    label: 'Option 1'
  },
  {
    key:"2",
    label: 'Option 2'
  },
  {
    key:"3",
    label: 'Option 3'
  },
  {
    key:"4",
    label: 'Option 5'
  },
  {
    key:"6",
    label: 'Option 6'
  },
  {
    key:"7",
    label: 'Option 7'
  },
]`,computed:!1},required:!1},isOutlined:{defaultValue:{value:"true",computed:!1},required:!1}}};const G={title:"Components/MultiSelectDropdown",component:x,parameters:{controls:{expanded:!0}},argTypes:{isMultiple:{control:"boolean"},isWithSearch:{control:"boolean"},optionLabels:{control:"object",defaultValue:[{key:"Option1",label:"option 1"},{key:"Option2",label:"option 2"},{key:"Option3",label:"option 3"}]},isOutlined:{control:"boolean"}}},R=e=>r.jsx(x,{...e}),f=R.bind({});f.args={isMultiple:!1,isWithSearch:!0,isOutlined:!1,optionLabels:[{key:"Option1",label:"option 1"},{key:"Option2",label:"option 2"},{key:"Option3",label:"option 3"}]};const g=R.bind({});g.args={isMultiple:!0,isWithSearch:!0,isOutlined:!0};var O,v,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:"args => <MultiSelectDropdown {...args} />",...(j=(v=f.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var N,S,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:"args => <MultiSelectDropdown {...args} />",...(_=(S=g.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const J=["Default","MultipleSelection"];export{f as Default,g as MultipleSelection,J as __namedExportsOrder,G as default};
