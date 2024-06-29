import React from 'react'
import '../style/cart.css';

const cart = () => {

    document.addEventListener('DOMContentLoaded', () => {
        const removeButtons = document.querySelectorAll('.remove-btn');
        const quantityInputs = document.querySelectorAll('.quantity-input');
        const summaryDetails = document.getElementById('summary-details');
        const totalAmountElement = document.getElementById('total-amount');
        const discountedAmountElement = document.getElementById('discounted-amount');
        const applyCouponButton = document.getElementById('apply-coupon');
        let totalAmount = 0;
        let discount = 0;

        function updateTotal() {
            const items = document.querySelectorAll('.cart-item');
            totalAmount = 0;
            let summaryHTML = '';

            items.forEach(item => {
                const price = parseFloat(item.querySelector('p:nth-child(3)').textContent.replace('Price: $', ''));
                const quantity = item.querySelector('.quantity-input').value;
                const itemName = item.querySelector('h3').textContent;
                const itemTotal = price * quantity;

                totalAmount += itemTotal;
                summaryHTML += <p>${itemName} (x${quantity}): $${itemTotal.toFixed(2)}</p>;
            });

            summaryDetails.innerHTML = summaryHTML;
            // totalAmountElement.textContent = Total: ${ totalAmount.toFixed(2) };
            updateDiscount();
        }

        function updateDiscount() {
            const couponCode = document.getElementById('coupon-code').value;
            if (couponCode === 'DISCOUNT10') {
                discount = totalAmount * 0.10;
            } else {
                discount = 0;
            }
            const discountedAmount = totalAmount - discount;
            // discountedAmountElement.textContent = discount > 0 ? Discounted Total: $${ discountedAmount.toFixed(2) } : '';
        }

        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const item = e.target.closest('.cart-item');
                item.remove();
                updateTotal();
            });
        });

        quantityInputs.forEach(input => {
            input.addEventListener('change', () => {
                if (input.value < 1) {
                    input.value = 1;
                }
                updateTotal();
            });
        });

        applyCouponButton.addEventListener('click', updateDiscount);

        updateTotal();
    });

    return (
        <>
            <div>
                <main>
                    <div class="main-container">
                        <div class="cart-container">
                            <h2>Your Cart</h2>
                            <div class="cart-item">
                                <image src="chair.jpg" alt="Chair" />
                                <div class="item-details">
                                    <h3>Comfortable Chair</h3>
                                    <p>Description of the chair</p>
                                    <p>Price: $50</p>
                                    <label for="quantity-chair">Quantity:</label>
                                    <input type="number" id="quantity-chair" class="quantity-input" min="1" value="1" />
                                    <button class="remove-btn">Remove</button>
                                </div>
                            </div>
                            <div class="cart-item">
                                <img src="table.jpg" alt="Table" />
                                <div class="item-details">
                                    <h3>Wooden Table</h3>
                                    <p>Description of the table</p>
                                    <p>Price: $100</p>
                                    <label for="quantity-table">Quantity:</label>
                                    <input type="number" id="quantity-table" class="quantity-input" min="1" value="1" />
                                    <button class="remove-btn">Remove</button>
                                </div>
                            </div>
                        </div>
                        <div class="summary-container">
                            <h2>Order Summary</h2>
                            <div id="summary-details"></div>
                            <h3 id="total-amount">Total: $150</h3>
                            <div class="coupon-container">
                                <label for="coupon-code">Coupon Code:</label>
                                <input type="text" id="coupon-code" placeholder="Enter coupon code" />
                                <button id="apply-coupon">Apply Coupon</button>
                            </div>
                            <h3 id="discounted-amount"></h3>
                            <button class="place-order-btn">Place Order</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default cart;