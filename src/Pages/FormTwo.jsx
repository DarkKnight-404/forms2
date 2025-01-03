import FormHeader from "../Components/FormHeader";
import TableOne from "../Components/FormTwo/TableOne";
import TableThree from "../Components/FormTwo/TableThree";
import TableTwo from "../Components/FormTwo/TableTwo";
import '../css/two.css'

export default function () {
    return <>
        <div id="form-container">
            <form action="post">
                <FormHeader/>
                <div className="section-1">
                    <TableOne/>
                    <TableTwo/>
                    <TableThree/>
                </div>
            </form>
        </div>


    </>
}