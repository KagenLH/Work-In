import './FormErrors.css';

export default function FormErrors({ errors, keyword, context }) {
    return (
        <ul className="form-errors">
            {errors?.filter(error => error.toLowerCase().includes(keyword))
                    .map(error => (
                        <li key={error} className="form-error">
                            {error}
                        </li>
                    ))}
        </ul>
    )
}