import {El} from "./Element.styled"
export const Element = ({ label, percentage }) => {
    return (
        <El>
            <span >{label}</span>
            <span >{percentage}</span>
        </El>
    );
};