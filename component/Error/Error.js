class Error {

	render() {
		const html = `
			<div class="error-container">
				<div class="error-element">
					<h1 class="error-element__text">Page can't to be loaded</h1>
					<h1 class="error-element__text">Try late</h1>
				</div>
			</div>
		`;

		ROOT_ERROR.innerHTML = html;
	}
}

const errorPage = new Error()