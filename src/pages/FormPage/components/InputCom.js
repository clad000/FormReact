const InputCom = ({register,errors,labelText,idName,inputType,rules})=>{
  return(
    <div className="mb-3">
    <label htmlFor={idName} className="form-label">{labelText}</label>
    <input id={idName} type={inputType} className={`form-control ${errors[idName] && "is-invalid"}`}
      {...register(idName,rules)}
      // onChange={(e)=>{
      // setUsername(e.target.value);
    // }}
    />
    {
      errors[idName] && (<div className="invalid-feedback">{errors?.[idName]?.message}</div>)
    }
  </div>
  )
}
export default InputCom