import Roact from "@rbxts/roact";
import { IStorybook } from "./flipbook";

const ReproStorybook: IStorybook = {
	name: "Repro",
	roact: Roact,
	storyRoots: [script.Parent!.FindFirstChild("stories")!],
};

export = ReproStorybook;
