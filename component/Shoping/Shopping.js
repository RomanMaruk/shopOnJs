class Shopping {

	heandlerClear() {
		ROOT_SHOPING.innerHTML = '';
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({id, name, price, img}) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-container__name">⚡️${name}</td>
						<td class="shopping-container__price">${price.toLocaleString()}</td>
					</tr>
				`
				sumCatalog += price
			}
		})
		const html = `
			<div class="shopping-container">
			<div class="shopping-close" onClick="shopingPage.heandlerClear()"></div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-container__name">☀️Sum:</td>
						<td class="shopping-container__price">${sumCatalog.toLocaleString()}</td>
					</tr>
				</table>
			</div>
		`
		ROOT_SHOPING.innerHTML = html
	}
}

const shopingPage = new Shopping()