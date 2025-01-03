import { useState } from "react";
import Lable1 from "../Lable1";

export default function ({ children }) {

    function addDataCount(){
        setDataCount((prev)=>prev+1);
    }
    const [dataCount, setDataCount] = useState(1);
    return <>
        <div>
            <Lable1>{children}</Lable1>
            <div id="form_1" style={{ overflowX: "auto" }}>
                <div id="tbl_resp">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center", width: "10%" }}>Sr no.</th>
                                <th style={{ textAlign: "center" }}>Responsibility</th>
                                <th style={{ textAlign: "center", width: 300 }}>Details </th>
                                <th style={{ textAlign: "center" }}>
                                    Weightage of Activity (%)
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