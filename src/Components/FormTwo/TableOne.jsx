import { useState } from "react";
import Lable1 from "../Lable1";

export default function () {
    const [dataCount, setDataCount] = useState(3);


    function addRow() {
        setDataCount((prev) => {
            return prev + 1;
        });
    }


    return <>
        <div>
            <Lable1>Technical Skills (Top 3)</Lable1>
            <div className="table-form-1" style={{ overflowX: "auto" }}>
                <div id="tbl_3">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center", width: 50 }}>Skill Name</th>
                                <th style={{ textAlign: "center", width: 100 }}>
                                    Level Of Proficiency
                                </th>
                                <th style={{ textAlign: "center", width: 700 }}>
                                    Knowledge Application Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: dataCount }, (_, index) => (

                                <tr>
                                    <td style={{ width: 1 }}>
                                        <div className="select">
                                            <select
                                                id="standard-select"
                                                className="select_optns"
                                                style={{}}
                                            >
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                                <option value="Option 4">Option 4</option>
                                                <option value="Option 5">Option 5</option>
                                                <option value="Option length">
                                                    Option that has too long of a value to fit
                                                </option>
                                            </select>
                                            <span className="focus" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="select">
                                            <select
                                                id="standard-select"
                                                className="select_optns"
                                                style={{ width: 150 }}
                                            >
                                                <option value="Option 1">Basic Knowledge</option>
                                                <option value="Option 2">Practical Application</option>
                                                <option value="Option 3">
                                                    Project Level Execution
                                                </option>
                                                <option value="Option 4">Subject Matter Expert</option>
                                            </select>
                                            <span className="focus" />
                                        </div>
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
                        onClick="addTable_3_Row()"
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
                            marginTop: 20,
                            display: "none"
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    </>
}