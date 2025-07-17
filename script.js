// Shopping App JavaScript
class ShoppingApp {
    constructor() {
        this.cart = [];
        this.products = [
            {
                id: 1,
                title: "iPhone 14 Pro Max",
                description: "Latest iPhone with amazing camera and A16 Bionic chip",
                currentPrice: 129999,
                originalPrice: 139999,
                discount: "7% OFF",
                rating: 4.8,
                reviews: 2856,
                image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
                category: "Electronics"
            },
            {
                id: 2,
                title: "Samsung Galaxy Watch 5",
                description: "Advanced smartwatch with health monitoring features",
                currentPrice: 27999,
                originalPrice: 31999,
                discount: "12% OFF",
                rating: 4.6,
                reviews: 1523,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
                category: "Electronics"
            },
            {
                id: 3,
                title: "Nike Air Max 270",
                description: "Comfortable running shoes with air max technology",
                currentPrice: 12995,
                originalPrice: 15995,
                discount: "19% OFF",
                rating: 4.7,
                reviews: 3421,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
                category: "Fashion"
            },
            {
                id: 4,
                title: "Canon EOS R6 Mark II",
                description: "Professional mirrorless camera for photography enthusiasts",
                currentPrice: 199999,
                originalPrice: 219999,
                discount: "9% OFF",
                rating: 4.9,
                reviews: 892,
                image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
                category: "Electronics"
            },
            {
                id: 5,
                title: "Adidas Ultraboost 22",
                description: "Premium running shoes with boost technology",
                currentPrice: 16999,
                originalPrice: 19999,
                discount: "15% OFF",
                rating: 4.5,
                reviews: 2134,
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
                category: "Fashion"
            },
            {
                id: 6,
                title: "MacBook Pro M2",
                description: "Powerful laptop with M2 chip for professionals",
                currentPrice: 199999,
                originalPrice: 224999,
                discount: "11% OFF",
                rating: 4.8,
                reviews: 1876,
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
                category: "Electronics"
            },
            {
                id: 7,
                title: "Levi's 501 Original Jeans",
                description: "Classic straight fit jeans in premium denim",
                currentPrice: 4999,
                originalPrice: 6999,
                discount: "29% OFF",
                rating: 4.4,
                reviews: 5432,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
                category: "Fashion"
            },
            {
                id: 8,
                title: "Sony WH-1000XM5",
                description: "Premium noise-cancelling wireless headphones",
                currentPrice: 29999,
                originalPrice: 34999,
                discount: "14% OFF",
                rating: 4.9,
                reviews: 2987,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
                category: "Electronics"
            },
            {
                id: 9,
                title: "The Psychology of Money",
                description: "Best-selling book about financial wisdom",
                currentPrice: 299,
                originalPrice: 399,
                discount: "25% OFF",
                rating: 4.6,
                reviews: 8765,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                category: "Books"
            },
            {
                id: 10,
                title: "Yoga Mat Premium",
                description: "Non-slip yoga mat for home workout sessions",
                currentPrice: 2499,
                originalPrice: 3499,
                discount: "29% OFF",
                rating: 4.3,
                reviews: 1234,
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                category: "Sports"
            },
            {
                id: 11,
                title: "Instant Pot Duo 7-in-1",
                description: "Multi-functional electric pressure cooker",
                currentPrice: 8999,
                originalPrice: 12999,
                discount: "31% OFF",
                rating: 4.7,
                reviews: 4321,
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
                category: "Home & Kitchen"
            },
            {
                id: 12,
                title: "Maybelline Fit Me Foundation",
                description: "Lightweight foundation for natural coverage",
                currentPrice: 599,
                originalPrice: 799,
                discount: "25% OFF",
                rating: 4.2,
                reviews: 6789,
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
                category: "Beauty"
            }
        ];
        
        this.whatsappNumber = "919103594759"; // Your specified WhatsApp number
        this.init();
    }

    init() {
        this.renderProducts();
        this.setupEventListeners();
        this.updateCartDisplay();
    }

    setupEventListeners() {
        // Cart icon click
        document.getElementById('cartCount').parentElement.addEventListener('click', () => {
            this.toggleCart();
        });

        // Close cart
        document.getElementById('closeCart').addEventListener('click', () => {
            this.closeCart();
        });

        // Overlay click
        document.getElementById('overlay').addEventListener('click', () => {
            this.closeCart();
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchProducts(e.target.value);
        });

        // Checkout button
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.proceedToWhatsApp();
        });

        // Category filter
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterByCategory(e.target.textContent);
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Hero CTA button
        document.querySelector('.cta-button').addEventListener('click', () => {
            document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
        });
    }

    renderProducts(productsToRender = this.products) {
        const productsGrid = document.getElementById('productsGrid');
        
        if (productsToRender.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = productsToRender.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="discount-badge">${product.discount}</div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="current-price">₹${this.formatPrice(product.currentPrice)}</span>
                        <span class="original-price">₹${this.formatPrice(product.originalPrice)}</span>
                        <span class="price-discount">${product.discount}</span>
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating} (${product.reviews})</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="shoppingApp.addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHtml = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        
        return starsHtml;
    }

    formatPrice(price) {
        return price.toLocaleString('en-IN');
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        
        this.updateCartDisplay();
        this.showAddToCartFeedback(productId);
        
        // Auto-open cart for better UX
        setTimeout(() => {
            this.openCart();
        }, 500);
    }

    showAddToCartFeedback(productId) {
        const button = document.querySelector(`[data-id="${productId}"] .add-to-cart-btn`);
        button.classList.add('success');
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        
        setTimeout(() => {
            button.classList.remove('success');
            button.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        }, 2000);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartDisplay();
    }

    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.updateCartDisplay();
            }
        }
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = this.cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = this.formatPrice(totalPrice);
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">₹${this.formatPrice(item.currentPrice)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="shoppingApp.updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="shoppingApp.updateQuantity(${item.id}, 1)">+</button>
                            <button class="quantity-btn" onclick="shoppingApp.removeFromCart(${item.id})" style="margin-left: 0.5rem; color: #ff6b6b;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar.classList.contains('open')) {
            this.closeCart();
        } else {
            this.openCart();
        }
    }

    openCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    searchProducts(query) {
        if (!query.trim()) {
            this.renderProducts();
            return;
        }
        
        const filteredProducts = this.products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        this.renderProducts(filteredProducts);
    }

    filterByCategory(category) {
        if (category === 'Electronics' || category === 'Fashion' || 
            category === 'Home & Kitchen' || category === 'Beauty' || 
            category === 'Sports' || category === 'Books') {
            const filteredProducts = this.products.filter(product => 
                product.category === category
            );
            this.renderProducts(filteredProducts);
        } else {
            this.renderProducts();
        }
    }

    proceedToWhatsApp() {
        if (this.cart.length === 0) {
            alert('Your cart is empty! Add some products first.');
            return;
        }

        const orderDetails = this.generateOrderMessage();
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(orderDetails)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Clear cart after sending to WhatsApp
        // this.cart = [];
        // this.updateCartDisplay();
        // this.closeCart();
    }

    generateOrderMessage() {
        const totalPrice = this.cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
        
        let message = "🛒 *New Order from ShopEase*\n\n";
        message += "📋 *Order Details:*\n";
        
        this.cart.forEach((item, index) => {
            message += `${index + 1}. *${item.title}*\n`;
            message += `   Price: ₹${this.formatPrice(item.currentPrice)}\n`;
            message += `   Quantity: ${item.quantity}\n`;
            message += `   Subtotal: ₹${this.formatPrice(item.currentPrice * item.quantity)}\n\n`;
        });
        
        message += `💰 *Total Amount: ₹${this.formatPrice(totalPrice)}*\n\n`;
        message += "📱 *Customer Details:*\n";
        message += "Name: [Please provide your name]\n";
        message += "Address: [Please provide delivery address]\n";
        message += "Phone: [Please provide phone number]\n\n";
        message += "Thank you for shopping with ShopEase! 🙏\n";
        message += "We'll contact you shortly to confirm your order.";
        
        return message;
    }

    // Additional utility methods
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Initialize animations
    initAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Initialize the shopping app
const shoppingApp = new ShoppingApp();

// Additional event listeners for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar.classList.contains('open')) {
            cartSidebar.style.width = '400px';
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close cart
    if (e.key === 'Escape') {
        shoppingApp.closeCart();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}