"use client";

import {  Flex, Button, Link, Text } from "@chakra-ui/react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import {Razorpay} from "razorpay"
var razorpay = require('razorpay')

const page = () => {
  
  function razor(){
    var options = {
      "key": "rzp_test_x9fBn06d4xJl9V", // Enter the Key ID generated from the Dashboard
      "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)

          verify(order,response)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new razorpay(options);
  rzp1.open()
  }
        
  return (
    <div>
      <Flex justifyContent="flex-end" marginRight="10px">
        <Flex
          marginTop="10px"
          justifyContent="center"
          alignItems="center"
          width="45px"
          height="45px"
          boxShadow="dark-lg"
          rounded="md"
          borderColor="#00000040"
          borderWidth="2px"
          borderRadius="10px"
        >
          <Link href="../cart">
            <MdOutlineProductionQuantityLimits size="25px" />
          </Link>
        </Flex>
      </Flex>
      <Flex
        spacing={3}
        justifyContent="center"
        alignItems="center"
        height="500px"
      >
        <Text fontWeight="bold" fontSize="xxx-large">
          &nbsp; &nbsp; order &nbsp; placed &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;successfully
        </Text>
      </Flex>
      <Flex
        alignContent="space-between"
        height="284px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button
          boxShadow="2xl"
          rounded="md"
          borderTopColor="WHITE"
          borderWidth="3px"
          borderRadius="50px"
          margin="10px"
          width="300px"
          height="60px"
        >
          Add item
        </Button>
        <Button 
         onClick={razor}
          boxShadow="2xl"
          rounded="md"
          borderTopColor="WHITE"
          borderWidth="3px"
          borderRadius="50px"
          margin="10px"
          width="300px"
          height="60px"
          backgroundColor="#3BA9A9"
        >
          Pay now
        </Button>
      </Flex>
    </div>
  );
};

export default page;
