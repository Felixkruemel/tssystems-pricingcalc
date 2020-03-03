<template>
    <div> 
        <p style="text-align: center">Count of FTE</p>
        <div class="form-input-set" style="background: white">
            <input v-bind:value="supportcount" v-on:input="$emit('changesupportcount', $event.target.value)" type="number" class="form-input">
        </div>
    </div>    
</template>

<script>
export default {
    name:"ecesupport" ,
    props: {
        supportcount:Number,
    },
    data () {
      return {
        
      }
    },
    
}
</script>