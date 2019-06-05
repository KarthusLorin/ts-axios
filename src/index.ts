import {AxiosRequestConfig} from "./types";
import xhr from './xhr'
import {buildURL} from "./helpers/url";
import {transformRequest} from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理（规范化，序列化）配置
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

// 序列化参数
function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}

// 序列化body
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
