<template>
    <div>
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
            <p style="text-align: center">RAM/DISK Ratio</p>
            <div class="form-input-set">
                <select v-bind:value="elasticramratio" v-on:input="$emit('changeelasticramratio', $event.target.value)" class="form-select" style="background: white">
                    <option value=16>
                        <p style="text-align: center">16</p>
                    </option>
                    <option value=32>
                        <p style="text-align: center">32</p>
                    </option>
                    <option value=48>
                        <p style="text-align: center">48</p>
                    </option>
                    <option value=64>
                        <p style="text-align: center">64</p>
                    </option>                               
                </select>
            </div>
    </div>        
</template>

<script>
export default {
    name:"eceelasticramratio" ,
    props: {
        elasticramratio:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>