let CATALOG = []

function render() {
	const productsStorege = localStorageUtil.getProducts()

	headerPage.render(productsStorege.length)
	productsPage.render()

}

fetch('server/catalog.json')
	.then(response => response.json())
	.then(data => {
		CATALOG = data
		render()
	})
	.catch(error => console.log(error))

