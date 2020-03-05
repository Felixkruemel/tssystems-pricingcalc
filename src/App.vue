<template>
  <div id="app" class="container-fluid" style="display: flex; flex-direction:column; min-height:100vh">  
    <headerbrand v-on:showece="vueshowece" style="flex-shrink:0"></headerbrand>
    <div class="container-fixed" style="flex: 1">
      <!-- <div class="col-l-2 col-m-3 col-s-hide col-xs-hide">
        <sidebar v-on:showece="vueshowece" v-bind:selectedece="selectedece"></sidebar>
      </div>
      <div class="col-xl-1 col-l-1 col-m-1 col-s-hide col-xs-hide"></div> -->

      <!-- Start Implementation of all ECE containers -->
      <div v-if="selectedece" class="col-xl-12 col-l-12 col-m-12 col-s-12 col-xs-12" >
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
          
          <!-- Start ECE optional -->
          <div class="col-l-12">
            <div class="h-ctr">
              <button class="btn btn-default" v-on:click="showeceoptional" v-bind:class="{'btn-brand':selectedeceoptional}"><i class=" icon icon-context-menu" aria-hidden="true"></i>Show optional Components</button>
            </div>
            <div v-if="selectedeceoptional">
              <h4 style="color:#E20074; text-align: center">Logstash</h4>
              <div class="col-l-4">
                <ecelogstashnodes v-bind:logstashanz="logstashanz" v-on:changelogstashnodes="vuechangelogstashnodes"></ecelogstashnodes>
              </div>
              <div class="col-l-4">
                <ecelogstashram v-bind:logstashram="logstashram" v-on:changelogstashram="vuechangelogstashram"></ecelogstashram>
              </div>  
              <div class="col-l-4">
                <ecelogstashpersisted v-bind:logstashpersistedqueue="logstashpersistedqueue" v-on:changelogstashpersistedqueue="vuechangelogstashpersistedqueue"></ecelogstashpersisted>
              </div>
              <h4 style="text-align: center">Price: {{logstashprice}}€</h4>  
              <div class="row offset-bottom-3 hidden-s hidden-xs"></div>
              <h4 style="color:#E20074; text-align: center">APM</h4>
              <div class="col-l-6">
                <eceapmnodes v-bind:apmanz="apmanz" v-on:changeapmnodes="vuechangeapmnodes"></eceapmnodes>
              </div>
              <div class="col-l-6">
                <eceapmram v-bind:apmram="apmram" v-on:changeapmram="vuechangeapmram"></eceapmram>
              </div> 
              <h4 style="text-align: center">Price: {{apmprice}}€</h4> 
              <div class="row offset-bottom-3 hidden-s hidden-xs"></div>
              <h4 style="color:#E20074; text-align: center">Machine Learning</h4>
              <div class="col-l-6">
                <ecemachinelearningnodes v-bind:machinelearninganz="machinelearninganz" v-on:changemachinelearningnodes="vuechangemachinelearningnodes"></ecemachinelearningnodes>
              </div>
              <div class="col-l-6">
                <ecemachinelearningram v-bind:machinelearningram="machinelearningram" v-on:changemachinelearningram="vuechangemachinelearningram"></ecemachinelearningram>
              </div>
              <h4 style="text-align: center">Price: {{machinelearningprice}}€</h4>  
              <div class="row offset-bottom-3 hidden-s hidden-xs"></div>
              <h4 style="color:#E20074; text-align: center">Support</h4>
              <div class="col-l-12">
                <ecesupport v-bind:supportcount="supportcount" v-on:changesupportcount="vuechangesupportcount"></ecesupport>
              </div>  
              <h4 style="text-align: center">Price: {{supportprice}}€</h4> 
            </div>
          </div>
          <div class="row" style="border-bottom-style: solid; border-color: #d9d9d9; border-width: 1px"></div>
          <div class="row offset-bottom-5 hidden-s hidden-xs"></div>
          <!-- END ECE Optional -->

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
            <p style="text-align: center">{{datainqueueonls}} GB</p>
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
  <!--  <button v-on:click="apicall">Klick me</button> -->
    <footerbrand class="brand-footer footer-new "></footerbrand>  
    
    
  </div>
</template>

<script>
  import headerbrand from '@/components/headerbrand.vue'
  // import sidebar from '@/components/Sidebar.vue'
  import footerbrand from '@/components/footerbrand.vue'
  import ecedata from '@/components/ece/data/ecedata.vue'
  import eceelasticnodes from '@/components/ece/elastic/eceelasticnodes.vue'
  import eceelasticramratio from '@/components/ece/elastic/eceelasticramratio.vue'
  import eceelasticram from '@/components/ece/elastic/eceelasticram.vue'
  import ecekibananodes from '@/components/ece/kibana/ecekibananodes.vue'
  import ecekibanaram from '@/components/ece/kibana/ecekibanaram.vue'
  import ecelogstashnodes from '@/components/ece/optional/logstash/ecelogstashnodes.vue'
  import ecelogstashram from '@/components/ece/optional/logstash/ecelogstashram.vue'
  import ecelogstashpersisted from '@/components/ece/optional/logstash/ecelogstashpersisted.vue'
  import eceapmnodes from '@/components/ece/optional/apm/eceapmnodes.vue'
  import eceapmram from '@/components/ece/optional/apm/eceapmram.vue'
  import ecemachinelearningnodes from '@/components/ece/optional/machinelearning/ecemachinelearningnodes.vue'
  import ecemachinelearningram from '@/components/ece/optional/machinelearning/ecemachinelearningram.vue'
  import ecesupport from '@/components/ece/optional/support/ecesupport.vue'
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
  import showeceoptional from '@/components/ece/ecefunctions.js'
  import vuechangelogstashnodes from '@/components/ece/ecefunctions.js'
  import vuechangelogstashram from '@/components/ece/ecefunctions.js'
  import calclogstashprice from '@/components/ece/ecefunctions.js'
  import vuechangeapmnodes from '@/components/ece/ecefunctions.js'
  import vuechangeapmram from '@/components/ece/ecefunctions.js'
  import calcapmprice from '@/components/ece/ecefunctions.js'
  import vuechangemachinelearningnodes from '@/components/ece/ecefunctions.js'
  import vuechangemachinelearningram from '@/components/ece/ecefunctions.js'
  import vuechangesupportcount from '@/components/ece/ecefunctions.js'
  import apicall from '@/components/ece/ecefunctions.js'
  
  export default {
    name: 'app',
    mixins: [apicall, vuechangesupportcount, vuechangemachinelearningram, vuechangemachinelearningnodes, calcapmprice, vuechangeapmram, vuechangeapmnodes, vuechangelogstashram, showeceoptional, vuechangelogstashnodes, getdata, vuedataday, vuedatareplikas, vuedataretention, vuechangeelasticnodes, vuechangeelasticramratio, vuechangeelasticram, vuechangekibananodes, vuechangekibanaram, calclogstashprice, calcdatacapacity, calcelasticprice, calckibanaprice, calcelasticdatabuffer, calcecefinalprice],
    components: {
      headerbrand,
      
      footerbrand,
      ecedata,
      eceelasticnodes,
      eceelasticramratio,
      eceelasticram,
      ecekibananodes,
      ecekibanaram,
      ecelogstashnodes,
      ecelogstashram,
      ecelogstashpersisted,
      eceapmnodes,
      eceapmram,
      ecemachinelearningnodes,
      ecemachinelearningram,
      ecesupport
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
          elasticdatabuffer:-25,
          kibanaanz:1,
          kibanaram:1,
          kibanaprice:18.32,
          ecefinalpricemonth:42.58,
          ecefinalpriceyear:510.96,
          returnapi:null,
          selectedeceoptional:false,
          logstashanz:0,
          logstashram:1,
          logstashpersistedqueue:50,
          logstashprice:0,
          datainqueueonls:0,
          apmanz:0,
          apmram:0.512,
          apmprice:0,
          machinelearninganz:0,
          machinelearningram:1,
          machinelearningprice:0,
          supportcount:0,
          supportprice:0,
          returnapi2:null,
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
    /*  this.axios
        .get('http://preisrechner.bmptest.de/de/open-telekom-price-api/?responseFormat=json&serviceName%5B0%5D=ecs&columns%5B1%5D=priceAmount&limitMax=1000&filterBy%5BvCpu%5D=4&filterBy%5Bram%5D=8&nocache=0' , {
          headers: {
            crossdomain: true,
          },
        })
        .then(response => (this.returnapi2=response.data)) */
    }
    


  };
  
</script>

<style>

</style>