<template>
  <main @mouseover="chapterThreeSC">
    <div>
      <div class="flex flex-col items-center content-center justify-center">
        <ChapterImageHero
          class="w-full"
          :chapterNumber="sectionOneHero.chapterNumber"
          :chapterTitle="sectionOneHero.chapterTitle"
                :chapterFirstParagraph="sectionOneHero.chapterFirstParagraph"
          :chapterSecondParagraph="sectionOneHero.chapterSecondParagraph"
        />

<div class="iframe-container">

          <iframe
          src="/Images/c1/sectionOne/video.html"
          width="1900"
          height="4000"
align="center"
        ></iframe>

        </div>


   <ChapterImageHero
          class="w-full"
       
          :sectionNumber="sectionOneHero.sectionNumber"
          :sectionTitle="sectionOneHero.sectionTitle"
          :divId="sectionOneHero.divId"
   
        />

        
        <IntroSection
          :roleOne="s1.roleOne"
          :roleOneName="s1.roleOneName"
          :roleTwo="s1.roleTwo"
          :roleTwoName="s1.roleTwoName"
          :roleThree="s1.roleThree"
          :roleThreeName="s1.roleThreeName"
        >
          <Slidersix class="hidden sm:block" />
          <Slidersixm class="block sm:hidden" />

          <nuxt-content :document="s1" />
        </IntroSection>

        <!-- VIDEO -->

        <!-- <VideoPlayer videoSrc="/Images/c1/sectionOne/video.mp4" /> -->
        <!--
        <div
          v-observe-visibility="visibilityChanged"
          class="relative z-40 flex items-center content-center justify-center"
        >
          <video
            preload="metadata"
            class="w-screen bluur"
            ref="interview"
            autoplay="autoplay"
            loop
            muted
          >
            <source src="/Images/c1/sectionOne/video.mp4" type="video/mp4" />
          </video>
        </div>
-->

      
      
        <!-- END OF VIDEO -->

        <SectionText class="mt-10">
          <nuxt-content :document="s11" />
        </SectionText><br />
                <img src="/Images/c1/sectionOne/LinaMonzer_art1.jpg" width="950" />

        <SectionText class="mt-5">
          <nuxt-content :document="s12" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s13" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s14" />
        </SectionText>
<br />
                        <img src="/Images/c1/sectionOne/LinaMonzer_art2.jpg" width="950" />

        <SectionText class="mt-5 mb-5">
          <nuxt-content :document="s15" />
        </SectionText>


        <SectionText class="mt-5">
          <nuxt-content :document="s16" />
        </SectionText>
        <SectionText class="mt-5">
          <nuxt-content :document="s17" />
        </SectionText>


        <SectionText class="mt-5">
          <nuxt-content :document="s18" />
        </SectionText>

        <sectionImageHero
          class="w-full mt-12"
         
          
          :sectionNumber="sectionTwoHero.sectionNumber"
          :sectionTitle="sectionTwoHero.sectionTitle"
          :sectionSubTitle="sectionTwoHero.sectionSubTitle"
          :divId="sectionTwoHero.divId"
          :imageSource="sectionTwoHero.imageSource"
        />


      <IntroSection
          :roleOne="s21.roleOne"
          :roleOneName="s21.roleOneName"
          :roleTwo="s21.roleTwo"
          :roleTwoName="s21.roleTwoName"
          :roleThree="s21.roleThree"
          :roleThreeName="s21.roleThreeName"
        >
     
        </IntroSection>




        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s19" />
        </SectionText>

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s21" />
        </SectionText>

  

        <!--
        <video class="w-full" autoplay="autoplay" loop>
          <!-- <source src="/Images/c1/sectionOne/video.mp4.houssam" type="video/mp4" /> -->
        </video> -->

        <!-- <iframe
          v-if="loaded"
          src="/Images/c1/sectionOne/video.html"
          class="w-full h-auto mt-3"
          :height="iframe.style.height"
          :width="iframe.style.width"
          frameborder="0"
        ></iframe> -->

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s22" />
        </SectionText>

          <iframe
          src="/Images/c1/sectionFour/passages.html"
          width="1900"
          height="2200"

        ></iframe>

        <sectionImageHero
          class="w-full mt-12"
          
          :sectionNumber="sectionThreeHero.sectionNumber"
          :sectionTitle="sectionThreeHero.sectionTitle"
          :sectionSubTitle="sectionThreeHero.sectionSubTitle"
          :divId="sectionThreeHero.divId"
          :imageSource="sectionThreeHero.imageSource"
        />

      <IntroSection
          :roleOne="s23.roleOne"
          :roleOneName="s23.roleOneName"
          :roleTwo="s23.roleTwo"
          :roleTwoName="s23.roleTwoName"
          :roleThree="s23.roleThree"
          :roleThreeName="s23.roleThreeName"
        >
     
        </IntroSection>



        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s23" />
        </SectionText>
        <img src="/Images/c1/sectionThree/hanger_.jpg" width="950"  />


        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s24" />
        </SectionText>
        <img src="/Images/c1/sectionThree/ashtray_.jpg" width="950"  />

     <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s241" />
        </SectionText>


        <sectionImageHero
          class="w-full mt-12"
    
          :sectionNumber="sectionFourHero.sectionNumber"
          :sectionTitle="sectionFourHero.sectionTitle"
          :sectionSubTitle="sectionFourHero.sectionSubTitle"
          :divId="sectionFourHero.divId"
          :imageSource="sectionFourHero.imageSource"
        />



      <IntroSection
          :roleOne="s25.roleOne"
          :roleOneName="s25.roleOneName"
          :roleTwo="s25.roleTwo"
          :roleTwoName="s25.roleTwoName"
          :roleThree="s25.roleThree"
          :roleThreeName="s25.roleThreeName"
        >
     
        </IntroSection>



        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s25" />
        </SectionText>
                <img src="/Images/c1/sectionOne/maya-1.jpeg" class="w-full h-auto mt-3" />

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s26" />
        </SectionText>

                <img src="/Images/c1/sectionOne/maya-2.jpeg" class="w-full h-auto mt-3" />

        <sectionImageHero
          class="w-full mt-12"
       
          :sectionNumber="sectionFiveHero.sectionNumber"
          :sectionTitle="sectionFiveHero.sectionTitle"
          :sectionSubTitle="sectionFiveHero.sectionSubTitle"
          :divId="sectionFiveHero.divId"
          :imageSource="sectionFiveHero.imageSource"
        />

           <IntroSection
          :roleOne="s27.roleOne"
          :roleOneName="s27.roleOneName"
          :roleTwo="s27.roleTwo"
          :roleTwoName="s27.roleTwoName"
          :roleThree="s27.roleThree"
          :roleThreeName="s27.roleThreeName"
        >
     
        </IntroSection>

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s27" />
        </SectionText>
<div align="center">
                <img src="/Images/c1/sectionFive/YaraNakhle1_.jpg" />
</div>

  

        <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s28" />
        </SectionText>
      </div> 
      <div align="center">

        <img src="/Images/c1/sectionFive/YaraNakhle2_.jpg" />
</div>
            <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s29" />
        </SectionText>
      </div>
      <div align="center">

        <img src="/Images/c1/sectionFive/YaraNakhle3_.jpg" />
</div>
            <SectionText class="mt-5 mb-16">
          <nuxt-content :document="s30" />
        </SectionText>
      </div>

      <div class="z-50 flex flex-row items-center justify-between">
        <div>
          <nuxt-link
            v-if="chapternav > 5000"
            :class="chapternav ? 'block' : 'hidden'"
            :to="localePath('/chapterfour#blackandwhite')"
            style="z-index: 1000"
            class="flex items-center ml-2 stickynav"
          >
            <div
              :class="
                chapternav < 29190
                  ? '   text-white bg-black '
                  : ' text-black bg-white shadow-2xl '
              "
              class="
                flex
                items-center
                content-center
                justify-center
                w-20
                h-20
                mt-2
                text-sm text-center
                rounded-full
                font-nassimBold
              "
            >
              <span v-if="this.$i18n.locale === 'ar'">اذهب للفصل التالي</span>
              <span v-if="this.$i18n.locale === 'en'">
                Go to next chapter
              </span>
            </div>
          </nuxt-link>
        </div>

        <div v-if="this.$i18n.locale === 'ar'">
          <nuxt-link
            v-if="chapternav > 2000"
            :class="chapternav ? 'block' : 'hidden'"
            :to="{ path: '/chapterthree', hash: 'family' }"
            exact
            class="z-50 stickyscroll"
          >
            <svg
              class="w-10 mb-5"
              version="1.1"
              viewBox="0 0 24 14"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M542.687,1212.29l-10.942,-11.98c-0.21,-0.21 -0.487,-0.3 -0.761,-0.28c-0.273,-0.02 -0.55,0.07 -0.76,0.28l-10.943,11.98c-0.391,0.4 -0.391,1.03 0,1.43c0.393,0.39 1.029,0.39 1.42,0l10.283,-11.26l10.284,11.26c0.391,0.39 1.027,0.39 1.419,0c0.392,-0.4 0.392,-1.03 0,-1.43"
                transform="matrix(1,0,0,1,-519,-1200)"
                fill-rule="evenodd"
                fill="#000"
                stroke="none"
              />
            </svg>
          </nuxt-link>
        </div>

        <div v-if="this.$i18n.locale === 'en'">
          <nuxt-link
            v-if="chapternav > 4500"
            :class="chapternav ? 'block' : 'hidden'"
            :to="{ path: '/en/chapterthree', hash: 'family' }"
            exact
            class="z-50 stickyscroll"
          >
            <svg
              class="w-10 mb-5"
              version="1.1"
              viewBox="0 0 24 14"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M542.687,1212.29l-10.942,-11.98c-0.21,-0.21 -0.487,-0.3 -0.761,-0.28c-0.273,-0.02 -0.55,0.07 -0.76,0.28l-10.943,11.98c-0.391,0.4 -0.391,1.03 0,1.43c0.393,0.39 1.029,0.39 1.42,0l10.283,-11.26l10.284,11.26c0.391,0.39 1.027,0.39 1.419,0c0.392,-0.4 0.392,-1.03 0,-1.43"
                transform="matrix(1,0,0,1,-519,-1200)"
                fill-rule="evenodd"
                fill="#000"
                stroke="none"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData(context) {
    const { $content, app } = context
    const sectionOneHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/hero`
    ).fetch()

    const sectionTwoHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/hero`
    ).fetch()

    const sectionThreeHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/hero`
    ).fetch()

    const sectionFourHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/hero`
    ).fetch()

    const sectionFiveHero = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/hero`
    ).fetch()

    const s1 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/001`
    ).fetch()

    const s11 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/002`
    ).fetch()

    const s12 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/003`
    ).fetch()

    const s13 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/004`
    ).fetch()

    const s14 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/005`
    ).fetch()

    const s15 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/006`
    ).fetch()

    const s16 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/007`
    ).fetch()

    const s17 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/008`
    ).fetch()

    const s18 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/009`
    ).fetch()

    const s19 = await $content(
      `${app.i18n.locale}/chapterThree/sectionOne/010`
    ).fetch()

    const s21 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/001`
    ).fetch()
    const s22 = await $content(
      `${app.i18n.locale}/chapterThree/sectionTwo/002`
    ).fetch()

    const s23 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/001`
    ).fetch()

    const s24 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/002`
    ).fetch()


    const s241 = await $content(
      `${app.i18n.locale}/chapterThree/sectionThree/003`
    ).fetch()

    const s25 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/001`
    ).fetch()

    const s26 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFour/002`
    ).fetch()

    const s27 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/001`
    ).fetch()

    const s28 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/002`
    ).fetch()

        const s29 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/003`
    ).fetch()

        const s30 = await $content(
      `${app.i18n.locale}/chapterThree/sectionFive/004`
    ).fetch()

    return {
      sectionOneHero,
      sectionTwoHero,
      sectionThreeHero,
      sectionFourHero,
      sectionFiveHero,
      s1,
      s11,
      s12,
      s13,
      s14,
      s15,
      s16,
      s17,
      s18,
      s19,
      s21,
      s22,
      s23,
      s24,
      s241,
      s25,
      s26,
      s27,
      s28,
      s29,
      s30
    }
  },

  data() {
    return {
      chapternav: 0,

      currentZoomer: true,
      zoomerSession: false,
    }
  },

  methods: {
    ...mapMutations([
      'chapterThreeSC', //also supports payload `this.nameOfMutation(amount)`
    ]),
    handleScroll() {
      this.chapternav = window.scrollY
    },
  },
  mounted() {
    setInterval(() => {
      if (!this.zoomerSession) {
        this.currentZoomer = !this.currentZoomer
      }
    }, 5000)
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style>
.lightboxcontainer {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.lightboxgallery {
  display: flex;
}

.lightboxgallery {
  cursor: pointer;
}

.stickynav {
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.stickyscroll {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 0;
  opacity: 100;
  z-index: 2;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.modal-content {
  height: 100%;
  top: 0%;
  width: 90%;
  left: 5%;
  text-align: CENTER;
}
.modal-content iframe {
  width: 100%;
  height: 100%;
}
span.close {
  /*float: right; */
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  /* text-shadow: 0 1px 0 #fff; */
  filter: alpha(opacity=20);
  opacity: 0.2;
  position: absolute;
  border-radius: 50%;
  background: #000;
  width: 25px;
  right: -9px;
  top: -14px;
  height: 25px;
  opacity: 1;
}

.container1 {
  position: relative;
  /*width: 100%;*/
}
.container1 video {
  position: absolute;
  /*width: 100%;*/
  z-index: -1;
}
.modal {
  top: 0;
  bottom: 0;
  padding: 30px 0;
}
#videoModal :after {
  position: fixed;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -2;
}

#videoModal:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
  z-index: -1;
}

#video-overlay {
  width: 10%;
  height: 30%;
  background-color: #988969;
  z-index: 1;
  position: absolute;

  opacity: 0;
}
</style>


<style>
  .iframe-container {
		text-align:center;
  		width:100%;
  }
</style>