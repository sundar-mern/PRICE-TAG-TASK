import React from 'react'

function Card(props) {
  return (
    <>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.type}</h5>
            <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
                {
                    props.data.features.map(list=>{
                        return <li className={list.muted ? 'text-muted':''}>
                        <span class="fa-li"><i class={list.muted ? "fas fa-times": "fas fa-check"}></i></span>
                        {list.user}
                        {list.storage}
                        {list.publicproject}
                        {list.access}
                        {list.privateproject}
                        {list.phonesupport}
                        {list.subdomain}
                        {list.status}

                    </li>
                    })
                }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase text-center">Button</a>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Card