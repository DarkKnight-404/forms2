export default function ({children}) {
    return <>
        <div>
            <div
                className="section-1-title"
                style={{ width: "100%", textAlign: "center", marginTop: 30 }}
            >
                {children}
            </div>
            <div className="table-form-1" style={{ overflowX: "auto" }}>
                <div id="tbl_3" style={{ width: "100%" }}>
                    {/* <td class="form_jobdesc_label">
                                      
                                  </td> */}
                    <textarea
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            height: "10ch",
                            backgroundColor: "transparent"
                        }}
                        className="TextAreaOne"
                        maxLength={500}
                        defaultValue={""}
                    />
                </div>
            </div>
        </div>
    </>
}