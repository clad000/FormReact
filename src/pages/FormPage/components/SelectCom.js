const SelectCom =({register,errors,taiwanData,getValues,children})=>{


  return(
  <div className="row mb-3 g-3">
    <div className='col-6'>
      <label htmlFor='city' className='form-label'>縣市</label>
      <select id="city" className={`form-select ${errors.city && "is-invalid"}`} {...register("city",{required: "縣市為必填"})} disabled ={false}>
        {/* problem children */}
        <option value="">請選擇縣市</option>
        {/* use arr.map() render option */}
        {
          taiwanData.map((city)=>{
            return <option value={city.CityName} key={city.CityEngName}>{city.CityName}</option>
          })
        }
        {children}
      </select>
      {
        errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)
      }
    </div>
    <div className='col-6'>
      <label htmlFor='district' className="form-label">鄉鎮市區</label>
      {/* problem disable ? */}
      {/* problem bootstrap error message */}
      <select id="district" className={`form-select ${errors.district && "is-invalid"}`}  {...register("district",{required: "鄉鎮市區為必填"})} disabled={!getValues().city}>
        <option value="">請選擇鄉鎮市區</option>
        {/* problem useForm 的 getValues().city 是指html 選到甚麼值?，選完縣市->鄉鎮不會自動篩選->useWatch 監控?*/}
        {
          taiwanData.find((city) => city.CityName === getValues().city)?.AreaList?.map((area) => {
            return <option value={area} key={area.AreaName}>{area.AreaName}</option>
          })
        }
      </select>
      {
        errors.district && (<div className="invalid-feedback">{errors.district.message}</div>)
      }
    </div>
  </div>
    

  )
}

export default SelectCom