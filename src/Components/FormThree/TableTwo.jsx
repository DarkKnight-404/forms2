import { useState } from "react";
import Lable1 from "../Lable1";

export default function ({ children }) {

    function addLangRow() {
        setLangDataCount((prev) => {
            return prev + 1;
        })
    }
    function addHobbiesDataCount() {
        setHoobiesDataCount((prev) => prev + 1);
    }
    const [langDataCount, setLangDataCount] = useState(2);
    const [hoobiesDataCount, setHoobiesDataCount] = useState(2);

    return <>
        <div>
            <div style={{ width: "100%", display: "inline-block" }}>
                <div id="lang_info" style={{ float: "left", minWidth: "none" }}>
                    <Lable1>ADDITIONAL INFORMATION</Lable1>
                    <table className="content-table" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center", width: "20%" }}>
                                    Language
                                </th>
                                <th style={{ textAlign: "center", width: "20%" }}>Read</th>
                                <th style={{ textAlign: "center", width: "20%" }}>Write</th>
                                <th style={{ textAlign: "center", width: "20%" }}>Speak</th>
                            </tr>
                        </thead>
                        <tbody>

                            {Array.from({ length: langDataCount }, () => (
                                <tr>
                                    <td>
                                        <input className="generic-data-input" type="text" />
                                    </td>
                                    <td>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    </td>
                                    <td>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    </td>
                                    <td>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div className="add_btn">
                        <button
                            type="button"
                            onClick={() => { addLangRow() }}
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
                <div id="hobbies" style={{ float: "right", minWidth: "none" }}>
                    <Lable1>ADDITIONAL INFORMATION</Lable1>
                    <table
                        className="content-table"
                        style={{ width: "100%", float: "right", marginBottom: 20 }}
                    >
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center", width: "20%" }}>Hobbies</th>
                                <th style={{ textAlign: "center", width: "20%" }}>Intrest</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: hoobiesDataCount }, () => (
                                <tr>
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
                    <div className="add_btn" style={{ paddingTop: 20 }}>
                        <button
                            type="button"
                            onClick={() => { addHobbiesDataCount() }}
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
                                marginTop: 40
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