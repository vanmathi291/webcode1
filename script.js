url='http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop&product_type=lipstick'


async function api(){
    v=fetch(url)
    out1=await v
    prom=out1.json()
    out11=await prom
    console.log(out11);
}
    


api()
