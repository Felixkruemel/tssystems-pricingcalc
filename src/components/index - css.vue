<template>
    <div>
        <div class="hero-image">
            <div class="text">
                <h1 style="color:black; font-weight:bold">Price Calculator for the Open Telecom Cloud</h1>
            </div> 
        </div>
        <div class="container-fixed">
            <h3>To start you can select a Service in the "Services" Menu</h3>
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
         picture: `
            <picture style="opacity:0.4">
                <source 
                    type="image/webp" 
                    sizes="width:100% height:12%" 
                    srcset="images/background-image-200.webp 3840w 200h">
                <img 
                    src="images/background-image-200.jpg" 3840w 200h
                    sizes="width:100% height:12%">
            </picture>    
         ` 
      }
    },
    
}
</script>

<style>
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  
  background-image: url("../../public/images/background-image-200.jpg");
  background-image: url("../../public/images/background-image-200.webp");
  /* Set a specific height */
  height: 12%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>