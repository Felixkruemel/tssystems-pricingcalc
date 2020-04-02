<template>
    <div>
        <div class="container-fluid">
            <div class="cont col-xl-12 col-l-12 col-m-hide col-s-hide col-xs-hide" style="padding-left:0px">
                <picture style="opacity:0.3">
                    <source 
                        type="image/webp" 
                        media="(min-width: 2500px)"
                        sizes="width:100% height:5%" 
                        srcset="images/background-image-100.webp 3866w 100h">
                    <source 
                        type="image/webp" 
                        media="(min-width: 1700px)"
                        sizes="width:100% height:5%" 
                        srcset="images/background-image-200.webp 3840w 200h">                    
                    <source 
                        type="image/webp" 
                        media="(min-width: 1025px)"
                        sizes="width:100% height:5%" 
                        srcset="images/background-image-300.webp 3840w 300h">                    
                    <source 
                        type="image/webp" 
                        media="(min-width: 640px)"
                        sizes="width:100% height:5%" 
                        srcset="images/background-image-400.webp 3840w 400h">                      
                    <img 
                        src="images/background-image-200.jpg"
                        sizes="width:100% height:5%">
                </picture>   
                <div class="cent">
                    <h1 style="color: black; font-weight:bold">Price Calculator for the Open Telecom Cloud</h1>
                </div>
            </div>
        
            
        </div>
        <div class="container-fixed">
            <div class="hidden-m hidden-s hidden-xs offset-bottom-10"></div>
            <div class="col-xl-4 col-l-4 col-m-hide col-s-hide col-xs-hide">
              <h3>On this site you can calculate prices for different Services from the Open Telekom Cloud.</h3>
            </div>
            <div class="col-xl-2 col-l-2 col-m-hide col-s-hide col-xs-hide"></div>
            <div class="col-xl-hide col-l-6 col-m-hide col-s-hide col-xs-hide">
              <picture>
                <source 
                  type="image/webp"
                  sizes="25vw" 
                  srcset="images/calculator.webp 800w 648h">
                <img 
                  src="images/calculator.jpg">
              </picture> 
            </div>
            <div class="col-xl-6 col-l-hide col-m-hide col-s-hide col-xs-hide">
              <picture>
                <source 
                  type="image/webp"
                  sizes="15vw" 
                  srcset="images/calculator.webp 800w 648h">
                <img 
                  src="images/calculator.jpg">
              </picture> 
            </div>
            <div class="hidden-xl hidden-l">
              <h3>On this site you can calculate prices for different Services from the Open Telekom Cloud.</h3>
              <picture class="h-ctr">
                <source 
                  type="image/webp"
                  sizes="50vw" 
                  srcset="images/calculator.webp 800w 648h">
                <img 
                  src="images/calculator.jpg">
              </picture> 
            </div>

            

            <div class="col-xl-4 col-l-4 col-m-hide col-s-hide col-xs-hide">
              <div class="hidden-m hidden-s hidden-xs offset-bottom-5"></div>
              <h3>To choose a service click on the "Services" button in the navigation bar and select your service.</h3>
            </div>
            <div class="col-xl-1 col-l-1 col-m-hide col-s-hide col-xs-hide"></div>
            <div class="col-xl-7 col-l-hide col-m-hide col-s-hide col-xs-hide">
              <div class="hidden-m hidden-s hidden-xs offset-bottom-5"></div>
              <picture class="h-ctr">
                <source 
                  type="image/webp"
                  sizes="45vw" 
                  srcset="images/tutorial.webp 1590w">
                <img 
                  src="images/tutorial.jpg">
              </picture> 
            </div>
            <div class="col-xl-hide col-l-7 col-m-hide col-s-hide col-xs-hide">
              <div class="hidden-m hidden-s hidden-xs offset-bottom-5"></div>
              <picture class="h-ctr">
                <source 
                  type="image/webp"
                  sizes="50vw" 
                  srcset="images/tutorial.webp 1590w">
                <img 
                  src="images/tutorial.jpg">
              </picture> 
            </div>
            <div class="hidden-xl hidden-l hidden-s hidden-xs">
              <h3>To choose a service click on the "Services" button in the navigation bar and select your service.</h3>
              <picture class="h-ctr">
                <source 
                  type="image/webp"
                  sizes="90vw" 
                  srcset="images/tutorial.webp 1590w">
                <img 
                  src="images/tutorial.jpg">
              </picture>
            </div>
            <div class="hidden-xl hidden-l hidden-m">
              <h3>To choose a service open the navigation bar and click on the "Services" button and select your service.</h3>
            </div>
        </div>  
    </div>    
     
</template>


<script>
export default {
    name:"index" ,
    props: {

    },
    data () {
      return {
         
      }
    },
    
}
</script>

<style>
/* Container holding the image and the text */
.cont {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bleft {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.tleft {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.tright {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bright {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.cent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>