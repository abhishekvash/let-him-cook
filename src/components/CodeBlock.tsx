import hljs from "highlight.js";
import { useEffect } from "react";
import "highlight.js/styles/felipec.min.css";

export function CodeBlock({
	filename,
	contents,
}: {
	filename: string;
	contents: string;
}) {
	useEffect(() => {
		hljs.highlightAll();
	}, []);
	return (
		<div className="max-w-[95vw] overflow-x-auto">
			<p className="mb-1 text-sm font-light">{filename}</p>
			<pre>
				<code className="hljs">{contents}</code>
			</pre>
		</div>
	);
}
