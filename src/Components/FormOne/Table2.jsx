import Lable1 from "../Lable1"

export default function ({children}) {

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
        <div id="form_2" className="forms">
            <Lable1>{children}</Lable1>
            <div className="table-form-1" style={{ overflowX: "auto" }}>

                <div id="form_2">
                    <div id="tbl_2">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", width: "20%" }}>
                                        Course/Programme Name
                                    </th>
                                    <th style={{ textAlign: "center", width: "20%" }}>
                                        Institute Name
                                    </th>
                                    <th style={{ textAlign: "center", width: "20%" }}>
                                        Year of Completion
                                    </th>
                                    <th style={{ textAlign: "center", width: "20%" }}>
                                        Skill Acquired
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="add_btn">
                        <button
                            type="button"
                            onclick={() => { addRow('#tbl_2 .content-table', 4) }}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: 24,
                                fontWeight: "bold",
                                border: "2px solid black",
                                backgroundColor: "white",
                                margin: "auto",
                                marginTop: 20
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}