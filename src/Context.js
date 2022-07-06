import React, {useState, useEffect, useReducer} from "react"


const Context = React.createContext()

const emailReducer = (state, action) => {
    if (action.type === "INPUT_TYPE") {
        return {value: action.val, isValid: action.val.includes("@")}
    }
    return {value: "", isValid: null};
}

const passwordReducer = (state, action) => {
    if (action.type === "INPUT_TYPE") {
        return {value: action.val, isValid: action.val.trim().length > 6}
    }
    return {value: "", isValid: null};
}

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: null})
    const [validButton, setValidButton] = useState(false)
    const [displayNav, setDisplayNav] = useState(false)
    const [showNav, setShowNav] = useState(true)
    
    // https://ikay995.github.io/nike-project/images.json
    useEffect(()=> {
        fetch('./images.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => res.json())
        .then(data => setAllPhotos(data))
        
  },[])

  useEffect(()=>{
      setValidButton(emailState.isValid && passwordState.isValid)
    }, [emailState.isValid, passwordState.isValid])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }

    const emailChangeHandler = (x) => {
        dispatchEmail({type: "INPUT_TYPE", val: x})
    }
    const passwordChangeHandler = (x) => {
        dispatchPassword({type: "INPUT_TYPE", val: x})
    }
    const submitFormHandler = (x) => {
        x.preventDefault()
        setDisplayNav(true)
        console.log(displayNav)
    }

    const loggedOut=()=>{
        setDisplayNav(false)
        setValidButton(false)
        setShowNav(false)
    }
    const handleClick=()=>{
       setShowNav(false)
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart,
            emailState,
            passwordState,
            validButton,
            emailChangeHandler,
            passwordChangeHandler,
            submitFormHandler,
            displayNav,
            loggedOut,
            showNav,
            handleClick
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}