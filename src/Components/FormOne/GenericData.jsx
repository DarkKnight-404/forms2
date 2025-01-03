export default function () {


    
    return <>
        <div style={{ width: "100%", textAlign: "center", height: 20 }}>
            <div className="section-1-title" style={{ margin: 10 }}>
                Personal Data
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="middle-name">Middle Name</label>
            <input type="text" id="middle-name" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="fathers-name">Father's/Spouse Name</label>
            <input type="text" id="fathers-name" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
                type="date"
                id="dob"
                className="generic-data-input"
                style={{ alignItems: "center", textAlign: "center" }}
            />
        </div>
        <div className="form-group">
            <label htmlFor="nationality">Nationality</label>
            <input type="text" id="nationality" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="marital-status">Marital Status</label>
            <input
                type="text"
                id="marital-status"
                className="generic-data-input"
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" className="generic-data-input" />
        </div>
        <div className="form-group">
            <label htmlFor="contact-number">Contact Number</label>
            <input
                type="text"
                id="contact-number"
                className="generic-data-input"
            />
        </div>
        <div className="form-group">
            <label htmlFor="present-address">Present Address</label>
            <input
                type="text"
                id="present-address"
                className="generic-data-input"
            />
        </div>
        <div className="form-group">
            <label htmlFor="permanent-address">Permanent Address</label>
            <input
                type="text"
                id="permanent-address"
                className="generic-data-input"
            />
        </div>
    </>
}