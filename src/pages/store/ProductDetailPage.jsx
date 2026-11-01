import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react'
import { getProductById } from '../../data/products'
import { useCart } from '../../contexts/CartContext'
import './ProductDetailPage.css'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found</h1>
        <Link to="/store" className="btn btn-primary">Back to Shop</Link>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/store" className="back-link">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="pd-layout">
          <div className="pd-image">
            <img src={product.image} alt={product.name} onError={(e) => { e.target.style.opacity = 0.4 }} />
          </div>
          <div className="pd-info">
            <span className="pd-cat">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="pd-price">${product.price}</p>
            <p className="pd-desc">{product.description}</p>
            
            <ul className="pd-features">
              {product.features.map((f, i) => (
                <li key={i}><Check size={16} /> {f}</li>
              ))}
            </ul>

            <div className="pd-actions">
              <button className="btn btn-primary" onClick={() => addToCart(product)}>
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <Link to="/store/cart" className="btn btn-secondary">View Cart</Link>
            </div>

            <p className="pd-stock">
              {product.stock > 0 ? `${product.stock} in stock (demo)` : 'Out of stock'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
