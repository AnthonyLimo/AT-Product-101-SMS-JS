// This script is to all about setting up SMS with Africa's Talking


//  1. Create an object with your credentials. We are using
//  the sandbox environment so your username will be sandbox
//  and your API key can be generated on the AT sandbox dashboard
//  here:

const credentials = {
    username: 'sandbox',
    apiKey: ''
};

// 2. Using the Africa's Talking package, you can pass your
// credentials in and initialize the instance

const africastalking = require('africastalking')(credentials);

// 3. Since we are looking to use the Africa's Talking SMS service
// we will specify this by calling the SMS method from the AT library
// and assign it to the sms variable

sms = africastalking.SMS;

// 4. The SMS method takes several parameters
// to - defines which number the SMS should be sent to
// from - the alphanumeric from AT that names the sender. By default,
// without this parameter, we send it with 'AFRICASTKNG'
// message - this contains the string that you want to send out

response = sms.send(to, from, message);

// 5. Next, we print out the response from the Africa's talking 
// service. You can find the structure of the payload in the API
// reference here: 

console.log(response);




