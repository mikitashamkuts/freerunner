import {AxiosResponse} from 'axios';

import {axiosInstance} from '..';
import {OrderType} from '../../types';

// Define the GraphQL query to fetch order details
// This is a multi-line string containing a GraphQL query
const FETCH_ORDERS_QUERY = `
  query {
    orders {
      id
      merchantName
      merchantLogo
      date
      nextDueAmount
      nextDueDate
      status
      reference
      price
      numberOfArticles
      shippedArticles
    }
  }
`;

// Define the TypeScript interface for the response format of the fetchOrders API call
// This helps ensure type safety when dealing with the API response
interface FetchOrdersResponse {
  data: {
    orders: OrderType[]; // The 'orders' field is an array of OrderType objects
  };
}

// Function to perform the API call to fetch orders using Axios
// The function returns a Promise that resolves with the Axios response
function sendFetchOrderListRequest(): Promise<AxiosResponse<FetchOrdersResponse>> {
  // Use the Axios instance to send a POST request to the GraphQL endpoint
  // The GraphQL query defined above is sent in the request body
  // The return type is specified to be an AxiosResponse that matches the FetchOrdersResponse interface
  return axiosInstance.post<FetchOrdersResponse>('', {
    // The endpoint is the base URL specified in axiosInstance
    query: FETCH_ORDERS_QUERY, // Include the GraphQL query in the request body
  });
}

export default sendFetchOrderListRequest;
