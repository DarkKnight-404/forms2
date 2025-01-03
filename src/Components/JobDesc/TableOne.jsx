import Lable1 from "../Lable1";
import JobDetailsInp from "./JobDetailsInp";
import JobInputTablets from "./JobInputTablets";
import JobSelectInputTablet from "./JobSelectInputTablet";

export default function ({children}) {
    return <>
        <div>
            <Lable1>{children}</Lable1>
            <div className="table-form-1" style={{ overflowX: "auto" }}>
                <div id="tbl_3">
                    <table className="content-table">

                        <tbody>
                            <tr>

                                <JobInputTablets inpType={'text'} txtLim={30}>Job Title</JobInputTablets>
                                <JobInputTablets inpType={'text'} txtLim={10}>Job Code</JobInputTablets>

                            </tr>
                            <tr>

                                <JobInputTablets inpType={'text'} txtLim={30}>Grade</JobInputTablets>
                                <JobInputTablets inpType={'text'} txtLim={30}>Business Vertical</JobInputTablets>

                            </tr>
                            <tr>

                                <JobInputTablets inpType={'text'} txtLim={30}>Qualification</JobInputTablets>
                                <JobInputTablets inpType={'text'} txtLim={30}>Function</JobInputTablets>

                            </tr>
                            <tr>

                                <JobInputTablets inpType={'text'} txtLim={30}>Work Experience</JobInputTablets>
                                <JobInputTablets inpType={'text'} txtLim={30}>Sub Function</JobInputTablets>

                            </tr>
                            <tr>

                                <JobSelectInputTablet optnsArr={["Individual Contributor", "Team Management"]}>Position Type</JobSelectInputTablet>
                                <JobInputTablets inpType={'text'} txtLim={40}>Work Location</JobInputTablets>


                            </tr>
                            <tr>

                                <JobSelectInputTablet optnsArr={["Full Time (WFO)", "Full Time (WFH)", "Retainer", "Contract", "Part Time", "Output Based"]}>Position Category</JobSelectInputTablet>
                                <JobSelectInputTablet optnsArr={["Options 1", "Options 2", "Options 3", "Options 4"]}>Renumeration &amp; Benefits Type</JobSelectInputTablet>

                            </tr>
                            <tr>

                                <JobSelectInputTablet optnsArr={["General Shift", "EU Shift", "US Shift", "Rotational Shifts (3 Shift Format)"]}>Position Schedule</JobSelectInputTablet>
                                <JobSelectInputTablet optnsArr={["No Travel", "Occasional", "Extensive"]}>Traveling Requirement</JobSelectInputTablet>

                            </tr>
                            <tr>
                                <td className="form_jobdesc_label">Job Brief</td>
                                <td colSpan={3}>
                                    {/* <input class="generic-data-input form_jobdesc_input" type="text" style="width: 90%;"> */}
                                    <textarea
                                        style={{
                                            width: "100%",
                                            height: "10ch",
                                            backgroundColor: "transparent"
                                        }}
                                        className="TextAreaOne"
                                        maxLength={500}
                                        defaultValue={""}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="form_jobdesc_label" rowSpan={8}>
                                    Job Details
                                </td>
                                <td colSpan={3}>
                                    <span style={{ float: "left", marginTop: 10 }}>1.</span>
                                    <input
                                        className="generic-data-input form_jobdesc_input"
                                        type="text"
                                        style={{ width: "90%" }}
                                        maxLength="150ch"
                                    />
                                </td>
                            </tr>
                            <JobDetailsInp></JobDetailsInp>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
}