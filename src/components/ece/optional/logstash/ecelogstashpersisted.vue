<template>
    <div> 
        <p style="text-align: center">Persisted Queue (GB)</p>
        <div class="form-input-set" style="background: white">
            <input v-bind:value="logstashpersistedqueue" v-on:input="$emit('changelogstashpersistedqueue', $event.target.value)" type="number" class="form-input">
        </div>
    </div>    
</template>

<script>
export default {
    name:"ecedata" ,
    props: {
        logstashpersistedqueue:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>