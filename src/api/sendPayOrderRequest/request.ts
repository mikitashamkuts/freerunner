// api/axiosConfig.ts

import {AxiosResponse} from 'axios';

import {axiosInstance} from '..';

// Define the GraphQL mutation for paying an order
const PAY_ORDER_MUTATION = `
  mutation PayOrder($orderId: ID!) {
    payOrder(orderId: $orderId) {
      id
      merchantName
      status
      nextDueAmount
      nextDueDate
    }
  }
`;

// Define the TypeScript interface for the response format
interface PayOrderResponse {
  data: {
    payOrder: {
      id: string;
      merchantName: string;
      status: string;
      nextDueAmount: number;
      nextDueDate: string;
    };
  };
}

// Function to pay an order by its ID
function sendPayOrderRequest(orderId: string): Promise<AxiosResponse<PayOrderResponse>> {
  return axiosInstance.post<PayOrderResponse>('', {
    query: PAY_ORDER_MUTATION,
    variables: {
      orderId, // The order ID to be paid
    },
  });
}

export default sendPayOrderRequest;
