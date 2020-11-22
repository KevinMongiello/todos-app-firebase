import { useAuth } from "../../../common/hooks/useAuth";

const { Redirect } = require("react-router-dom");

export default function EnforceAuth ({ children, redirectUrl }) {
	const { user } = useAuth();

	return user === false
		? <Redirect to={redirectUrl} />
		: children;
}