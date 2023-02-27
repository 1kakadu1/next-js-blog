import { useRef } from 'react';

export const useHTMLRefs = <T>() => {
	const revealRefs = useRef<T[]>([]);
	const addToRefs = (el: any) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};
	return {
		addToRefs,
		revealRefs,
	};
};
