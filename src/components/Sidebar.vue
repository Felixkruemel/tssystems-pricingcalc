<template>
    <div class="container-fixed">
        <div class="row" > 
            <div class="col-l-2 col-m-12" style="border-right-style: solid; border-color: #d9d9d9; border-width: 1px; border-bottom-style: solid">
                <h2 style="color:#E20074; text-align: center"><strong>Services</strong></h2>
            </div>
        </div>    
        <div class="row">
            <div class="col-l-2 col-m-12" style="border-right-style: solid; border-color: #d9d9d9; border-width: 1px">
                <div class="content-list" id="content-buttons">
                    <a class="content-list-item" v-on:click="$emit('showece')" v-bind:class="{ 'content-list-item-brand': selectedece }">
                        <p style="text-align: center">ECE</p>
                    </a>
                    <a class="content-list-item">
                        <p style="text-align: center">Anwendung2</p>
                    </a>                    
                </div>
                
            </div>
        </div>
    </div>    
</template>


<script>
export default {
    name:"sidebar" ,
    props: {
        selectedece: Boolean,
    },
    data () {
      return {
          
      }
    },
    
}
</script>