import { useRef, useEffect } from "react";

export default function Form() {

    const options = {
        formId: process.env.REACT_APP_FORM_ID,
        baseUrl: process.env.REACT_APP_BASE_URL,
        basePath: "/sup/hello",
    }

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (element.current) {
            // @ts-ignore
            const form = new OpenForms.OpenForm(element.current, options);
            form.init();
        }
    }, [])

    return (
        <div ref={element}>Loading form...</div>
    )

}