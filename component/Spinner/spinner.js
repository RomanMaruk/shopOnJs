class Spinner {
	clearSpinner() {
		ROOT_SPINNER.innerHTML = ''
	}
	
	render() {
		const html = `
			<div class="container-spinner">
					<img class="spinner__img" src="component/Spinner/spinner.svg" alt="spinner" />
			</div>
		`

		ROOT_SPINNER.innerHTML = html
	}
}

const spinnerPage = new Spinner()