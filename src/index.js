// react cmd------>
// npm install -g create-react-app
// npx create-react-app projectName
// npm run start
// npm install bootstrap@5.3.1
// npm install react-hook-form
// npm install axios
// ------

// problem------>
// bootstrap 引入方式->(install 和 import)Done
// components 的 css 引入方式->(import)Done
// components 的 useState、useEffect、useForm 引入方式->(props 或 import)Done
// useform 的 register(欄位，限制)，handleSubmit
// axios 路徑的引入方式-(install 和 import 和 public 路徑)>Done
// ------



import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useForm, useWatch } from "react-hook-form";
import './index.css';
import "./pages/FormPage/formPage.css";
import FormCom from "./pages/FormPage/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;
// const {useForm,useWatch} = ReactHookForm;S
// const {useForm,useWatch} = ReactHookForm;



root.render(
  <React.StrictMode>
    <FormCom useState={useState} useForm={useForm} useWatch={useWatch} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
