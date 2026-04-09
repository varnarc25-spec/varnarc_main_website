import{Z as b,j as B,r as g,o as x,c as P,w as r,a as s,f as e,d as l}from"./app-z5HGiShE.js";import{L as w}from"./main-CMR6nr9h.js";import{P as y}from"./page-header-DPESrTbU.js";import{C as _}from"./card-header-57slOQCr.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-D-bfu1UJ.js";import"./simplebar-vue.esm-CoVtVtPQ.js";import"./logo-sm-Du8Of0Sj.js";import"./logo-dark-Dh5pZxEJ.js";import"./logo-light-DJkTuO8P.js";import"./avatar-2-86M8S3El.js";import"./avatar-3-C_5WlMir.js";import"./avatar-5-DXW8GA-H.js";import"./russia-DqU8AKV7.js";import"./avatar-8-DqJ4kEa5.js";import"./avatar-6-Bb_p0Nhs.js";import"./bell-Dwr83Hdp.js";import"./prism-B9eUEB6_.js";const k={components:{Layout:w,PageHeader:y,CardHeader:_,Link:B,Head:b}},C={class:"live-preview"},U={class:"live-preview"},S={class:"live-preview"},H={class:"live-preview"},L={class:"live-preview"},z={class:"mb-4"},A={class:"mb-4"},E={class:"mb-4"},$={class:"live-preview"},N={class:"live-preview"},V={class:"live-preview"},D={class:"live-preview"},M={class:"live-preview"},R={class:"live-preview"},T={class:"d-flex align-items-center pb-2 mt-4"},j={class:"flex-grow-1"},G={class:"d-flex align-items-center py-2"},I={class:"flex-grow-1"},Z={class:"d-flex align-items-center py-2"},q={class:"flex-grow-1"},F={class:"live-preview"},J={class:"live-preview"},K={class:"position-relative m-4"},O={class:"live-preview"};function Q(W,a,X,Y,ss,es){const m=g("Head"),c=g("PageHeader"),d=g("CardHeader"),t=g("BProgress"),o=g("BCardBody"),i=g("BCard"),u=g("BCol"),v=g("BRow"),n=g("BProgress-bar"),p=g("BButton"),f=g("Layout");return x(),P(f,null,{default:r(()=>[s(m,{title:"Progress"}),s(c,{title:"Progress",pageTitle:"Base UI"}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Default Progress"}),s(o,null,{default:r(()=>[a[0]||(a[0]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"BProgress"),l(" tag to show default progress. ")],-1)),e("div",C,[s(t,{variant:"primary",class:"mb-4",value:0}),s(t,{variant:"primary",class:"mb-4",value:25}),s(t,{variant:"primary",class:"mb-4",value:50}),s(t,{variant:"primary",class:"mb-4",value:75}),s(t,{variant:"primary",value:100})]),a[1]||(a[1]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[l(""),e("code",null,`<!-- Base Examples -->
    <BProgress :value="0" class="mb-4"></BProgress>

    <BProgress :value="25" class="mb-4"></BProgress>

    <BProgress :value="50" class="mb-4"></BProgress>

    <BProgress :value="75" class="mb-4"></BProgress>
    
    <BProgress :value="100">
`)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:" Progress with background color "}),s(o,null,{default:r(()=>[a[2]||(a[2]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,'variant=""'),l(" in progress bar class with the below-mentioned color variation to set the background color progress bar. ")],-1)),e("div",U,[s(t,{value:15,variant:"primary",class:"mb-4"}),s(t,{value:25,variant:"success",class:"mb-4"}),s(t,{value:50,variant:"info",class:"mb-4"}),s(t,{value:75,variant:"warning",class:"mb-4"}),s(t,{value:100,variant:"danger"})]),a[3]||(a[3]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[l(""),e("code",null,`<!-- Backgrounds -->
    <BProgress :value="15" variant="primary" class="mb-4"></BProgress>

    <BProgress :value="25" variant="success" class="mb-4"></BProgress>

    <BProgress :value="50" variant="info" class="mb-4"></BProgress>

    <BProgress :value="75" variant="warning" class="mb-4"></BProgress>

    <BProgress :value="100" variant="danger" class="mb-4"></BProgress>

    `)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Progress with Label"}),s(o,null,{default:r(()=>[a[4]||(a[4]=e("p",{class:"text-muted"}," Add labels to your progress bars by placing text within the progress-bar. ",-1)),e("div",S,[s(t,{value:25,variant:"primary",class:"mb-4","show-value":""})]),a[5]||(a[5]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`<!-- Labels Example -->
    <BProgress :value="25" variant="primary" class="mb-4" show-value ></BProgress>
`)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Multiple Bars"}),s(o,null,{default:r(()=>[a[6]||(a[6]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"bg-"),l(" class to progress bar class with the below-mentioned color to change the appearance of individual progress bars. ")],-1)),e("div",H,[s(t,null,{default:r(()=>[s(n,{value:15,variant:"primary"}),s(n,{value:30,variant:"success"}),s(n,{value:20,variant:"info"})]),_:1})]),a[7]||(a[7]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`<!-- Multiple Bars -->
<BProgress>
    <BProgress-bar :value="15" variant="primary" />
    <BProgress-bar :value="30" variant="success" />
    <BProgress-bar :value="20" variant="info" />
</BProgress>`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Height"}),s(o,null,{default:r(()=>[a[12]||(a[12]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"progress-sm"),l(", "),e("code",null,"progress-lg"),l(", or "),e("code",null,"progress-xl"),l(" class to set the different heights of progress. ")],-1)),e("div",L,[e("div",z,[a[8]||(a[8]=e("h5",{class:"fs-13"},"Small Progress",-1)),s(t,{value:25,class:"progress-sm",variant:"primary"})]),e("div",A,[a[9]||(a[9]=e("h5",{class:"fs-13"},"Default Progress",-1)),s(t,{value:40,variant:"success"})]),e("div",E,[a[10]||(a[10]=e("h5",{class:"fs-13"},"Large Progress",-1)),s(t,{value:50,class:"progress-lg",variant:"warning"})]),e("div",null,[a[11]||(a[11]=e("h5",{class:"fs-13"},"Extra Large Progress",-1)),s(t,{value:70,class:"progress-xl",variant:"danger"})])]),a[13]||(a[13]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[l(""),e("code",null,`<!-- Prgress sm -->
    <BProgress :value="25" class="progress-sm" variant="primary"></BProgress>

    <BProgress :value="40" variant="success"></BProgress>

    <BProgress :value="50" class="progress-lg" variant="warning"></BProgress>

    <BProgress :value="70" class="progress-xl" variant="danger"></BProgress>
`)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Striped Progress"}),s(o,null,{default:r(()=>[a[14]||(a[14]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"progress-bar-striped"),l(" class to add strip to the progress. ")],-1)),e("div",$,[s(t,{striped:"",value:25,class:"mb-4",variant:"primary"}),s(t,{striped:"",value:40,variant:"success"})]),a[15]||(a[15]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`<!-- Striped Prgress -->
    <BProgress striped :value="25" variant="primary"></BProgress>

    <BProgress striped :value="40" variant="success"></BProgress>
`)])],-1))]),_:1})]),_:1}),s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Animated Striped Progress"}),s(o,null,{default:r(()=>[a[16]||(a[16]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"progress-bar-striped progress-bar-animated"),l(" class to add strip with animation to the progress. ")],-1)),e("div",N,[s(t,{striped:"",animated:"",value:75,variant:"primary"})]),a[17]||(a[17]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,'<BProgress striped animated :value="75" variant="primary"></BProgress>')])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Gradient Progress"}),s(o,null,{default:r(()=>[a[18]||(a[18]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"bg-gradient"),l(" class to show gradient progress bar. ")],-1)),e("div",V,[s(t,{class:"mb-4"},{default:r(()=>[s(n,{value:15,variant:"primary",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:r(()=>[s(n,{value:25,variant:"success",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:r(()=>[s(n,{value:50,variant:"info",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:r(()=>[s(n,{value:75,variant:"warning",class:"bg-gradient"})]),_:1}),s(t,null,{default:r(()=>[s(n,{value:100,variant:"danger",class:"bg-gradient"})]),_:1})]),a[19]||(a[19]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`
<BProgress :value="15"  class="bg-gradient" variant="primary"></BProgress>

<BProgress :value="25"  class="bg-gradient" variant="success"></BProgress>

<BProgress :value="50"  class="bg-gradient" variant="info"></BProgress>

<BProgress :value="75"  class="bg-gradient" variant="warning"></BProgress>

<BProgress :value="100" class="bg-gradient"  variant="danger"></BProgress>
    `)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Animated Progress"}),s(o,null,{default:r(()=>[a[20]||(a[20]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"animated-progess"),l(" class to show progress with animation. ")],-1)),e("div",D,[s(t,{class:"animated-progress mb-4"},{default:r(()=>[s(n,{value:15,variant:"primary"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:r(()=>[s(n,{value:25,variant:"success"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:r(()=>[s(n,{value:50,variant:"info"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:r(()=>[s(n,{value:75,variant:"warning"})]),_:1}),s(t,{class:"animated-progress"},{default:r(()=>[s(n,{value:100,variant:"danger"})]),_:1})]),a[21]||(a[21]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`
<BProgress animated :value="15" variant="primary"></BProgress>

<BProgress animated :value="25" variant="success"></BProgress>

<BProgress animated :value="50" variant="info"></BProgress>

<BProgress animated :value="75" variant="warning"></BProgress>

<BProgress animated :value="100" variant="danger"></BProgress>
`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Custom Progress"}),s(o,null,{default:r(()=>[a[22]||(a[22]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"animated-progess custom-progess"),l(" class to show custom progress with animation. ")],-1)),e("div",M,[s(t,{class:"animated-progress custom-progress mb-4"},{default:r(()=>[s(n,{value:15,variant:"primary"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:r(()=>[s(n,{value:25,variant:"success"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:r(()=>[s(n,{value:50,variant:"info"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:r(()=>[s(n,{value:75,variant:"warning"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:r(()=>[s(n,{value:100,variant:"danger"})]),_:1})]),a[23]||(a[23]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`
<BProgress animated :value="15" class="custom-progress mb-4" variant="primary"></BProgress>

<BProgress animated :value="25" class="custom-progress mb-4" variant="success"></BProgress>

<BProgress animated :value="50" class="custom-progress mb-4" variant="info"></BProgress>

<BProgress animated :value="75" class="custom-progress mb-4" variant="warning"></BProgress>

<BProgress animated :value="100" class="custom-progress" variant="danger"></BProgress>
`)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Custom Progress with Label"}),s(o,null,{default:r(()=>[a[30]||(a[30]=e("p",{class:"text-muted"},[l(" Use "),e("code",null,"animated-progess custom-progess progress-label"),l(" class to show custom progress with animation and label. ")],-1)),e("div",R,[e("div",T,[a[25]||(a[25]=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-facebook"})])])],-1)),e("div",j,[s(t,{class:"animated-progress custom-progress progress-label"},{default:r(()=>[s(n,{value:15,variant:"primary"},{default:r(()=>[...a[24]||(a[24]=[e("div",{class:"label"},"15%",-1)])]),_:1})]),_:1})])]),e("div",G,[a[27]||(a[27]=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-twitter"})])])],-1)),e("div",I,[s(t,{class:"animated-progress custom-progress progress-label"},{default:r(()=>[s(n,{value:25,variant:"success"},{default:r(()=>[...a[26]||(a[26]=[e("div",{class:"label"},"25%",-1)])]),_:1})]),_:1})])]),e("div",Z,[a[29]||(a[29]=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-github"})])])],-1)),e("div",q,[s(t,{class:"animated-progress custom-progress progress-label"},{default:r(()=>[s(n,{value:30,variant:"info"},{default:r(()=>[...a[28]||(a[28]=[e("div",{class:"label"},"30%",-1)])]),_:1})]),_:1})])])]),a[31]||(a[31]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[l(""),e("code",null,`<div class="d-flex align-items-center pb-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-facebook"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="15" class="custom-progress progress-label" variant="primary">15%</BProgress>
    </div>
</div>`),l(`

`),e("code",null,`<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-twitter"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="25" class="custom-progress progress-label" variant="success">25%</BProgress>
    </div>
</div>`),l(`

`),e("code",null,`<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-github"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="50" class="custom-progress progress-label" variant="info">50%</BProgress>
    </div>
</div>`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),s(v,null,{default:r(()=>[s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Content Progress"}),s(o,null,{default:r(()=>[a[35]||(a[35]=e("p",{class:"text-muted pb-2"}," Example of progress with content wrapped in progress. ",-1)),e("div",F,[s(i,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:r(()=>[s(o,null,{default:r(()=>[...a[32]||(a[32]=[e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-secondary"},"30%"),l(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"1 min left")])],-1)])]),_:1}),s(t,{class:"bg-secondary-subtle rounded-0"},{default:r(()=>[s(n,{value:30,variant:"secondary"})]),_:1})]),_:1}),s(i,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:r(()=>[s(o,null,{default:r(()=>[...a[33]||(a[33]=[e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-success"},"60%"),l(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"45s left")])],-1)])]),_:1}),s(t,{class:"bg-success-subtle rounded-0"},{default:r(()=>[s(n,{value:60,variant:"success"})]),_:1})]),_:1}),s(i,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:r(()=>[s(o,null,{default:r(()=>[...a[34]||(a[34]=[e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-danger"},"82%"),l(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"25s left")])],-1)])]),_:1}),s(t,{class:"bg-danger-subtle rounded-0"},{default:r(()=>[s(n,{value:82,variant:"danger"})]),_:1})]),_:1})]),a[36]||(a[36]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[l(""),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-secondary">30%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">1 min left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="30" class="custom-progress bg-secondary-subtle rounded-0" variant="secondary"></BProgress>
</BCard>`),l(`

`),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-success">60%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">45s left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="60" class="custom-progress bg-success-subtle rounded-0" variant="success"></BProgress>
</BCard>`),l(`

`),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-danger">82%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">25s left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="82" class="custom-progress bg-danger-subtle rounded-0" variant="danger"></BProgress>
</BCard>`)])],-1))]),_:1})]),_:1})]),_:1}),s(u,{xxl:"6"},{default:r(()=>[s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Progress with Steps"}),s(o,null,{default:r(()=>[a[40]||(a[40]=e("p",{class:"text-muted pb-2"}," Here is the example of progress which is represented by steps completion. ",-1)),e("div",J,[e("div",K,[s(t,{style:{"max-height":"1px"}},{default:r(()=>[s(n,{value:50,variant:"primary"})]),_:1}),s(p,{pill:"",variant:"primary",size:"sm",type:"button",class:"position-absolute top-0 start-0 translate-middle",style:{width:"2rem",height:"2rem"}},{default:r(()=>[...a[37]||(a[37]=[l(" 1 ",-1)])]),_:1}),s(p,{pill:"",variant:"primary",size:"sm",type:"button",class:"position-absolute top-0 start-50 translate-middle",style:{width:"2rem",height:"2rem"}},{default:r(()=>[...a[38]||(a[38]=[l(" 2 ",-1)])]),_:1}),s(p,{pill:"",variant:"light",size:"sm",type:"button",class:"position-absolute top-0 start-100 translate-middle",style:{width:"2rem",height:"2rem"}},{default:r(()=>[...a[39]||(a[39]=[l(" 3 ",-1)])]),_:1})])]),a[41]||(a[41]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`<div class="position-relative m-4">
    <div class="progress" style="height: 1px;">
        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <BButton size="sm" variant="primary" class="position-absolute top-0 start-0 translate-middle rounded-pill" style="width: 2rem; height:2rem;">1</BButton>
    <BButton size="sm" variant="primary" class="position-absolute top-0 start-50 translate-middle rounded-pill" style="width: 2rem; height:2rem;">2</BButton>
    <BButton size="sm" variant="light" class="position-absolute top-0 start-100 translate-middlerounded-pill" style="width: 2rem; height:2rem;">3</BButton>
</div>`)])],-1))]),_:1})]),_:1}),s(i,{"no-body":""},{default:r(()=>[s(d,{title:"Step Progress with Arrow"}),s(o,null,{default:r(()=>[a[45]||(a[45]=e("p",{class:"text-muted pb-2"},[l(" Use "),e("code",null,"progress-step-arrow"),l(" class to create step progress with an arrow. ")],-1)),e("div",O,[s(t,{class:"progress-step-arrow progress-info"},{default:r(()=>[s(n,{value:100},{default:r(()=>[...a[42]||(a[42]=[l(" Step 1 ",-1)])]),_:1}),s(n,{value:100},{default:r(()=>[...a[43]||(a[43]=[l(" Step 2 ",-1)])]),_:1}),s(n,{value:100,variant:"light",class:"text-body"},{default:r(()=>[...a[44]||(a[44]=[l(" Step 3 ",-1)])]),_:1})]),_:1})]),a[46]||(a[46]=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[l(""),e("code",null,`
<BProgress class="progress-step-arrow progress-info">
    <BProgress :value="33" variant="primary" >Step 1 <BProgress >
    <BProgress :value="33" variant="primary" >Step 2 <BProgress >
    <BProgress :value="33" variant="light" >Step 3 <BProgress >
</BProgress>
    `)])],-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ps=h(k,[["render",Q]]);export{Ps as default};
