export default function () {

    function addRow(id,lim) {
        // Select the tbody element inside the table
        const tableBody = document.querySelector(id);

        // Create a new row as a string
        // <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        // </tr>
        let newRow = `
        <tr>`
        for(let i=0;i<lim;i++){
            newRow+='<td><input class="generic-data-input" type="text"></td>';
        }    
        newRow+='</td>'
        ;

        // Insert the new row at the end of the table
        tableBody.insertAdjacentHTML('beforeend', newRow);
    }



    return <>
        <div style={{ width: "600px", textAlign: "center", height: 20 }}>
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