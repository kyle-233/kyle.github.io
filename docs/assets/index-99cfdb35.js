import{t as X,$ as de,r,a as ce,b as ue,c as fe,f as me,j as s,s as ge,u as pe}from"./index-bb671be0.js";import{C as he}from"./index-7a86f61f.js";import{d as ve,c as e,a as be,u as we,b as xe,e as ye,f as c,g as U,r as Ce}from"./chunk-MCG5YV3A-0fe9eeee.js";var je=X({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-none","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent",...ve],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",md:"px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",lg:"px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-unit-0 !gap-unit-0",false:"[&>svg]:max-w-[theme(spacing.unit-8)]"},disableAnimation:{true:"!transition-none",false:"data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1,disableAnimation:!1},compoundVariants:[{variant:"solid",color:"default",class:e.solid.default},{variant:"solid",color:"primary",class:e.solid.primary},{variant:"solid",color:"secondary",class:e.solid.secondary},{variant:"solid",color:"success",class:e.solid.success},{variant:"solid",color:"warning",class:e.solid.warning},{variant:"solid",color:"danger",class:e.solid.danger},{variant:"shadow",color:"default",class:e.shadow.default},{variant:"shadow",color:"primary",class:e.shadow.primary},{variant:"shadow",color:"secondary",class:e.shadow.secondary},{variant:"shadow",color:"success",class:e.shadow.success},{variant:"shadow",color:"warning",class:e.shadow.warning},{variant:"shadow",color:"danger",class:e.shadow.danger},{variant:"bordered",color:"default",class:e.bordered.default},{variant:"bordered",color:"primary",class:e.bordered.primary},{variant:"bordered",color:"secondary",class:e.bordered.secondary},{variant:"bordered",color:"success",class:e.bordered.success},{variant:"bordered",color:"warning",class:e.bordered.warning},{variant:"bordered",color:"danger",class:e.bordered.danger},{variant:"flat",color:"default",class:e.flat.default},{variant:"flat",color:"primary",class:e.flat.primary},{variant:"flat",color:"secondary",class:e.flat.secondary},{variant:"flat",color:"success",class:e.flat.success},{variant:"flat",color:"warning",class:e.flat.warning},{variant:"flat",color:"danger",class:e.flat.danger},{variant:"faded",color:"default",class:e.faded.default},{variant:"faded",color:"primary",class:e.faded.primary},{variant:"faded",color:"secondary",class:e.faded.secondary},{variant:"faded",color:"success",class:e.faded.success},{variant:"faded",color:"warning",class:e.faded.warning},{variant:"faded",color:"danger",class:e.faded.danger},{variant:"light",color:"default",class:[e.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[e.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[e.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[e.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[e.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[e.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:e.ghost.default},{variant:"ghost",color:"primary",class:e.ghost.primary},{variant:"ghost",color:"secondary",class:e.ghost.secondary},{variant:"ghost",color:"success",class:e.ghost.success},{variant:"ghost",color:"warning",class:e.ghost.warning},{variant:"ghost",color:"danger",class:e.ghost.danger},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-l-small last:rounded-r-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-l-medium last:rounded-r-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-l-large last:rounded-r-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-l-full last:rounded-r-full"},{isInGroup:!0,variant:["bordered","ghost"],class:"[&:not(:first-child)]:ml-[calc(theme(borderWidth.medium)*-1)]"},{isIconOnly:!0,size:"sm",class:"min-w-unit-8 w-unit-8 h-unit-8"},{isIconOnly:!0,size:"md",class:"min-w-unit-10 w-unit-10 h-unit-10"},{isIconOnly:!0,size:"lg",class:"min-w-unit-12 w-unit-12 h-unit-12"}]});X({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}});var[Ge,Pe]=be({name:"ButtonGroupContext",strict:!1});function Ie(t){var l,i,d,m,g,p,u,f;const a=Pe(),h=!!a,{ref:v,as:b,children:j,startContent:P,endContent:J,autoFocus:K,className:N,spinner:Q,fullWidth:R=(l=a==null?void 0:a.fullWidth)!=null?l:!1,size:w=(i=a==null?void 0:a.size)!=null?i:"md",color:$=(d=a==null?void 0:a.color)!=null?d:"default",variant:B=(m=a==null?void 0:a.variant)!=null?m:"solid",disableAnimation:x=(g=a==null?void 0:a.disableAnimation)!=null?g:!1,radius:G=a==null?void 0:a.radius,disableRipple:I=(p=a==null?void 0:a.disableRipple)!=null?p:!1,isDisabled:Y=(u=a==null?void 0:a.isDisabled)!=null?u:!1,isIconOnly:k=(f=a==null?void 0:a.isIconOnly)!=null?f:!1,isLoading:y=!1,spinnerPlacement:Z="start",onPress:ee,onClick:ae,...z}=t,D=b||"button",M=typeof D=="string",C=we(v),{isFocusVisible:_,isFocused:O,focusProps:E}=de({autoFocus:K}),n=Y||y,se=r.useMemo(()=>je({size:w,color:$,variant:B,radius:G,fullWidth:R,isDisabled:n,isInGroup:h,disableAnimation:x,isIconOnly:k,className:N}),[w,$,B,G,R,n,h,k,x,N]),{onClick:W,onClear:A,ripples:H}=xe(),te=r.useCallback(o=>{I||n||x||C.current&&W(o)},[I,n,x,C,W]),{buttonProps:S,isPressed:V}=ye({elementType:b,isDisabled:n,onPress:ee,onClick:ce(ae,te),...z},C),{isHovered:F,hoverProps:L}=ue({isDisabled:n}),re=r.useCallback((o={})=>({"data-disabled":c(n),"data-focus":c(O),"data-pressed":c(V),"data-focus-visible":c(_),"data-hover":c(F),"data-loading":c(y),...fe(S,E,L,U(z,{enabled:M}),U(o))}),[y,n,O,V,M,_,F,S,E,L,z]),T=o=>r.isValidElement(o)?r.cloneElement(o,{"aria-hidden":!0,focusable:!1,tabIndex:-1}):null,ne=T(P),oe=T(J),le=r.useMemo(()=>({sm:"sm",md:"sm",lg:"md"})[w],[w]),ie=r.useCallback(()=>({ripples:H,onClear:A}),[H,A]);return{Component:D,children:j,domRef:C,spinner:Q,styles:se,startContent:ne,endContent:oe,isLoading:y,spinnerPlacement:Z,spinnerSize:le,disableRipple:I,getButtonProps:re,getRippleProps:ie}}var q=me((t,l)=>{const{Component:i,domRef:d,children:m,styles:g,spinnerSize:p,spinner:u=s.jsx(ge,{color:"current",size:p}),spinnerPlacement:f,startContent:a,endContent:h,isLoading:v,disableRipple:b,getButtonProps:j,getRippleProps:P}=Ie({...t,ref:l});return s.jsxs(i,{ref:d,className:g,...j(),children:[a,v&&f==="start"&&u,m,v&&f==="end"&&u,h,!b&&s.jsx(Ce,{...P()})]})});q.displayName="NextUI.Button";var ze=q;const Ne="/assets/homeBg-098439d3.jpg",ke=()=>{const[t,l]=r.useState(new Date),i=pe();return r.useEffect(()=>{const d=setInterval(()=>{l(()=>new Date)},1e3);return()=>clearInterval(d)},[]),s.jsxs("section",{className:"relative max-h-screen min-h-screen bg-red overflow-auto",children:[s.jsx("img",{src:Ne,alt:"home background",className:"absolute top-0 left-0 w-full h-full object-cover z-1"}),s.jsxs(he,{className:"z-2 relative bg-transparent",children:[s.jsx("div",{className:"min-h-screen flex justify-center items-center",children:s.jsxs("div",{className:"flex justify-center items-center flex-col text-white antialiased",children:[s.jsxs("h2",{className:"text-9xl font-bold",children:[t.getHours(),":",t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes()]}),s.jsxs("h3",{className:"mt-4 text-4xl",children:["Good"," ",t.getHours()>=16?"Evening":t.getHours()>=8?"Afternoon":"Morning","!"]}),s.jsx("h4",{className:"mt-4 text-[18px]",children:"What is your mian focus for today?"}),s.jsx("div",{className:"mt-6 h-[2px] w-full bg-white"}),s.jsx(ze,{radius:"full",className:"mt-8 text-[20px] font-bold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",onClick:()=>{i("/blog")},children:"EXPLORE"})]})}),s.jsx("div",{className:"bg-white"})]})]})};export{ke as default};