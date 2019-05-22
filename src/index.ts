import {AxiosRequestConfig} from "./types";
import xhr from './xhr'
import {buildURL} from "./helpers/url";

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理（规范化，序列化）配置
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

// 序列化参数
function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}

export default axios
