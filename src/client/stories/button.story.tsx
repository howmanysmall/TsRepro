import Button from "client/components/button";
import Roact from "@rbxts/roact";
import { withHookDetection } from "@rbxts/roact-hooked";
import type { IRoactStoryWithControls } from "../flipbook";

Roact.setGlobalConfig({
	elementTracing: true,
	internalTypeChecks: true,
	propValidation: true,
	typeChecks: true,
});

interface IControls {
	useBoldFont: boolean;
}

withHookDetection(Roact);
const story: IRoactStoryWithControls<IControls> = {
	controls: {
		useBoldFont: false,
	},

	name: "Button.story",
	roact: Roact,
	story: ({ controls }) => {
		const { useBoldFont } = controls;
		return (
			<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
				<Button
					Key="Button"
					fontFace={
						useBoldFont
							? new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Heavy)
							: new Font("rbxasset://fonts/families/GothamSSm.json")
					}
				/>
			</frame>
		);
	},

	summary: "The repro component. To break Flipbook, change the source file.",
};

export = story;
