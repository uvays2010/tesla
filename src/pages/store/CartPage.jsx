import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'
import './CartPage.css'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <ShoppingBag size={48} strokeWidth={1.5} />
        <h1>Your cart is empty</h1>
        <p>Browse the shop and add some products.</p>
        <Link to="/store" className="btn btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/store" className="back-link">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
          <h1>Shopping Cart ({cartCount})</h1>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} onError={(e) => { e.target.style.opacity = 0.3 }} />
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <span className="cat">{item.category}</span>
                  <strong>${item.price}</strong>
                </div>
                <div className="cart-item-qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={14} />
                  </button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${cartTotal.toLocaleString()}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <strong>${cartTotal.toLocaleString()}</strong>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={() => alert('Demo only — Checkout is simulated. No real payment.')}>
              Proceed to Checkout (Demo)
            </button>
            <p className="demo-note">This is a frontend demo. No real orders are placed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
