export default {
    methods: {
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
          vuechangelogstashnodes(value) {
            value=parseInt(value, 10)
            this.logstashanz=value
            this.calclogstashprice()
            this.calcecefinalprice()
          },
          vuechangelogstashram(value) {
            value=parseInt(value, 10)
            this.logstashram=value
            this.calclogstashprice()
            this.calcecefinalprice()
          },
          vuechangelogstashpersistedqueue(value) {
            value=parseInt(value, 10)
            this.logstashpersistedqueue=value
            this.calclogstashprice()
            this.calcecefinalprice()
          },
          vuechangeapmnodes(value) {
            value=parseInt(value, 10)
            this.apmanz=value
            this.calcapmprice()
            this.calcecefinalprice()
          },
          vuechangeapmram(value) {
            value=parseFloat(value)
            this.apmram=value
            this.calcapmprice()
            this.calcecefinalprice()
          },
          vuechangemachinelearningnodes(value) {
            value=parseInt(value, 10)
            this.machinelearninganz=value
            this.calcmachinelearningprice()
            this.calcecefinalprice()
          },
          vuechangemachinelearningram(value) {
            value=parseInt(value, 10)
            this.machinelearningram=value
            this.calcmachinelearningprice()
            this.calcecefinalprice()
          },
          vuechangesupportcount(value) {
            value=parseInt(value, 10)
            this.supportcount=value
            this.calcsupportprice()
            this.calcecefinalprice()
          },
          calcdatacapacity() {
            this.datacapacity=this.dataday*((this.datareplikas)+1)*this.dataretention;
    
            this.calcelasticdatabuffer()
            this.calcecefinalprice()
          },
          calcelasticprice() {
          //  if (this.elasticram>10) this.elasticram_pricepergb=1.35
          //  else this.elasticram_pricepergb=1.50
            if (this.elasticram>10) this.elasticram_pricepergb=this.returnapi.prices[0].amount
            else this.elasticram_pricepergb=this.returnapi.prices[1].amount

            this.elasticdataincluster=this.elasticram*this.elasticanz*this.elasticramratio
            this.elasticprice=((this.elasticdataincluster*0.10)+(this.elasticanz*this.elasticram*7.03)+((this.elasticanz*this.elasticram*10.42)*this.elasticram_pricepergb))
            this.elasticprice=Number((this.elasticprice).toFixed(2))
    
            this.calcelasticdatabuffer()
            this.calcecefinalprice()
          },
          calckibanaprice() {
            this.kibanaprice=(((this.kibanaanz*this.kibanaram*7.03)+(this.kibanaanz*this.kibanaram*10.42))*1.05)
            this.kibanaprice=Number((this.kibanaprice).toFixed(2))
    
            this.calcelasticdatabuffer()
            this.calcecefinalprice()
          },
          calcelasticdatabuffer() {
            if (this.elasticdataincluster>0) this.elasticdatabuffer=(100-((this.datacapacity/this.elasticdataincluster)*100));
            else this.elasticdataincluster=0;
            this.elasticdatabuffer=Math.floor(this.elasticdatabuffer)
          },
          calcecefinalprice() {
            this.ecefinalpricemonth=this.kibanaprice+this.elasticprice+this.logstashprice+this.apmprice+this.machinelearningprice+this.supportprice
            this.ecefinalpricemonth=Number((this.ecefinalpricemonth).toFixed(2))
            this.ecefinalpriceyear=12*this.ecefinalpricemonth
            this.ecefinalpriceyear=Number((this.ecefinalpriceyear).toFixed(2))
          },
          calclogstashprice() {
            this.datainqueueonls=this.logstashanz*this.logstashpersistedqueue
            this.logstashprice=((this.datainqueueonls*0.1)+(this.logstashanz*this.logstashram*7.03))
            this.logstashprice=Number((this.logstashprice).toFixed(2))
          },
          calcapmprice() {
            this.apmprice=(((this.apmanz*this.apmram*7.03)+(this.apmanz*this.apmram*10.42))*1.25)
            this.apmprice=Number((this.apmprice).toFixed(2))
          },
          calcmachinelearningprice() {
            this.machinelearningprice=(((this.machinelearninganz*this.machinelearningram*7.03)+(this.machinelearninganz*this.machinelearningram*10.42))*1.25)
            this.machinelearningprice=Number((this.machinelearningprice).toFixed(2))
          },
          calcsupportprice() {
            this.supportprice=(this.supportcount*3920)
          },
          showeceoptional() {
            if (this.selectedeceoptional==false) {
              this.selectedeceoptional=true;
            }  
            else if (this.selectedeceoptional==true) {
              this.selectedeceoptional=false;
            }
          },
          apicall() {
            console.log(this.returnapi2)
          }
          
      /*    async getdata() {
            var xhr = new XMLHttpRequest();
            var response = new Object();
            xhr.open('GET', "https://raw.githubusercontent.com/Felixkruemel/testjsonrepo2/master/db.json", true)
            xhr.onload = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  response=JSON.parse(xhr.responseText)
                  console.log(response)
                } else {
                  console.error(xhr.statusText)
                }
              }
            }            
            
            xhr.send();
            console.log(response)
            if (this.elasticram>10) this.elasticram_pricepergb=response.prices[0].amount
            else this.elasticram_pricepergb=response.prices[1].amount
            console.log(this.elasticram_pricepergb)
            
    
          }, */
    }
}