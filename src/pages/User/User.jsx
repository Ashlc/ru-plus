import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Certificate from "./Certificate";
import Settings from "./Settings";

function User() {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center justify-center">
			<div className="w-10/12 flex flex-col gap-6 pb-10 h-full">
				<Certificate />
				<Settings />
			</div>
			<Navigator place={"user"} />
		</div>
	);
}

export default User;
