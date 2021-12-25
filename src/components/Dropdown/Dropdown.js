import React from 'react'

export default function Dropdown({handleChangeGender}) {
    return (
        <div className="form-group my-4">
            <label htmlFor="gender">Select Gender:</label>
            <select className="form-control" id="gender" onChange={(e)=>handleChangeGender(e.target.value)}>
                {/* <option value=''></option> */}
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='unisex'>Unisex</option>
            </select>
        </div>
    )
}
