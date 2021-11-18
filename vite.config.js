/*
 * @Description: 
 * @Author: linchen13
 * @Date: 2021-11-09 19:26:28
 * @LastEditTime: 2021-11-18 10:22:49
 * @LastEditors: linchen13
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3001
	},
	resolve: {
    	alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	plugins: [vue()],
	css: {
		postcss: {
		plugins: [
			require('postcss-px-to-viewport')({
				viewportWidth: 1180, //(Number) 设计稿宽度
				viewportHeight: 820, //(Number) 设计稿高度
				unitPrecision: 5, //(Number) 转换后单位小数点
				viewportUnit: 'vw', //(String) 转换单位
				selectorBlackList: ['.el-'], // (Array) 指定不转换单位的类
				minPixelValue: 1, //(Number) 默认值1，小于或等于`1px`不转换为视窗单位,
				mediaQuery: false, //(Boolean) 是否在媒体查询时也转换px，默认false
			  }),
		]
	}
	}
})