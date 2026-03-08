import { X, Minus, Plus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLocale } from '../context/LocaleContext';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, getSubtotal } = useCart();
    const { locale, currency, isIndia } = useLocale();

    const handleCheckout = () => {
        // Payment Gateway Logic
        if (isIndia) {
            alert(`Initiating Razorpay Checkout for India... \nAmount: ₹${getSubtotal()}`);
        } else {
            alert(`Initiating Stripe Checkout for Global/US... \nAmount: $${getSubtotal()}`);
        }
    };

    return (
        <>
            {/* Backdrop overlay */}
            <div
                className={`drawer-backdrop ${isCartOpen ? 'open' : ''}`}
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Sliding Sidebar */}
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header flex justify-between items-center p-4 border-b">
                    <h2 className="flex items-center gap-2 m-0 text-xl font-bold">
                        <ShoppingBag size={24} color="var(--color-primary)" /> Your Cart
                    </h2>
                    <button onClick={() => setIsCartOpen(false)} className="close-btn" aria-label="Close Cart">
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-body p-4 overflow-y-auto" style={{ flexGrow: 1 }}>
                    {cartItems.length === 0 ? (
                        <div className="empty-cart text-center p-8 mt-12">
                            <ShoppingBag size={48} color="#cbd5e1" className="mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">Your cart is empty.</p>
                            <button onClick={() => setIsCartOpen(false)} className="btn btn-outline mt-4">Continue Shopping</button>
                        </div>
                    ) : (
                        <div className="cart-items flex flex-col gap-4">
                            {cartItems.map(item => {
                                const itemPrice = isIndia ? item.priceIn : item.priceUs;
                                return (
                                    <div key={item.id} className="cart-item flex gap-4 p-3 border rounded shadow-sm relative">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="remove-item absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                            title="Remove Item"
                                        >
                                            <X size={16} />
                                        </button>

                                        <div className="item-details flex-grow">
                                            <h4 className="m-0 text-lg font-bold pr-6">{item.name}</h4>
                                            <p className="text-gray-500 text-sm m-0 mb-2">{item.description}</p>

                                            <div className="flex justify-between items-end mt-2">
                                                <div className="quantity-controls flex items-center border rounded">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 px-2 hover:bg-gray-100">
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-2 font-medium">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 px-2 hover:bg-gray-100">
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <div className="font-bold text-lg">
                                                    {currency}{(itemPrice * item.quantity).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer p-4 border-t bg-gray-50">
                        <div className="subtotal-row flex justify-between items-center mb-4">
                            <span className="text-gray-600 text-lg">Subtotal</span>
                            <span className="font-bold text-2xl">{currency}{getSubtotal().toLocaleString()}</span>
                        </div>

                        <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-4 text-center">
                            Shipping & taxes calculated at checkout.
                        </p>

                        <button
                            onClick={handleCheckout}
                            className="btn btn-primary w-full py-4 text-lg font-bold mb-2 flex items-center justify-center gap-2 shadow-lg"
                        >
                            <ShieldCheck size={20} /> Checkout Securely ({isIndia ? 'Razorpay' : 'Stripe'})
                        </button>
                    </div>
                )}
            </div>

            <style>{`
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: -400px;
          width: 400px;
          height: 100vh;
          max-width: 100vw;
          background: white;
          z-index: 101;
          box-shadow: -5px 0 15px rgba(0,0,0,0.1);
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }
        .cart-drawer.open {
          right: 0;
        }

        .cart-item {
          background-color: white;
          border-color: var(--color-border);
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
        }
        .close-btn:hover {
          color: var(--color-text-main);
        }

        .quantity-controls {
          background-color: #f8fafc;
          border-color: #e2e8f0;
        }
      `}</style>
        </>
    );
};

export default CartDrawer;
