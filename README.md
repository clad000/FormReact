# Notes
### 這個專案是使用 React 進行 Form 的練習，以下為筆記。

```js
// React cmd

npm install -g create-react-app
npx create-react-app projectName
npm run start

npm install bootstrap@5.3.1
npm install react-hook-form
npm install axios

```
<br>
<br>

### 問題排除紀錄 2023/8/20 Update
bootstrap 引入方式   `import 'bootstrap/dist/css/bootstrap.min.css';`

components 的 CSS 引入方式   `import './index.css';`

components 的 useState、useEffect、useForm 引入方式   `使用 props 或 import`

json 檔案的路徑引入方式   `json 要放在 public 路徑下`

待釐清
1. bootstrap 的 error message 方法
3. useForm 的 getValue().city 用意
3. select 的 disabled 屬性
4. 直接 props {children} 用意

優化
1. radio 和 checkbox 的 components 可以共用








