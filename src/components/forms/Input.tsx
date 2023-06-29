import isEmail from 'validator/lib/isEmail'

import { ChangeEvent, DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react'

export interface InputAttributes extends React.InputHTMLAttributes<HTMLInputElement> { }
export interface EmailInputAttributes extends InputAttributes {
	emailValidate: Dispatch<SetStateAction<boolean>>,
}

export default function Input(attributes: InputAttributes) {
	return <input {...attributes} />
}

export function EmailInput(attributes: EmailInputAttributes) {
	const [isTouched, toggleTouch] = useState<boolean>(false)
	const [isValid, toggleValid] = useState<boolean>(false)

	const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
		const validated = isEmail(e.target.value)
		toggleTouch(true)

		toggleValid(validated)
		attributes.emailValidate(validated)
	}

	return (
		<>
			<input
				onBlur={validateEmail}
				// required={required}
				{...attributes}
			/>
			{!isValid && isTouched && (
				<div className="text-sm text-red-500 mt-2">
					Email tidak valid
				</div>
			)}
		</>
	)
}