import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Filter } from 'lucide-react'
import { products, categories } from '../../data/products'
import { useCart } from '../../contexts/CartContext'
import './StorePage.css'

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart, cartCount } = useCart()

  const filtered = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="store-page">
      <section className="store-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">Tesla Shop</p>
            <h1>Marketplace</h1>
            <p className="hero-desc">Official accessories, apparel and charging products.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="store-toolbar">
            <div className="category-tabs">
              <button 
                className={`cat-tab ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link to="/store/cart" className="cart-link">
              <ShoppingCart size={18} />
              Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>

          <div className="products-grid">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="product-card">
                  <Link to={`/store/${p.id}`} className="product-img">
                    <img src={p.image} alt={p.name} loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                    <div className="product-img-fallback">{p.name.charAt(0)}</div>
                  </Link>
                  <div className="product-body">
                    <span className="product-cat">{p.category}</span>
                    <Link to={`/store/${p.id}`}>
                      <h3>{p.name}</h3>
                    </Link>
                    <p className="product-desc">{p.description.slice(0, 80)}...</p>
                    <div className="product-footer">
                      <strong>${p.price}</strong>
                      <button 
                        className="add-btn"
                        onClick={() => addToCart(p)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
