class Header {

	hendlerOpenShoppingPage() {
		shopingPage.render()
	}

	render(counter) {
		const html = `
			<div class="header-container">
				<div class="header-counter" onClick="headerPage.hendlerOpenShoppingPage();">
					📦${counter}
				</div>
			</div>
		`;

		ROOT_HEADER.innerHTML = html
	}

}


const headerPage = new Header()
