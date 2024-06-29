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
      totalAmountElement.textContent = Total; 
      {totalAmount.toFixed(2)};
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
      // discountedAmountElement.textContent = discount > 0 ? Discounted;
      // {discountedAmount.toFixed(2)}'';
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