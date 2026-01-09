type ButtonProps = {
	title: string
	onClickHandler: () => void
	disabled: boolean
}

export const Button = ({ title, onClickHandler, disabled }: ButtonProps) => {
	return (
		<button
			onClick={onClickHandler}
			disabled={disabled}
			className="bg-[#FF5F00] text-white font-semibold  text-[16px] px-[70px] py-[26px] rounded-[16px] transition-all duration-200 hover:bg-white focus:ring-2 focus:ring-[#B4B4B4] hover:ring-2 hover:ring-[#B4B4B4] hover:text-gray-600"
		>
			<span>{title} </span>
		</button>
	)
}
