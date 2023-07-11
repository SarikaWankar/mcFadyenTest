import {UPDATE_PRODUCT_DETIALS} from '../actions/actionType'
const initialState={
    productDetails: {
        id:1,
        productName:"JONATHAN SIMKHAI",
        details:"Lurex Linen Viscose Jacket in Conchiglia",
        price:'225',
        colors:[{name:'Conchiglia',path:"",selected:true},{name:'Block',path:"",selected:false}],
        size:[
            {name:'XS',selected:true,available:true},
            {name:'S',selected:false,available:true},
            {name:'M',selected:false,available:false},
            {name:'L',selected:false,available:true},
            {name:'XXL',selected:false,available:true}],
        
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_DETIALS:
            return {
                ...state,
                productDetails:action.payload
            }
        default:return state
    }
}
export default reducer;