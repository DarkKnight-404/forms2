import { useState } from "react";
import Lable1 from "../Lable1"

export default function ({ children }) {

    const [dataCount, setDataCount] = useState(2);


    function addRow() {
        setDataCount((prev) => {
            return prev + 1;
        });
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
                                {Array.from({ length: dataCount }, () => {
                                    return <>
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
                                    </>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="add_btn">
                        <button
                            type="button"
                            onClick={() => { addRow() }}
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