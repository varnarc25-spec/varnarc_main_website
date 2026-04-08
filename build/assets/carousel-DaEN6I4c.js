import{Z as h,j as _,r as n,o as C,c as I,w as o,a as e,f as s,d as t}from"./app-fsFq5O5E.js";import{L as B}from"./main-BZVvTibW.js";import{P as w}from"./page-header-uZS0X-3C.js";import{C as b}from"./card-header-MYlQC-iD.js";import{_ as k}from"./img-1-wvaBzu5f.js";import{_ as y}from"./img-2-DibOi71G.js";import{_ as x}from"./img-3-CIcZ1uiw.js";import{_ as S}from"./img-4-DzfUI5iz.js";import{_ as D}from"./img-5-B-7U_fBk.js";import{_ as T}from"./img-6-BD4vy7Jc.js";import{_ as H}from"./img-7-CNSoCYn4.js";import{_ as W}from"./img-8-gBR2IU71.js";import{_ as U}from"./img-9-BdPhDzoj.js";import{_ as L}from"./img-10-UBZX-3gh.js";import{_ as V}from"./img-11-D_BohZZJ.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-wxzmoIFt.js";import"./simplebar-vue.esm-ig1_LfHR.js";import"./logo-sm-Du8Of0Sj.js";import"./logo-dark-Dh5pZxEJ.js";import"./logo-light-DJkTuO8P.js";import"./avatar-2-86M8S3El.js";import"./avatar-3-C_5WlMir.js";import"./avatar-5-DXW8GA-H.js";import"./russia-DqU8AKV7.js";import"./avatar-8-DqJ4kEa5.js";import"./avatar-6-Bb_p0Nhs.js";import"./bell-Dwr83Hdp.js";import"./prism-DwEqob8u.js";const G={data(){return{Img1:k,Img2:y,Img3:x,Img4:S,Img5:D,Img6:T,Img7:H,Img8:W,Img9:U,Img10:L,Img11:V}},components:{Layout:B,PageHeader:w,CardHeader:b,Link:_,Head:h}},N={class:"live-preview"},P={class:"live-preview"},j={class:"live-preview"},q={class:"live-preview"},O={class:"live-preview"},R={class:"live-preview"},Y={class:"live-preview"},Z={class:"live-preview"};function z(E,l,F,J,i,K){const p=n("Head"),f=n("PageHeader"),a=n("CardHeader"),r=n("BCarouselSlide"),c=n("BCarousel"),d=n("BCardBody"),u=n("BCard"),m=n("BCol"),g=n("BRow"),v=n("Layout");return C(),I(v,null,{default:o(()=>[e(p,{title:"Carousel"}),e(f,{title:"Carousel",pageTitle:"Base UI"}),e(g,null,{default:o(()=>[e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"Slides Only"}),e(d,null,{default:o(()=>[l[0]||(l[0]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"slide"),t(" class to set carousel with slides. Note the presence of the "),s("code",null,"d-block"),t(" and "),s("code",null,"w-100"),t(" class on carousel images to prevent browser default image alignment. ")],-1)),s("div",N,[e(c,{interval:2e3,ride:"carousel",class:"carousel slide"},{default:o(()=>[e(r,{active:"","img-src":i.Img1},null,8,["img-src"]),e(r,{"img-src":i.Img2},null,8,["img-src"]),e(r,{"img-src":i.Img3},null,8,["img-src"])]),_:1})]),l[1]||(l[1]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Slides Only -->
  <BCarousel :interval="2000" class="carousel slide">
    <BCarouselSlide active :img-src="Img1" />
    <BCarouselSlide :img-src="Img2" />
    <BCarouselSlide :img-src="Img3" />
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1}),e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"With Controls"}),e(d,null,{default:o(()=>[l[2]||(l[2]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-control-prev"),t(" and "),s("code",null,"carousel-control-next"),t(" class with <button> or <a> tag element to show carousel with control navigation. ")],-1)),s("div",P,[e(c,{class:"carousel slide",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(r,{active:"","img-src":i.Img4},null,8,["img-src"]),e(r,{"img-src":i.Img5},null,8,["img-src"]),e(r,{"img-src":i.Img6},null,8,["img-src"])]),_:1})]),l[3]||(l[3]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- With Controls -->
  <BCarousel class="carousel slide" :interval="2000" controls>
    <BCarouselSlide active :img-src="Img4" />
    <BCarouselSlide :img-src="Img5" />
    <BCarouselSlide :img-src="Img6" />
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"with Indicators"}),e(d,null,{default:o(()=>[l[4]||(l[4]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-indicators"),t(" class with <ol> element to show carousel with indicators. ")],-1)),s("div",j,[e(c,{class:"carousel slide",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(r,{active:"","img-src":i.Img3},null,8,["img-src"]),e(r,{"img-src":i.Img2},null,8,["img-src"]),e(r,{"img-src":i.Img1},null,8,["img-src"])]),_:1})]),l[5]||(l[5]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- With Indicators -->
  <BCarousel class="carousel slide" :interval="2000" controls indicators>
    <BCarouselSlide active :img-src="Img3" />
    <BCarouselSlide :img-src="Img2" />
    <BCarouselSlide :img-src="Img1" />
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1}),e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"with Captions"}),e(d,null,{default:o(()=>[l[9]||(l[9]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-caption"),t(" class to add captions to the carousel. ")],-1)),s("div",q,[e(c,{class:"carousel slide",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(r,{active:"","img-src":i.Img7},{default:o(()=>[...l[6]||(l[6]=[s("h5",{class:"text-white"},"Sunrise above a beach",-1),s("p",{class:"text-white-50"}," You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. ",-1)])]),_:1},8,["img-src"]),e(r,{"img-src":i.Img2},{default:o(()=>[...l[7]||(l[7]=[s("h5",{class:"text-white"},"Working from home little spot",-1),s("p",{class:"text-white-50"}," Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent. ",-1)])]),_:1},8,["img-src"]),e(r,{"img-src":i.Img9},{default:o(()=>[...l[8]||(l[8]=[s("h5",{class:"text-white"}," Dramatic clouds at the Golden Gate Bridge ",-1),s("p",{class:"text-white-50"}," Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter. ",-1)])]),_:1},8,["img-src"])]),_:1})]),l[10]||(l[10]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup",style:{height:"375px"}},[t(""),s("code",null,`<!-- With Captions -->
  <BCarousel class="carousel slide" :interval="2000" controls indicators>
    <BCarouselSlide active :img-src="Img7">
      <h5 class="text-white">Sunrise above a beach</h5>
      <p class="text-white-50">
        You've probably heard that opposites attract. The same
        is true for fonts. Don't be afraid to combine font
        styles that are different but complementary.
      </p>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img2">
      <h5 class="text-white">Working from home little spot</h5>
      <p class="text-white-50">
        Consistency piques people’s interest is that it has
        become more and more popular over the years, which is
        excellent.
      </p>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img9">
      <h5 class="text-white">
        Dramatic clouds at the Golden Gate Bridge
      </h5>
      <p class="text-white-50">
        Increase or decrease the letter spacing depending on the
        situation and try, try again until it looks right, and
        each letter.
      </p>
    </BCarouselSlide>
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"Crossfade Animation"}),e(d,null,{default:o(()=>[l[11]||(l[11]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-fade"),t(" class to the carousel to animate slides with a fade transition instead of a slide. ")],-1)),s("div",O,[e(c,{class:"carousel slide carousel-fade",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(r,{active:"","img-src":i.Img1},null,8,["img-src"]),e(r,{"img-src":i.Img2},null,8,["img-src"]),e(r,{"img-src":i.Img3},null,8,["img-src"])]),_:1})]),l[12]||(l[12]=s("div",{class:"d-none code-view"},[s("pre",null,[t(""),s("code",{class:"language-markup"},`
<!-- With Crossfade Animation -->
<BCarousel class="carousel slide carousel-fade" controls indicators>
  <BCarouselSlide active :img-src="Img1" />
  <BCarouselSlide :img-src="Img2" />
  <BCarouselSlide :img-src="Img3" />
</BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1}),e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"Individual carousel-item Interval"}),e(d,null,{default:o(()=>[l[13]||(l[13]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,'data-bs-interval=" "'),t(" to a carousel-item to change the amount of time to delay between automatically cycling to the next item. ")],-1)),s("div",R,[e(c,{class:"carousel slide",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(r,{active:"","img-src":i.Img1},null,8,["img-src"]),e(r,{"img-src":i.Img11},null,8,["img-src"]),e(r,{"img-src":i.Img10},null,8,["img-src"])]),_:1})]),l[14]||(l[14]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Individual Slide -->
  <BCarousel class="carousel slide" :interval="2000" controls>
    <BCarouselSlide active :img-src="Img1" />
    <BCarouselSlide :img-src="Img11" />
    <BCarouselSlide :img-src="Img10" />
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"Disable Touch Swiping"}),e(d,null,{default:o(()=>[l[15]||(l[15]=s("p",{class:"text-muted"},[t(" Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the "),s("code",null,"data-bs-touch"),t(" attribute. The example below also does not include the "),s("code",null,"data-bs-ride attribute"),t(" and has "),s("code",null,'data-bs-interval="false"'),t(" so it doesn’t autoplay. ")],-1)),s("div",Y,[e(c,{class:"carousel slide",interval:2e3,controls:"","no-touch":"true"},{default:o(()=>[e(r,{active:"","img-src":i.Img9},null,8,["img-src"]),e(r,{"img-src":i.Img8},null,8,["img-src"]),e(r,{"img-src":i.Img7},null,8,["img-src"])]),_:1})]),l[16]||(l[16]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Disable Touch Swiping -->
  <BCarousel class="carousel slide" :interval="2000" controls no-touch="true">
    <BCarouselSlide active :img-src="Img9" />
    <BCarouselSlide :img-src="Img8" />
    <BCarouselSlide :img-src="Img7" />
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1}),e(m,{xl:"6"},{default:o(()=>[e(u,{"no-body":""},{default:o(()=>[e(a,{title:"Dark Variant"}),e(d,null,{default:o(()=>[l[20]||(l[20]=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-dark"),t(" class to the carousel for darker controls, indicators, and captions. ")],-1)),s("div",Z,[e(c,{class:"carousel slide carousel-dark",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(r,{active:"","img-src":i.Img4},{default:o(()=>[...l[17]||(l[17]=[s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Drawing a sketch"),s("p",null," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. ")],-1)])]),_:1},8,["img-src"]),e(r,{"img-src":i.Img5},{default:o(()=>[...l[18]||(l[18]=[s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Blue clock on a pastel background"),s("p",null," In some designs, you might adjust your tracking to create a certain artistic effect asked them what graphic design tips they live. ")],-1)])]),_:1},8,["img-src"]),e(r,{"img-src":i.Img6},{default:o(()=>[...l[19]||(l[19]=[s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Working at a coffee shop"),s("p",null," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring. ")],-1)])]),_:1},8,["img-src"])]),_:1})]),l[21]||(l[21]=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup",style:{height:"375px"}},[t(""),s("code",null,`<!-- Dark Variant -->
  <BCarousel class="carousel slide carousel-dark" :interval="10000" controls>
    <BCarouselSlide active :img-src="Img4">
      <div class="carousel-caption d-none d-md-block">
        <h5>Drawing a sketch</h5>
        <p>
          Too much or too little spacing, as in the example below,
          can make things unpleasant for the reader.
        </p>
      </div>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img5">
      <div class="carousel-caption d-none d-md-block">
        <h5>Blue clock on a pastel background</h5>
        <p>
          In some designs, you might adjust your tracking to
          create a certain artistic effect asked them what graphic
          design tips they live.
        </p>
      </div>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img6">
      <div class="carousel-caption d-none d-md-block">
        <h5>Working at a coffee shop</h5>
        <p>
          A wonderful serenity has taken possession of my entire
          soul, like these sweet mornings of spring.
        </p>
      </div>
    </BCarouselSlide>
  </BCarousel>
`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ye=A(G,[["render",z]]);export{ye as default};
