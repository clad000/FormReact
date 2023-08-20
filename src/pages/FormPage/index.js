import axios from "axios";
import React from 'react';
import InputCom from "./components/InputCom.js";
import SelectCom from "./components/SelectCom.js";
// 類似 App()
const FormCom = ({useForm,useWatch})=>{
  // const [usernameState,setUsername]= useState(""); 
  const {useState,useEffect} = React;
  const {register,handleSubmit,getValues,formState:{errors},control} = useForm(); 
  // console.log(useForm);
  // console.log(errors.username);
  const [taiwanState,setTaiwan] = useState([]);


  useEffect(()=>{
    (async()=>{
      const taiwanData = await axios.get("/assets/taiwan.json");
      // console.log(taiwanData.data);
      setTaiwan(taiwanData.data);
    })();
  },[])

  const watchForm = useWatch({control});
  // console.log("watchForm:",watchForm);
  
  const onSubmit =(data)=>{
    console.log("SubmitData:",data);
  }
  
  return<>
    <form action="" onSubmit={handleSubmit(onSubmit)} className="mainForm">
      {/* account */}
      <InputCom 
        register = {register}
        errors = {errors}
        labelText = "使用者名稱"
        idName = "username"
        inputType = "text"
        rules = {
          {required:{
            value: true,
            message: "使用者名稱必填"
          }}
        }
      />
      {/* password */}
       <InputCom 
        register = {register}
        errors = {errors}
        labelText = "密碼"
        idName = "password"
        inputType = "password"
        rules = {
          {required:{
            value: true,
            message: "密碼必填"
          }}
        }
      />
      <InputCom 
        register = {register}
        errors = {errors}
        labelText = "電話"
        idName = "phonenumber"
        inputType = "tel"
        rules = {
          {required:{
            value: true,
            message: "電話必填"
          }}
        }
      />
      <SelectCom taiwanData={taiwanState} getValues={getValues}  register = {register} errors={errors}/>
      <InputCom 
        register = {register}
        errors = {errors}
        labelText = "地址"
        idName = "address"
        inputType = "text"
        rules = {
          {required:{
            value: true,
            message: "地址必填"
          }}
        }
      />
      {/* RadioCom */}
      <div className="mb-3">
        <label htmlFor="vegetar" className="form-label">食素者</label>
        <input type="radio" name="isVegetar" id="yes-vegetar" className={`form-check-input ${errors.isVegatar && "is-invalid"}`} {...register("isVegatar",{required:"是否選擇吃素"})}  value={true}/> 
        <label htmlFor="yes-vegatar" className="form-check-label">是</label>
        <input type="radio" name="isVegetar" id="non-vegetar" className={`form-check-input ${errors.isVegatar && "is-invalid"}`} {...register("isVegatar",{required:"是否選擇吃素"})} value={false}/> 
        <label htmlFor="non-vegatar" className="form-check-label" >否</label>  
        {
        errors.isVegatar && (<div className="invalid-feedback">{errors.isVegatar.message}</div>)
        }   
      </div>
      <div className="mb-3">
        <input type="checkbox" id="isCheckId" className={`form-check-input ${errors.isCheckId && "is-invalid"}`} {...register("isCheckId",{required:"請勾選同意"})}/>
        <label htmlFor="isCheckId" className="form-check-label">確認同意</label>
        {
        errors.isCheckId && (<div className="invalid-feedback">{errors.isCheckId.message}</div>)
        }   
      </div>
      
      <button type="submit" className="btn btn-primary">註冊</button>
    </form>
  </>


  
}

export default FormCom