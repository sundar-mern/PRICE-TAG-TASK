import "./App.css";
import Card from "./components/Card";

function App() {
  let carddetails=[
    {
      type:'free',
      price:'0',
      features:[
        {
          user:'Single User',
          muted:false
        },
        {
          storage:'5GB Storage',
          muted:false
        },{
          publicproject:'Unlimited Public Projects',
          muted:false
        },{
          access:'Community Access',
          muted:false
        },{
          privateproject:'Unlimited Private Projects',
          muted:true
        },{
          phonesupport:'Dedicated Phone Support',
          muted:true
        },{
          subdomain:'Free Subdomain',
          muted:true
        },{
          status:'Monthly Status Reports',
          muted:true
        },
      ]
      
    },
    {
      type:'plus',
      price:'9',
      features:[
        {
          user:'5 Users',
          muted:false
        },
        {
          storage:'50GB Storage',
          muted:false
        },{
          publicproject:'Unlimited Public Projects',
          muted:false
        },{
          access:'Community Access',
          muted:false
        },{
          privateproject:'Unlimited Private Projects',
          muted:false
        },{
          phonesupport:'Dedicated Phone Support',
          muted:false
        },{
          subdomain:'Free Subdomain',
          muted:false
        },{
          status:'Monthly Status Reports',
          muted:true
        },
      ]
      
    },{
      type:'pro',
      price:'49',
      features:[
        {
          user:'Unlimited User',
          muted:false
        },
        {
          storage:'150 GB Storage',
          muted:false
        },{
          publicproject:'Unlimited Public Projects',
          muted:false
        },{
          access:'Community Access',
          muted:false
        },{
          privateproject:'Unlimited Private Projects',
          muted:false
        },{
          phonesupport:'Dedicated Phone Support',
          muted:false
        },{
          subdomain:'Free Subdomain',
          muted:false
        },{
          status:'Monthly Status Reports',
          muted:false
        },
      ] 
    }  
  ];


  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {
              carddetails.map(card=>{
                return <Card data={card}></Card>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
