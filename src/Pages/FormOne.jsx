import '../css/one.css'
import Lable1 from '../Components/Lable1';
import GenericData from '../Components/FormOne/GenericData';
import Table from '../Components/FormOne/Table';
import Table2 from '../Components/FormOne/Table2';
import FormHeader from '../Components/FormHeader';

export default function () {
    function addRow(id, lim) {
        // Select the tbody element inside the table
        const tableBody = document.querySelector(id);

        // Create a new row as a string
        // <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        //     <td><input class="generic-data-input" type="text"></td>
        // </tr>
        let newRow = `
        <tr>`
        for (let i = 0; i < lim; i++) {
            newRow += '<td><input class="generic-data-input" type="text"></td>';
        }
        newRow += '</td>'
            ;

        // Insert the new row at the end of the table
        tableBody.insertAdjacentHTML('beforeend', newRow);
    }

    return <>

        <form action="post">
            <FormHeader />
            <div className="section-1">
                <GenericData></GenericData>
                <Table>Education Qualification</Table>
                <Table2>TRAINING &amp; ADDITIONAL QUALIFICATION</Table2>
            </div>
        </form>


    </>
}