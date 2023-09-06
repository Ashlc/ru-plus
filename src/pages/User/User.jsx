import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Certificate from "./Certificate";
import Settings from "./Settings";

function User() {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center pt-4 tall:pt-14">
			<div className="w-10/12 flex flex-col gap-8 tall:gap-14">
				<Certificate />
				<Settings />
			</div>
			<Navigator place={"user"} />
		</div>
	);
}

export default User;
