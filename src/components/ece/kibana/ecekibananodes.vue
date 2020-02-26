<template>
    <div>
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
        <p style="text-align: center">Number of Nodes</p>
        <div class="form-input-set">
            <select v-bind:value="elasticanz" v-on:input="$emit('changeelasticnodes', $event.target.value)" class="form-select" style="background: white">
                <option value=1>
                    <p style="text-align: center">1</p>
                </option>
                <option value=2>
                    <p style="text-align: center">2</p>
                </option>
                <option value=3>
                    <p style="text-align: center">3</p>
                </option>
                <option value=4>
                    <p style="text-align: center">4</p>
                </option>    
                <option value=5>
                    <p style="text-align: center">5</p>
                </option>    
                 <option value=6>
                    <p style="text-align: center">6</p>
                </option>                                            
            </select>
        </div>
    </div>        
</template>

<script>
export default {
    name:"eceelasticnodes" ,
    props: {
        elasticanz:String,
    },
    data () {
      return {
        
      }
    },
    
}
</script>