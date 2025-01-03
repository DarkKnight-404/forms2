import FormHeader from '../Components/FormHeader'
import TableFour from '../Components/FormThree/TableFour'
import TableOne from '../Components/FormThree/TableOne'
import TableThree from '../Components/FormThree/TableThree'
import TableTwo from '../Components/FormThree/TableTwo'
import '../css/three.css'

export default function () {
    return <>
        <div id="form-container">
            <form action="post">
                <FormHeader/>
                <div className="section-1">
                    <TableOne>AWARDS &amp; CERTIFICATIONS</TableOne>
                    <TableTwo>ADDITIONAL INFORMATION</TableTwo>
                    <TableThree>EXPERIENCE DETAILS: Total Experience</TableThree>
                    <TableFour>CURRENT JOB RESPONSIBILITIES</TableFour>
                </div>
            </form>
        </div>

    </>
}