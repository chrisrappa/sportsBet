const stripe = require('stripe')('sk_test_qJOjfuDYkspmywFcdfiJd1EL00ajScXy4g');


(async () => {
  console.log('Making requests!');

  // const cus = await stripe.customers.create();
  // const cus = await stripe.customers.retrieve(
  //   'cus_JJcCr6x5xj5l63'
  // )

  const cus = await stripe.customers.create({
    email: 'example@example.com',
    name: 'example'
  })
  
  console.log(cus);

})();