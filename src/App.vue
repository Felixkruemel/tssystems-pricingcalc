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
      </div>
      <!-- End of Implementation of all ECE containers -->


    </div>

    
  </div>
</template>

<script>
  import headerbrand from '@/components/headerbrand.vue'
  import sidebar from '@/components/Sidebar.vue'
  import ecedata from '@/components/ece/data/ecedata.vue'
  import eceelasticnodes from '@/components/ece/elastic/eceelasticnodes.vue'
  import eceelasticramratio from '@/components/ece/elastic/eceelasticramratio.vue'
  import eceelasticram from '@/components/ece/elastic/eceelasticram.vue'
  import ecekibananodes from '@/components/ece/kibana/ecekibananodes.vue'
  import ecekibanaram from '@/components/ece/kibana/ecekibanaram.vue'

  export default {
    name: 'app',
    components: {
      headerbrand,
      sidebar,
      ecedata,
      eceelasticnodes,
      eceelasticramratio,
      eceelasticram,
      ecekibananodes,
      ecekibanaram
    },
    data () {
      return {
          showece:false,
          selectedece:false,
          dataday:10,
          datareplikas:1,
          dataretention:1,
          datacapacity:20,
          elasticanz:1,
          elasticramratio:16,
          elasticram:1,
          elasticprice:24.26,
          elasticram_pricepergb:1.50,
          elasticdataincluster:16,
          kibanaanz:1,
          kibanaram:1,
          kibanaprice:18.32,
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
      vuechangeelasticnodes(value) {
        value=parseInt(value, 10)
        this.elasticanz=value
        this.calcelasticprice();
      },
      vuechangeelasticramratio(value) {
        value=parseInt(value, 10)
        this.elasticramratio=value
        this.calcelasticprice();
      },
      vuechangeelasticram(value) {
        value=parseInt(value, 10)
        this.elasticram=value
        this.calcelasticprice();
      },
      vuechangekibananodes(value) {
        value=parseInt(value, 10)
        this.kibanaanz=value
        this.calckibanaprice();
      },
      vuechangekibanaram(value) {
        value=parseInt(value, 10)
        this.kibanaram=value
        this.calckibanaprice();
      },
      calcdatacapacity() {
        this.datacapacity=this.dataday*((this.datareplikas)+1)*this.dataretention;
      },
      calcelasticprice() {
        if (this.elasticram>10) this.elasticram_pricepergb=1.35
        else this.elasticram_pricepergb=1.50

        this.elasticdataincluster=this.elasticram*this.elasticanz*this.elasticramratio
        this.elasticprice=((this.elasticdataincluster*0.10)+(this.elasticanz*this.elasticram*7.03)+((this.elasticanz*this.elasticram*10.42)*this.elasticram_pricepergb))
        this.elasticprice=Number((this.elasticprice).toFixed(2))
      },
      calckibanaprice() {
        this.kibanaprice=(((this.kibanaanz*this.kibanaram*7.03)+(this.kibanaanz*this.kibanaram*10.42))*1.05)
        this.kibanaprice=Number((this.kibanaprice).toFixed(2))
      }
    },

  };
  
</script>

<style>

  .small-container {
    max-width: 680px;
  }
</style>