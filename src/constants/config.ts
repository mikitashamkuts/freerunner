import {Platform} from 'react-native';
import {HapticFeedbackTypes} from 'react-native-haptic-feedback';

export enum tabs {
  HomeTab = 'HomeTab',
}

export enum routes {
  AgendaScreen = 'AgendaScreen',
}

export enum loadingStatusList {
  Error = 'Error',
  Loading = 'Loading',
  Success = 'Success',
}

export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

export const imageCacheSizeLimit = 1815; // 1.8mb, aproximate equivalent of 50 cached logo icons

export const defaultAnimationDuration = 375; // ms

export const isAndroid = Platform.OS === 'android';

export enum exceptionList {
  InvalidParam = 'InvalidParam', //'Undefined or Falsy or Incorrect Parameter',
  UnavailableModule = 'UnavailableModule', //'Unavailable Module Or Service Not Initiated Or Failed',
  Network = 'Network', // Network communication issue
}

export enum hapticFeedbackModeList {
  Default = HapticFeedbackTypes.soft,
}

/**
 * Enum for common HTTP status codes with explanations.
 * @enum {number}
 */
export enum httpResponceStatusList {
  // Informational responses (100–199)
  Continue = 100, // The server has received the request headers, and the client should proceed to send the request body.
  SwitchingProtocols = 101, // The requester has asked the server to switch protocols, and the server has agreed to do so.

  // Successful responses (200–299)
  Ok = 200, // The request has succeeded.
  Created = 201, // The request has been fulfilled and has resulted in one or more new resources being created.
  Accepted = 202, // The request has been accepted for processing, but the processing has not been completed.
  NonAuthoritativeInformation = 203, // The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.
  NoContent = 204, // The server successfully processed the request and is not returning any content.
  ResetContent = 205, // The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
  PartialContent = 206, // The server is delivering only part of the resource due to a range header sent by the client.

  // Redirection messages (300–399)
  MultipleChoices = 300, // The request has more than one possible response. The user-agent or user should choose one of them.
  MovedPermanently = 301, // The URL of the requested resource has been changed permanently.
  Found = 302, // The URL of the requested resource has been changed temporarily.
  SeeOther = 303, // The response to the request can be found under another URL using a GET method.
  NotModified = 304, // The resource has not been modified since the version specified by the request headers.
  TemporaryRedirect = 307, // The request should be repeated with another URI; however, future requests should still use the original URI.
  PermanentRedirect = 308, // The request and all future requests should be repeated using another URI.

  // Client error responses (400–499)
  BadRequest = 400, // The server cannot or will not process the request due to an apparent client error.
  Unauthorized = 401, // Authentication is required and has failed or has not yet been provided.
  PaymentRequired = 402, // Reserved for future use.
  Forbidden = 403, // The request was valid, but the server is refusing action.
  NotFound = 404, // The requested resource could not be found but may be available in the future.
  MethodNotAllowed = 405, // A request method is not supported for the requested resource.
  NotAcceptable = 406, // The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
  ProxyAuthenticationRequired = 407, // The client must first authenticate itself with the proxy.
  RequestTimeout = 408, // The server timed out waiting for the request.
  Conflict = 409, // The request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
  Gone = 410, // The resource requested is no longer available and will not be available again.
  LengthRequired = 411, // The request did not specify the length of its content, which is required by the requested resource.
  PreconditionFailed = 412, // The server does not meet one of the preconditions that the requester put on the request header fields.
  PayloadTooLarge = 413, // The request is larger than the server is willing or able to process.
  UriTooLong = 414, // The URI provided was too long for the server to process.
  UnsupportedMediaType = 415, // The request entity has a media type which the server or resource does not support.
  RangeNotSatisfiable = 416, // The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
  ExpectationFailed = 417, // The server cannot meet the requirements of the Expect request-header field.

  // Server error responses (500–599)
  InternalServerError = 500, // A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  NotImplemented = 501, // The server either does not recognize the request method, or it lacks the ability to fulfill the request.
  BadGateway = 502, // The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  ServiceUnavailable = 503, // The server is currently unavailable (because it is overloaded or down for maintenance).
  GatewayTimeout = 504, // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  HttpVersionNotSupported = 505, // The server does not support the HTTP protocol version used in the request.
}
