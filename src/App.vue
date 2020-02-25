<template>
  <div id="app" class="container-fluid">
    <headerbrand v-on:showece="vueshowece"></headerbrand>
    <div class="container-fixed">
      <div class="col-l-2 col-m-3 col-s-hide col-xs-hide">
        <sidebar v-on:showece="vueshowece" v-bind:selectedece="selectedece"></sidebar>
      </div>
      <div class="col-xl-1 col-l-1 col-m-1 col-s-hide col-xs-hide"></div>

      <!-- Start Implementation of all ECE containers -->
      <div v-if="selectedece" class="col-xl-9 col-l-9 col-m-8 col-s-12 col-xs-12" >
        <div class="col-l-12 col-m-12 col-s-hide col-xs-hide"  style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px">
          <h2 style="color:#E20074; text-align: center"><strong>Options</strong></h2>
        </div>
        <div class="col-xl-hide col-l-hide col-m-hide col-s-12 col-xs-12">
          <h4 style="color:#E20074; text-align: center"><strong>Options</strong></h4>
        </div>
          <ecedata v-bind:datacapacity="datacapacity" v-bind:dataday="dataday" v-bind:datareplikas="datareplikas" v-bind:dataretention="dataretention" v-on:changedataday="vuedataday" v-on:changedatareplikas="vuedatareplikas" v-on:changedataretention="vuedataretention" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></ecedata>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <eceelasticnodes style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></eceelasticnodes>     
      </div>
      <!-- End of Implentation of all ECE containers -->


    </div>

    
  </div>
</template>

<script>
 // var showece=false;
  import headerbrand from '@/components/headerbrand.vue'
  import sidebar from '@/components/Sidebar.vue'
  import ecedata from '@/components/ece/data/ecedata.vue'
  import eceelasticnodes from '@/components/ece/elastic/eceelasticnodes.vue'

  export default {
    name: 'app',
    components: {
      headerbrand,
      sidebar,
      ecedata,
      eceelasticnodes
    },
    data () {
      return {
          showece:false,
          selectedece:false,
          dataday:10,
          datareplikas:1,
          dataretention:1,
          datacapacity:20,
      }
    },
    methods: {
      vueshowece() {
        if (this.showece==false) {
          this.showece=true;
          this.selectedece=true;
        }  
        else if (this.showece==true) {
          this.showece=false;
          this.selectedece=false;
        }
      },
      vuedataday(value) {
        value=parseInt(value, 10)
        this.dataday=value;
        this.calcdatacapacity();
      },
      vuedatareplikas(value) {
        value=parseInt(value, 10)
        this.datareplikas=value
        this.calcdatacapacity();
      },
      vuedataretention(value) {
        value=parseInt(value, 10)
        this.dataretention=value
        this.calcdatacapacity();
      },
      calcdatacapacity() {
        this.datacapacity=this.dataday*((this.datareplikas)+1)*this.dataretention;
      }
    },

  };
  
</script>

<style>

  .small-container {
    max-width: 680px;
  }
</style>