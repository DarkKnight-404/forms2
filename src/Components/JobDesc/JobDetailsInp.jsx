export default function () {
    return <>
        {Array.from({ length: 7 }, (a,k) => (
            <>
                <tr>
                    <td colSpan={3}>
                        <span style={{ float: "left", marginTop: 10 }}>{k+2}.</span>
                        <input
                            className="generic-data-input form_jobdesc_input"
                            type="text"
                            style={{ width: "90%" }}
                            maxLength="150ch"
                        />
                    </td>
                </tr>
            </>
        ))}
    </>
}