import React from "react";

function Button({ text, func }) {
	return (
		<button
			type="button"
			onClick={func}
			className="w-full flex justify-center items-center border
      		border-white rounded-2xl h-10 text-white font-bold text-md
	  		focus:outline-stdorange
	  		active:bg-whiteactive:text-stdblue
			disabled:bg-silver disabled:text-white">
			<p className="select-none">{text}</p>
		</button>
	);
}

export default Button;
