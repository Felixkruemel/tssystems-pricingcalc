<template>
    <div>
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
            <p style="text-align: center">RAM per Node</p>
            <div class="form-input-set">
                <select v-bind:value="apmram" v-on:input="$emit('changeapmram', $event.target.value)" class="form-select" style="background: white">
                    <option value=0.512>
                        <p style="text-align: center">0.512 GB</p>
                    </option> 
                    <option value=1>
                        <p style="text-align: center">1 GB</p>
                    </option>
                    <option value=2>
                        <p style="text-align: center">2 GB</p>
                    </option>
                    <option value=4>
                        <p style="text-align: center">4 GB</p>
                    </option>
                    <option value=8>
                        <p style="text-align: center">8 GB</p>
                    </option>                           
                </select>
            </div>
    </div>        
</template>

<script>
export default {
    name:"eceapmram",
    props: {
        apmram:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>