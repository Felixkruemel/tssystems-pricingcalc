<template>
    <div>
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
        <p style="text-align: center">Number of Nodes</p>
        <div class="form-input-set">
            <select v-bind:value="machinelearninganz" v-on:input="$emit('changemachinelearningnodes', $event.target.value)" class="form-select" style="background: white">
                <option value=0>
                    <p style="text-align: center">0</p>
                </option>
                <option value=1>
                    <p style="text-align: center">1</p>
                </option>
                <option value=2>
                    <p style="text-align: center">2</p>
                </option>
                <option value=3>
                    <p style="text-align: center">3</p>
                </option>                              
            </select>
        </div>
    </div>        
</template>

<script>
export default {
    name:"ecemachinelearningnodes" ,
    props: {
        machinelearninganz:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>