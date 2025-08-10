import React from "react";

const Review = () => {
  // Dummy review data with 1 image each
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "This product exceeded my expectations! Amazing quality and fast delivery.",
      image: "https://i.ibb.co.com/TxtvXcqW/51324991243-914fb4f97e-k.webp",
      date: "2025-08-01",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good product, value for money. Will buy again.",
      image:
        "https://i.ibb.co.com/MDn7w9hf/woman-shopping-getting-her-done-33481220.webp",
      date: "2025-08-02",
    },
    {
      name: "Michael Lee",
      rating: 5,
      comment: "Absolutely love it! Highly recommended.",
      image:
        "https://i.ibb.co.com/tw4bg975/christmas-shopping-done-black-woman-red-bags-festive-mood-joyful-donned-santa-hat-clutching-shopper.webp",
      date: "2025-08-03",
    },
    {
      name: "Emily Johnson",
      rating: 3,
      comment: "The product was okay, but delivery was late.",
      image:
        "https://i.ibb.co.com/twhnp1gY/photo-cute-charming-girl-wear-blue-clothes-make-order-shopping-home-okey-sign-apartment-flat-indoors.webp",
      date: "2025-08-04",
    },
    {
      name: "David Kim",
      rating: 4,
      comment: "Looks great and works perfectly. Worth the price.",
      image:
        "https://i.ibb.co.com/0Www4HC/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop-s-1258-1642.jpg",
      date: "2025-08-05",
    },
    {
      name: "Sophia Brown",
      rating: 5,
      comment: "Perfect! Just as described and high quality.",
      image: "https://i.ibb.co.com/C5gdbMXL/images-6.jpg",
      date: "2025-08-06",
    },
    {
      name: "Liam Wilson",
      rating: 4,
      comment: "Really nice product, I’m satisfied with my purchase.",
      image:
        "https://i.ibb.co.com/Rk62cWhv/front-view-attractive-female-blue-shirt-dress-holding-shopping-packages-blue-140725-23890.jpg",
      date: "2025-08-07",
    },
    {
      name: "Olivia Taylor",
      rating: 5,
      comment: "Superb quality and fast shipping. Love it!",
      image:
        "https://i.ibb.co.com/sT8XxMb/grocery-shopping-done-excited-young-latin-woman-parking-lot-packages-cart-full-groceries-market-s-28.webp",
      date: "2025-08-08",
    },
    {
      name: "Noah Martinez",
      rating: 3,
      comment: "Product is okay, not bad for the price.",
      image: "https://i.ibb.co.com/vvCqkdHD/istockphoto-2153511740-612x612.jpg",
      date: "2025-08-09",
    },
    {
      name: "Ava Anderson",
      rating: 5,
      comment: "Fantastic purchase! Highly recommend to everyone.",
      image: "https://i.ibb.co.com/G3G2dK7G/istockphoto-1729402032-612x612.jpg",
      date: "2025-08-10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#1B365D] ">
        Customer Reviews
      </h2>
      <p className="text-gray-600 mb-8">
        Hear what our happy customers have to say about their purchases
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Image */}
            <img
              src={review.image}
              alt="Review"
              className="w-full h-40 object-cover rounded mb-3"
            />

            {/* Review Info */}
            <h4 className="font-semibold text-lg">{review.name}</h4>
            <p className="text-yellow-500">
              {"⭐".repeat(review.rating)}
              <span className="text-gray-500"> ({review.rating})</span>
            </p>

            <p className="text-gray-700 text-sm flex-grow mt-2">
              {review.comment}
            </p>

            <p className="text-xs text-gray-400 mt-3">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
