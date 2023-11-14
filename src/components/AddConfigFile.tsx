import { RecipeActions, RecipeContext } from "@/contexts/RecipeContext";
import { useContext, useRef, useState } from "react";

export function AddConfigFile() {
	const { changeRecipe } = useContext(RecipeContext)!;

	const dialog = useRef<HTMLDialogElement>(null);
	const [fileName, setFileName] = useState("");
	const [fileContents, setFileContents] = useState("");

	function handleClose() {
		if (dialog.current?.returnValue === "save") {
			const file = {
				[fileName]: fileContents,
			};

			changeRecipe({
				type: RecipeActions.ADD_FILE,
				payload: file,
			});

			setFileName("");
			setFileContents("");
		}
	}

	return (
		<>
			<button
				className="btn btn-outline btn-primary btn-sm mb-4 rounded text-2xl"
				onClick={() => dialog.current?.showModal()}
			>
				+
			</button>
			<dialog ref={dialog} className="modal" onClose={handleClose}>
				<div className="modal-box grid w-11/12 max-w-5xl gap-2 rounded">
					<label htmlFor="name" className="font-semibold">
						File Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="vite.config.ts (include the file extension for pretty highlighting!)"
						required
						value={fileName}
						onChange={e => setFileName(e.target.value)}
						className="input input-bordered input-md mb-4 w-full rounded"
					/>
					<label htmlFor="description" className="font-semibold">
						File Contents
					</label>
					<textarea
						name="description"
						id="description"
						rows={4}
						placeholder="export default defineConfig({
	// something here
});"
						className="textarea textarea-bordered mb-4 w-full rounded"
						value={fileContents}
						onChange={e => setFileContents(e.target.value)}
					/>

					<div className="modal-action">
						<form className="flex gap-2" method="dialog">
							<button
								value="save"
								className="btn btn-primary btn-sm rounded"
							>
								Save
							</button>
							<button
								value="cancel"
								className="btn btn-outline btn-primary btn-sm rounded"
							>
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
