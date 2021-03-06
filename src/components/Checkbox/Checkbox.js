import React from 'react'

export default function Checkbox({handleChangeSale}) {
    return (
        <div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox"
                    className="form-check-input"
                    onChange={e => handleChangeSale(e.target.checked)}
                    data-testid="on-sale-checkbox"
                    />On Sale
                </label>
            </div>
        </div>
    )
}
