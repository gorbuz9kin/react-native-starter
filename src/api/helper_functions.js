// @flow

/* MODULES */
import axios from "axios";
import qs from "qs";

/* CUSTOM MODULES */
// import { getItemFromStorage } from '/utils';

/* CONFIGS */
import { MAIN_CONFIG } from "../configs";

/* TYPES */
type _t_requestType = "get" | "post" | "put" | "patch" | "delete";
type _t_response = { status: number, statusText: string } & Object;

let TOKEN = "";

export function setToken(token: string) {
  TOKEN = token;
}

export function getToken(): ?string {
  if (!TOKEN) {
    return null;
  }
  return TOKEN;
}

// let AppStore = null;

// export function setStore(store: Object) {
//   AppStore = store;
// }

/**
 * Base request
 *
 * @param {_t_requestType} requestType - request type
 * @param {string} url - request url
 * @param {Object} [body] - request body
 * @param {Object} [queryParams] - request query params
 *
 * @returns {Promise}
 */
async function _baseRequest(
  requestType: _t_requestType, url: string, body?: ?Object,
  queryParams?: ?Object, addHeaders?: ?Object, responseType?: string = '',
  onUploadProgress?: Function
): Promise<*> {
  if (MAIN_CONFIG.ENABLE_LOGS) {
    console.info(`REQUEST TYPE =====> ${requestType}`);
    console.info(`REQUEST URL =====> ${MAIN_CONFIG.API_URL}${url}${queryParams ? `?${qs.stringify(queryParams)}` : ''}`);
    console.info(`REQUEST BODY =====> `, body);
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...addHeaders
  };
  if (MAIN_CONFIG.ENABLE_LOGS) {
    console.info(`REQUEST HEADER =====> `, headers);
  }

  let generateData = null;

  if (headers['Content-Type'] === 'multipart/form-data' && body) {
    generateData = body;
  } else
  if (headers['Content-Type'] === 'application/json' && body) {
    generateData = JSON.stringify(body);
  }

  return axios({
    method: requestType,
    url: `${MAIN_CONFIG.API_URL}${url}${queryParams ? `?${qs.stringify(queryParams, { arrayFormat: 'repeat' })}` : ''}`,
    data: generateData,
    withCredentials: true,
    responseType,
    headers,
    onUploadProgress
  }).then((response) => {
    if (MAIN_CONFIG.ENABLE_LOGS) {
      console.log(`response URL - ${url} ===== `, response);
    }
    if (typeof response === "string" || !response) {
      console.warn("Response is a string!");
      return { data: response };
    }

    const _data: Object = {
      data: response.data || {},
      status: {
        text: response.statusText,
        code: response.status,
      }
    };

    return _data;
  }).catch((error) => {
    if (MAIN_CONFIG.ENABLE_LOGS) {
      console.log(`error URL - ${url} ===== `, error);
    }

    // if (error.response.status === 401) {
    //   if (AppStore) {
    //     AppStore.resetAppStore();
    //   }
    //   localStorage.removeItem('AppStore');
    //   localStorage.clear();
    // }

    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        statusText: error.response.statusText || ''
      });
    }

    return Promise.reject(error);
  });
}


/**
 * Common GET request
 *
 * @export
 * @param {string} url - url for request
 *
 * @returns {Promise}
 */
export function getRequest(url: string, queryParams?: Object, addHeaders?: ?Object, responseType?: string): Promise<*> {
  return _baseRequest('get', url, null, queryParams, addHeaders, responseType);
}


/**
 * Common POST request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} body - data
 * @param {Object | null} queryParams - query params for request
 *
 * @returns {Promise}
 */
export function postRequest(url: string, body?: ?Object, queryParams?: ?Object, addHeaders?: ?Object, onUploadProgress?: Function): Promise<*> {
  return _baseRequest('post', url, body, queryParams, addHeaders, '', onUploadProgress);
}

/**
 * Common PUT request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} queryParams - query params for request
 * @param {Object} body - data
 *
 * @returns {Promise}
 */
export function putRequest(url: string, body?: Object, queryParams?: ?Object): Promise<_t_response> {
  return _baseRequest('put', url, body, queryParams);
}


/**
 * Common PATCH request
 *
 * @export
 * @param {string} url - url for request
 * @param {Object | null} queryParams - query params for request
 * @param {Object} body - data
 *
 * @returns {Promise}
 */
export function patchRequest(url: string, body?: Object, queryParams?: ?Object, addHeaders?: ?Object): Promise<_t_response> {
  return _baseRequest('patch', url, body, queryParams, addHeaders);
}


/**
 * Common DELETE request
 *
 * @export
 * @param {any} url - url for request
 * @param {(Object | null)} [queryParams] - query params for request
 *
 * @returns {Promise}
 */
export function deleteRequest(url: string, queryParams?: Object | null): Promise<_t_response> {
  return _baseRequest('delete', url, null, queryParams);
}
