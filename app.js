let CATALOG = []

// spinnerPage.render()
function render() {
	const productsStorege = localStorageUtil.getProducts()

	headerPage.render(productsStorege.length)
	productsPage.render()

}

fetch('server/catalog.json')
	.then(response => response.json())
	.then(data => {
		CATALOG = data
		spinnerPage.clearSpinner()
		render()
	})
	.catch(error => {
		spinnerPage.clearSpinner()
		errorPage.render()
	})

