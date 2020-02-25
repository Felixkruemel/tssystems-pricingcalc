<template>
    <div class="col-l-12 col-m-12 col-s-12 col-xs-emphased">
        <p class="hidden-xl hidden-l hidden-m"></p>
        <p class="hidden-xl hidden-l hidden-m"></p> 
        <h4 style="color:#E20074; text-align: center">Elastic</h4>
            <div class="col-l-4">
                <p style="text-align: center">Number of Nodes</p>
                <div class="form-input-set">
                    <select v-bind:value="elasticanz" v-on:input="$emit('changeelasticnodes', $event.target.value)" class="form-select" style="background: white">
                        <option value="elasticanz1">
                            <p style="text-align: center">1</p>
                        </option>
                        <option value="elasticanz2">
                            <p style="text-align: center">2</p>
                        </option>
                        <option value="elasticanz3">
                            <p style="text-align: center">3</p>
                        </option>
                        <option value="elasticanz4">
                            <p style="text-align: center">4</p>
                        </option>    
                        <option value="elasticanz5">
                            <p style="text-align: center">5</p>
                        </option>    
                        <option value="elasticanz6">
                            <p style="text-align: center">6</p>
                        </option>                                            
                    </select>
                </div>
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