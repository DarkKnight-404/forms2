import Lable1 from "../Lable1";
import JobDetailsInp from "./JobDetailsInp";
import JobInputTablets from "./JobInputTablets";
import JobSelectInputTablet from "./JobSelectInputTablet";
import MendatoryReq from "./MendatoryReq";

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
                <div id="tbl_3">
                    <table className="content-table">
                        <tbody>
                            <MendatoryReq>Knowledge</MendatoryReq>
                            <MendatoryReq>Skill</MendatoryReq>
                            <MendatoryReq>Abilities</MendatoryReq>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}