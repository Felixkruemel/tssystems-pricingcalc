<template>
    <div>
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
        <h4 style="color:#E20074; text-align: center">Data</h4>
            <div class="col-l-4">
                <p style="text-align: center">Data/day (GB)</p>
                <div class="form-input-set" style="background: white">
                    <input v-bind:value="dataday" v-on:input="$emit('changedataday', $event.target.value)" type="number" class="form-input">
                </div>
            </div>
            <div class="col-l-4">
                <p style="text-align: center">Replikas</p>
                <div class="form-input-set" style="background: white">
                    <input v-bind:value="datareplikas" v-on:input="$emit('changedatareplikas', $event.target.value)" type="number" class="form-input">
                </div>
            </div>
            <div class="col-l-4">
                <p style="text-align: center">Retention (days)</p>
                <div class="form-input-set" style="background: white">
                    <input v-bind:value="dataretention" v-on:input="$emit('changedataretention', $event.target.value)" type="number" class="form-input">
                </div>
            </div>
            <h4 style="text-align: center">Needed disk capacity: {{datacapacity}} GB</h4> 
        </div>    
</template>

<script>
export default {
    name:"ecedata" ,
    props: {
        dataday:Number,
        datareplikas:Number,
        dataretention:Number,
        datacapacity:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>