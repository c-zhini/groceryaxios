import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Covid Dataset in US',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"aqua",
              backgroundColor:'turquoise',
              fill:false
            }
          ]
          
        },
        options: {
            title:{
                display:true,
                text: "Daily COVID-19 Deaths in US"
            },
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        //console.log(response.data.snapshots[0])
        //console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key].todayDeaths)
            this.chartdata.labels.push(key+'')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
    mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }
    }
