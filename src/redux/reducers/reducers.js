import { UPDATE_PRODUCT_DETIALS } from '../actions/actionType'
const initialState = {
    productDetails: {
        id: 1,
        productName: "JONATHAN SIMKHAI",
        details: "Lurex Linen Viscose Jacket in Conchiglia",
        price: '225',
        colors: [{ name: 'Conchiglia', path: "", selected: true }, { name: 'Block', path: "", selected: false }],
        size: [
            { name: 'XS', selected: true, available: true },
            { name: 'S', selected: false, available: true },
            { name: 'M', selected: false, available: false },
            { name: 'L', selected: false, available: true },
            { name: 'XXL', selected: false, available: true }],
        links: ["Jonathan Simkhai", "Blazers", "Viscose"],
        note: "a note from the editor ",
        discription: " The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.",
        auther: "By MINNA SHIM, Fashion Editor"

    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_DETIALS:
            return {
                ...state,
                productDetails: action.payload
            }
        default: return state
    }
}
export default reducer;