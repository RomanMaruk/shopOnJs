class Header {

	render(counter) {
		const html = `
			<div class="header-container">
				<div class="header-counter">📦${counter}</div>
			</div>
		`;

		ROOT_HEADER.innerHTML = html
	}

}


const products = localStorageUtil.getProducts()
const headerPage = new Header()
headerPage.render(products.length)