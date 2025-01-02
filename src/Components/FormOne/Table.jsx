import { useState } from "react"
import Lable1 from "../Lable1"

export default function ({ children }) {

    const [dataCount, setDataCount] = useState(2);


    function addRow() {
        setDataCount((prev)=>{
            return prev+1;
        });
    }



    function Attributes() {
        return <>
            <thead>
                <tr>
                    <th style={{ textAlign: "center", width: "20%" }}>
                        Qualification
                    </th>
                    <th style={{ textAlign: "center", width: "20%" }}>
                        University/Institute
                    </th>
                    <th style={{ textAlign: "center", width: "20%" }}>
                        Year of Passing
                    </th>
                    <th style={{ textAlign: "center", width: "20%" }}>
                        % Marks
                    </th>
                    <th style={{ textAlign: "center", width: "20%" }}>
                        Major Subject
                    </th>
                </tr>
            </thead>
        </>
    }
    return <>
        <div id="form_1" className="forms">
            <Lable1>{children}</Lable1>


            <div className="table-form-1" style={{ overflowX: "auto" }}>

                <div id="tbl_1">
                    <table className="content-table">

                        <Attributes />

                        {Array.from({ length: dataCount }, (_, index) => (
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
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                </tr>
                            </tbody>

                        ))}

                    </table>
                </div>
                <div className="add_btn">
                    <button
                        type="button"
                        onClick={() => { addRow()}}
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