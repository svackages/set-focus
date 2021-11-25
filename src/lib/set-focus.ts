declare interface IActionReturn<T> {
    update?: (parameters: T) => void,
	destroy?: () => void
}

export const setFocus = (node: HTMLElement): IActionReturn<HTMLElement> => {
    const elementFocused = document.activeElement as HTMLElement;
    node.querySelector<HTMLElement>('a, button').focus();
    
	return {
		destroy(): void {
			elementFocused.focus()
		}
	};
};
