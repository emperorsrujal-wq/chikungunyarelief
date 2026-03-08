import { createContext, useContext, useState, useEffect } from 'react';
import { useLocale } from './LocaleContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { isIndia } = useLocale();
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('chikungunya_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Could not parse cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('chikungunya_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
            return;
        }
        setCartItems(prev =>
            prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => {
            // Use local pricing based on context
            const price = isIndia ? item.priceIn : item.priceUs;
            return total + (price * item.quantity);
        }, 0);
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getSubtotal,
        cartCount: cartItems.reduce((total, item) => total + item.quantity, 0)
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
