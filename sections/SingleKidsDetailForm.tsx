import { useEffect } from "react";
import Input from "../components/Input";
import ordinal from "ordinal";

const SingleKidsDetailForm = ({ kidsDetailProps }) => {
    const { index, values, errorVals, changeHandler } = kidsDetailProps

    const fullNameProps = { 
        label: "Full Name",
        type: "text",
        placeholder: "",
        name: `fullName-${index}`,
        value: values.fullName,
        changeHandler,
        errorText: errorVals.fullName
    }

    const birthdayProps = { 
        label: "Birthday",
        type: "date",
        placeholder: "Select Date",
        name: `birthday-${index}`,
        value: values.birthday,
        changeHandler,
        errorText: errorVals.birthday
    }

    const allergiesProps = { 
        label: "Allergies",
        type: "text",
        placeholder: "Any allergies we should know of?",
        name: `allergies-${index}`,
        value: values.allergies,
        changeHandler,
        errorText: errorVals.allergies
    }

    const emergencyContactProps = { 
        label: "Emergency Contact",
        type: "text",
        placeholder: "Enter a valid phone number",
        name: `emergencyContact-${index}`,
        value: values.emergencyContact,
        changeHandler,
        errorText: errorVals.emergencyContact
    }

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <section className="w-full mb-8">
            <h3 className="font-lato text-base text-dark mb-3">
                {`${ordinal(+index + 1)} Kid`}
            </h3>
            <Input inputProps={ fullNameProps } />
            <Input inputProps={ birthdayProps } />
            <Input inputProps={ allergiesProps } />
            <Input inputProps={ emergencyContactProps } />
        </section>
    )
}

export default SingleKidsDetailForm