import FormHeader from "../Components/FormHeader";
import JobDetailsInp from "../Components/JobDesc/JobDetailsInp";
import JobInputTablets from "../Components/JobDesc/JobInputTablets";
import JobSelectInputTablet from "../Components/JobDesc/JobSelectInputTablet";
import MendatoryReq from "../Components/JobDesc/MendatoryReq";
import TableOne from "../Components/JobDesc/TableOne";
import TableThree from "../Components/JobDesc/TableThree";
import TableTwo from "../Components/JobDesc/TableTwo";
import Lable1 from "../Components/Lable1";

export default function () {
    return <>
        <div id="form-container">
            <form action="post">
                <FormHeader />
                <div className="section-1">

                    {/* first form div one */}
                    <TableOne>Job Description</TableOne>


                    {/* Second form div two */}
                    <TableTwo>Mandatory Requirement</TableTwo>



                    {/* Third form div three */}
                    <TableThree>Other Details</TableThree>
                </div>
            </form>
        </div>

    </>
}