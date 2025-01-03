export default function ({ children, optnsArr }) {


    return <>
        <td className="form_jobdesc_label">{children}</td>
        <td>
            <div className="select" style={{ width: "100%" }}>
                <select
                    id="standard-select"
                    className="select_optns select_optns_JobDesc"
                >
                    {optnsArr != undefined ?
                        optnsArr.map(element => {

                            return <option value="Option 1">{element}</option>;

                        }) : <></>}

                </select>
                <span className="focus" />
            </div>
        </td>
    </>
}