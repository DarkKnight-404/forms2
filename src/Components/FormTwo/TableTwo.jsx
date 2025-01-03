export default function () {
    return <>
        <div>
            <div
                className="section-1-title"
                style={{ width: "100%", textAlign: "center", marginTop: 30 }}
            >
                Professional Skills(Top 3)
            </div>
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
                                    Activity Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
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
                                            <option value="Option 1">Trained</option>
                                            <option value="Option 2">Executed</option>
                                            <option value="Option 3">Performed Well</option>
                                        </select>
                                        <span className="focus" />
                                    </div>
                                </td>
                                <td>
                                    <input className="generic-data-input" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: 50 }}>
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
                                            <option value="Option 1">Trained</option>
                                            <option value="Option 2">Executed</option>
                                            <option value="Option 3">Performed Well</option>
                                        </select>
                                        <span className="focus" />
                                    </div>
                                </td>
                                <td>
                                    <input className="generic-data-input" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: 50 }}>
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
                                            <option value="Option 1">Trained</option>
                                            <option value="Option 2">Executed</option>
                                            <option value="Option 3">Performed Well</option>
                                        </select>
                                        <span className="focus" />
                                    </div>
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
                        onclick="addTable_3_Row()"
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