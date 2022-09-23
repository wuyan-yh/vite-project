import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';//如果找不到path，则执行npm install @type/node --sava-dev
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),//配置别名，将@指向'src'目录
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8000,//设置端口号，如果端口号已经被占用，vite将会使用下一个可用端口号
    hmr: true,//开启热更新
    proxy: {
      '/api': {
        target: 'http://10.213.239.171:8080',//代理的地址
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
    }
    },
  },
})
