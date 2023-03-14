import Roact from "@rbxts/roact";
import { markPureComponent, useCallback, useState } from "@rbxts/roact-hooked";

export interface IButtonProps {
	fontFace: Font;
}

export const Button: Roact.FunctionComponent<IButtonProps> = ({ fontFace }) => {
	const [value, setValue] = useState(0);

	const onActivated = useCallback(() => {
		// to break flipbook, change the + 1 to + 2
		setValue(value + 1);
	}, [value]);

	return (
		<textbutton
			AnchorPoint={new Vector2(0.5, 0.5)}
			AutoButtonColor={false}
			AutomaticSize={Enum.AutomaticSize.XY}
			BackgroundColor3={Color3.fromRGB(0, 162, 255)}
			FontFace={fontFace}
			Position={UDim2.fromScale(0.5, 0.5)}
			Text={`Value = ${value}`}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextSize={24}
			Event={{ Activated: onActivated }}
		>
			<uipadding
				Key="UIPadding"
				PaddingBottom={new UDim(0, 8)}
				PaddingLeft={new UDim(0, 18)}
				PaddingRight={new UDim(0, 18)}
				PaddingTop={new UDim(0, 8)}
			/>

			<uicorner CornerRadius={new UDim(0.125, 0)} Key="UICorner" />
		</textbutton>
	);
};

markPureComponent(Button);
export default Button;
