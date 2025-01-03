export default function ({ children, inpType, txtLim }) {
    return <>
        <td className="form_jobdesc_label">{children}</td>
        <td style={{ width: 400 }}>
            <input
                className="generic-data-input form_jobdesc_input"
                type={inpType}
                maxLength={txtLim}
            />
        </td>
    </>
}