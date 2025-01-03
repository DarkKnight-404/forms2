import { useState } from "react"
import Lable1 from "../Lable1";

export default function () {

    function addDataCount(){
        setDataCount((prev)=>prev+1);
    }
    const [dataCount, setDataCount] = useState(1);
    return <>
        <div>
            <Lable1>EXPERIENCE DETAILS: Total Experience</Lable1>
            <div id="form_1" style={{ overflowX: "auto" }}>
                <div id="tbl_exp">
                    <table
                        className="content-table"
                        style={{ width: 900, maxWidth: "none" }}
                    >
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}>Organisation Name</th>
                                <th style={{ textAlign: "center" }}>Designation</th>
                                <th style={{ textAlign: "center" }}>Grade</th>
                                <th style={{ textAlign: "center" }}>Period from</th>
                                <th style={{ textAlign: "center" }}>Period to</th>
                                <th style={{ textAlign: "center", width: 100 }}>
                                    gros salary At Joining
                                </th>
                                <th style={{ textAlign: "center", width: 100 }}>
                                    gros salary At Leaving
                                </th>
                                <th style={{ textAlign: "center", width: 200 }}>
                                    Reason for Exit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: dataCount }, () => (
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
                                        <input className="generic-data-input" type="date" />
                                    </td>
                                    <td>
                                        <input className="generic-data-input" type="date" />
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
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="add_btn">
                    <button
                        type="button"
                        onClick={()=>{addDataCount()}}
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
    </>
}