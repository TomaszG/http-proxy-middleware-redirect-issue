import { createProxyMiddleware } from 'http-proxy-middleware'
import getConfig from 'next/config'

const { serverRuntimeConfig: { apiBaseUrl, backendEndpoints } } = getConfig()

export const config = {
	api: {
		bodyParser: false,
	},
}

export default createProxyMiddleware(backendEndpoints, {
	target: apiBaseUrl,
	changeOrigin: true,
})
