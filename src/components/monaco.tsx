'use client';

import Editor from '@monaco-editor/react';

export function Monaco() {

	return (
		<div>
			<Editor
				height="100%"
				width="50vw"
				defaultLanguage="javascript"
				defaultValue="// start writing code"
				theme="vs-dark"
			/>
		</div>
	);
}
