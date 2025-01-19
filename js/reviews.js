let currentReview = 0;

function showReviews() {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((review, index) => {
    review.style.transform = `translateX(-${currentReview * 100}%)`;
  });
}

function prevReview() {
  const reviews = document.querySelectorAll(".review");
  if (currentReview > 0) {
    currentReview--;
  } else {
    currentReview = reviews.length - 3; // Shows the last 3 reviews
  }
  showReviews();
}

function nextReview() {
  const reviews = document.querySelectorAll(".review");
  if (currentReview < reviews.length - 3) {
    currentReview++;
  } else {
    currentReview = 0; // Resets to the first 3 reviews
  }
  showReviews();
}

// Initial call to show the first set of reviews
showReviews();
