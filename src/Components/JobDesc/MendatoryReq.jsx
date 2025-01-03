export default function ({children}) {
    return <>
        <tr>
            <td className="form_jobdesc_label">{children}</td>
            <td style={{ width: "30ch" }}>
                <input
                    className="generic-data-input form_jobdesc_input"
                    type="text"
                />
            </td>
            <td style={{ width: "30ch" }}>
                <input
                    className="generic-data-input form_jobdesc_input"
                    type="text"
                />
            </td>
            <td style={{ width: "30ch" }}>
                <input
                    className="generic-data-input form_jobdesc_input"
                    type="text"
                />
            </td>
            <td style={{ width: "30ch" }}>
                <input
                    className="generic-data-input form_jobdesc_input"
                    type="text"
                />
            </td>
        </tr>
    </>
}