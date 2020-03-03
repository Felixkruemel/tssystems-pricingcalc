<template>
  <div id="app" class="container-fluid" style="display: flex; flex-direction:column; min-height:100vh">  
    <headerbrand v-on:showece="vueshowece" style="flex-shrink:0"></headerbrand>
    <div class="container-fixed" style="flex: 1">
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
          <!-- Start Data -->
          <ecedata v-bind:datacapacity="datacapacity" v-bind:dataday="dataday" v-bind:datareplikas="datareplikas" v-bind:dataretention="dataretention" v-on:changedataday="vuedataday" v-on:changedatareplikas="vuedatareplikas" v-on:changedataretention="vuedataretention" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></ecedata>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <!-- End Data -->

          <!-- Start Elastic -->
          <h4 style="color:#E20074; text-align: center">Elastic</h4>
          <div class="col-l-4">
            <eceelasticnodes v-bind:elasticanz="elasticanz" v-on:changeelasticnodes="vuechangeelasticnodes"></eceelasticnodes>    
          </div>
          <div class="col-l-4">
            <eceelasticramratio v-bind:elasticramratio="elasticramratio" v-on:changeelasticramratio="vuechangeelasticramratio"></eceelasticramratio>
          </div>
          <div class="col-l-4">
            <eceelasticram v-bind:elasticram="elasticram" v-on:changeelasticram="vuechangeelasticram"></eceelasticram>
          </div>
          <h4 style="text-align: center">Price: {{elasticprice}}€</h4> 
          <div class="row" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></div>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <!-- End Elastic -->

          <!-- Start Kibana -->
          <h4 style="color:#E20074; text-align: center">Kibana</h4>
          <div class="col-l-6">
            <ecekibananodes v-bind:kibanaanz="kibanaanz" v-on:changekibananodes="vuechangekibananodes"></ecekibananodes>
          </div>
          <div class="col-l-6">
            <ecekibanaram v-bind:kibanaram="kibanaram" v-on:changekibanaram="vuechangekibanaram"></ecekibanaram>
          </div>
          <h4 style="text-align: center">Price: {{kibanaprice}}€</h4> 
          <div class="row" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></div>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <!-- End Kibana -->

          <!-- Start Final Pricing -->
          <h4 style="color:#E20074; text-align: center">Final Pricing</h4>
          <div class="col-l-2 col-m-4 col-s-4 col-xs-4">
            <p style="text-align: center">Data in Cluster:</p> 
            <p style="text-align: center">{{elasticdataincluster}} GB</p>
          </div>
          <div class="col-l-2 col-m-4 col-s-4 col-xs-4">
            <p style="text-align: center">Data buffer:</p> 
            <p style="text-align: center">{{elasticdatabuffer}} %</p>
          </div>
          <div class="col-l-2 col-m-4 col-s-4 col-xs-4">
            <p style="text-align: center">Data in queue on LS:</p> 
            <p style="text-align: center">0</p>
          </div>
          <div class="col-l-6 col-m-12 col-s-12 col-xs-12">
            <p style="text-align: center">Price for ELK in ECE:</p> 
            <div class="col-l-6">
              <p class="text-brand text-bold" style="text-align: center">{{ecefinalpricemonth}}€ per month</p>
            </div>
            <div class="col-l-6">
              <p class="text-brand text-bold" style="text-align: center">{{ecefinalpriceyear}}€ per year</p>
            </div>
          </div>
          <div class="row" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></div>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <!-- End Final Pricing -->
      </div>
      <!-- End of Implementation of all ECE containers -->

    </div>
    <footerbrand class="brand-footer footer-new "></footerbrand>  
    
    
  </div>
</template>

<script>
  import headerbrand from '@/components/headerbrand.vue'
  import sidebar from '@/components/Sidebar.vue'
  import footerbrand from '@/components/footerbrand.vue'
  import ecedata from '@/components/ece/data/ecedata.vue'
  import eceelasticnodes from '@/components/ece/elastic/eceelasticnodes.vue'
  import eceelasticramratio from '@/components/ece/elastic/eceelasticramratio.vue'
  import eceelasticram from '@/components/ece/elastic/eceelasticram.vue'
  import ecekibananodes from '@/components/ece/kibana/ecekibananodes.vue'
  import ecekibanaram from '@/components/ece/kibana/ecekibanaram.vue'
  import vuedataday from '@/components/ece/ecefunctions.js'
  import vuedatareplikas from '@/components/ece/ecefunctions.js'
  import vuedataretention from '@/components/ece/ecefunctions.js'
  import vuechangeelasticnodes from '@/components/ece/ecefunctions.js'
  import vuechangeelasticramratio from '@/components/ece/ecefunctions.js'
  import vuechangeelasticram from '@/components/ece/ecefunctions.js'
  import vuechangekibananodes from '@/components/ece/ecefunctions.js'
  import vuechangekibanaram from '@/components/ece/ecefunctions.js'
  import calcdatacapacity from '@/components/ece/ecefunctions.js'
  import calcelasticprice from '@/components/ece/ecefunctions.js'
  import calckibanaprice from '@/components/ece/ecefunctions.js'
  import calcelasticdatabuffer from '@/components/ece/ecefunctions.js'
  import calcecefinalprice from '@/components/ece/ecefunctions.js'
  import getdata from '@/components/ece/ecefunctions.js'

  export default {
    name: 'app',
    mixins: [getdata, vuedataday, vuedatareplikas, vuedataretention, vuechangeelasticnodes, vuechangeelasticramratio, vuechangeelasticram, vuechangekibananodes, vuechangekibanaram, calcdatacapacity, calcelasticprice, calckibanaprice, calcelasticdatabuffer, calcecefinalprice],
    components: {
      headerbrand,
      sidebar,
      footerbrand,
      ecedata,
      eceelasticnodes,
      eceelasticramratio,
      eceelasticram,
      ecekibananodes,
      ecekibanaram,
    },
    data () {
      return {
          dataday:10,
          showece:false,
          selectedece:false,
          datareplikas:1,
          dataretention:1,
          datacapacity:20,
          elasticanz:1,
          elasticramratio:16,
          elasticram:1,
          elasticprice:24.26,
          elasticram_pricepergb:1.50,
          elasticdataincluster:16,
          elasticdatabuffer:-224900,
          kibanaanz:1,
          kibanaram:1,
          kibanaprice:18.32,
          ecefinalpricemonth:42.58,
          ecefinalpriceyear:510.96,
          returnapi:null,
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
          this.test();
        }
      },

    },
    mounted() {
      this.axios
        .get('https://raw.githubusercontent.com/Felixkruemel/testjsonrepo2/master/db.json')
        .then(response => (this.returnapi=response.data))
    }
    


  };
  
</script>

<style>

</style>