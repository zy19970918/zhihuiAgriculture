import reqest from "./manager";
import path from "./api";
export function send(method, url, params) {
  return reqest({
    url: path[url],
    method: method,
    params: params
  });
}
