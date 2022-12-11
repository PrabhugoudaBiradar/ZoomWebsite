import React from 'react'

const Shopping = () => {
 let cloths= 
 [
      {
        cloth_url:"https://rukminim1.flixcart.com/image/832/832/l16rde80/shirt/4/y/y/xxl-st2-vebnor-original-imagcsujaggmjyux.jpeg?q=70",
        type:"Shirt",
        cost:"₹359"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kc0u7bk0/shirt/a/m/i/m-pk19sh09g-surhi-original-imaft8y3wdfshukg.jpeg?q=70",
        type:"Shirt",
        cost:"₹359"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/l4yi7bk0/shirt/n/v/k/m-itmsh04276dark-navyls-indian-terrain-original-imagfqzeghquux8b.jpeg?q=70",
        type:"Shirt",
        cost:"₹359"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/p/b/3/-original-imaggcyd97hbkvxf.jpeg?q=70",
        type:"Shirt",
        cost:"₹359"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/l4x2rgw0/t-shirt/k/b/z/m-t410-bllafb-eyebogler-original-imagfphvmbndw3xg.jpeg?q=70",
        type:"T-Shirt",
        cost:"₹450"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/l3vxbbk0/t-shirt/e/y/x/xs-bwtrnful-z55-blive-original-imagewfuzszh3y5c.jpeg?q=70",
        type:"T-Shirt",
        cost:"₹450"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kz8qsnk0/t-shirt/g/z/n/m-db1024-42-3bros-original-imagbawh38j3ghzr.jpeg?q=70",
        type:"T-Shirt",
        cost:"₹450"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=70",
        type:"T-Shirt",
        cost:"₹450"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/k3xcdjk0pkrrdj/sari/c/8/z/free-mustard-vjs1137-1-v-j-fashion-vjs1137-1-original-imafn2uqd7pyggy4.jpeg?q=70",
        type:"Saree",
        cost:"₹500"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kzrbiq80/sari/5/0/k/free-mk-zal-cosbila-fashion-unstitched-original-imagbpgj83pvffj2.jpeg?q=70",
        type:"Saree",
        cost:"₹500"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kwwfte80/sari/t/q/e/free-grey-1682-1-kashvi-sarees-unstitched-original-imag9ha5ff4fpz9u.jpeg?q=70",
        type:"Saree",
        cost:"₹500"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/l3os4280/sari/x/d/t/free-2331s801-2431s853-2331s803j-siril-unstitched-original-imager6sgfqgfadr.jpeg?q=70",
        type:"Saree",
        cost:"₹500"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kjem3rk0-0/fabric/1/b/1/yes-unstitched-996d329-saara-original-imafyz6tqbm4bgbf.jpeg?q=70",
        type:"Chudidar",
        cost:"₹600"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/fabric/3/h/f/yes-2-m-unstitched-2-2-m-1119d949ja-siril-original-imagemrq3cqrzdqx.jpeg?q=70",
        type:"Chudidar",
        cost:"₹600"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/kyoqmq80/fabric/x/t/j/yes-2-2-m-unstitched-2-2-m-sku404-shibli-original-imagav6ysvqxg4bs.jpeg?q=70",
        type:"Chudidar",
        cost:"₹600"
      },
      {
        cloth_url:"https://rukminim1.flixcart.com/image/612/612/xif0q/fabric/s/c/k/yes-2-2-m-unstitched-2-m-2-5-m-black-arya-ad-iris-original-imaghfvfhmfy6mus.jpeg?q=70",
        type:"Chudidar",
        cost:"₹600"
      },
 ]

  return (
    <div className='mainitem'>
        {
            cloths.map((item,index)=>{
             return(
                <div className='shoppingitem' key={index}>
                    <img src={item.cloth_url} alt='no img'/>
                    <h2>{item.type}</h2>
                    <h2>{item.cost}</h2>
                </div>
             )
            })
        }
    </div>
  )
}

export default Shopping